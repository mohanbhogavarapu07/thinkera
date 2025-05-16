import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts, BlogPost } from '@/data/blogData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Bookmark, ThumbsUp, Facebook, Twitter, Linkedin } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // Find the post with the matching slug
    const currentPost = blogPosts.find(post => post.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Get related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      
      setRelatedPosts(related);
      
      // Scroll to top on page load
      window.scrollTo(0, 0);
    } else {
      // If post not found, navigate to blog listing
      navigate('/blog');
    }
  }, [slug, navigate]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post?.title || '')}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied",
          description: "The article link has been copied to your clipboard."
        });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Loading article...</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-skill-dark">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Animated Background */}
        <section className="relative min-h-[50vh] pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-skill-purple/5 to-skill-blue/5">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-skill-purple/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-skill-blue/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          </div>
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <Link to="/blog" className="group inline-flex items-center text-skill-purple dark:text-skill-blue hover:opacity-80 transition-all mb-8">
                <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to all articles
              </Link>
              
              <div className="mb-6 animate-fade-in">
                <Badge className="mb-6 bg-white/80 dark:bg-skill-dark/80 backdrop-blur-sm text-skill-purple dark:text-skill-blue border border-skill-purple/20 dark:border-skill-blue/20 hover:bg-white/90 dark:hover:bg-skill-dark/90 transition-colors">
                  {post.categoryLabel}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 hero-gradient-text">
                  {post.title}
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-gray-100 dark:border-skill-gray">
                  <div className="flex items-center gap-8">
                    <div className="relative flex-shrink-0 w-16 h-16">
                      <div className="absolute inset-0 bg-gradient-to-br from-skill-purple to-skill-blue rounded-full p-0.5 -m-0.5">
                        <div className="w-full h-full rounded-full bg-white dark:bg-skill-dark p-0.5">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-full h-full rounded-full border-2 border-white dark:border-skill-dark object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 pr-4">
                      <p className="font-semibold text-skill-dark dark:text-white text-lg truncate">{post.author.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{post.author.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center bg-white/80 dark:bg-skill-dark/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 dark:border-skill-gray">
                      <Calendar size={16} className="mr-2 text-skill-purple dark:text-skill-blue flex-shrink-0" />
                      <span>{post.publishDate}</span>
                    </div>
                    <div className="flex items-center bg-white/80 dark:bg-skill-dark/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 dark:border-skill-gray">
                      <Clock size={16} className="mr-2 text-skill-purple dark:text-skill-blue flex-shrink-0" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-skill-dark to-transparent"></div>
        </section>
        
        {/* Article Content */}
        <div className="w-full -mt-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto glass-card rounded-2xl shadow-2xl overflow-hidden border border-white/20 dark:border-skill-gray/20">
              {/* Article Cover Image */}
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-100 dark:bg-skill-gray relative group overflow-hidden">
                <img 
                  src={post.coverImage || '/placeholder.svg'} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium mb-2">Featured Image</p>
                    <p className="text-xs opacity-80">Photo by {post.author.name}</p>
                  </div>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Main Content */}
                  <div className="w-full lg:w-2/3">
                    <div 
                      className="prose prose-lg max-w-none dark:prose-invert 
                        prose-headings:hero-gradient-text
                        prose-a:text-skill-purple dark:prose-a:text-skill-blue hover:prose-a:opacity-80 prose-a:transition-opacity
                        prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-gray-100 dark:prose-img:border-skill-gray/30
                        prose-blockquote:border-l-4 prose-blockquote:border-skill-purple/50 dark:prose-blockquote:border-skill-blue/50 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-skill-dark/30 prose-blockquote:not-italic
                        prose-strong:text-skill-dark dark:prose-strong:text-white
                        prose-code:bg-gray-50 dark:prose-code:bg-skill-dark/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                        prose-pre:bg-gray-50 dark:prose-pre:bg-skill-dark/50 prose-pre:border prose-pre:border-gray-100 dark:prose-pre:border-skill-gray/30"
                      dangerouslySetInnerHTML={{ __html: post.content }} 
                    />
                    
                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-skill-gray/30">
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                        <span className="w-6 h-px bg-gradient-to-r from-skill-purple to-skill-blue dark:from-skill-blue dark:to-skill-teal mr-2"></span>
                        Related Topics
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="text-sm bg-white/80 dark:bg-skill-dark/80 backdrop-blur-sm border-gray-200 dark:border-skill-gray/30 hover:bg-white/90 dark:hover:bg-skill-dark/90 transition-all hover:shadow-sm hover:-translate-y-0.5"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Engagement Actions */}
                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-skill-gray/30 flex flex-col sm:flex-row sm:justify-between gap-6">
                      <div className="flex items-center space-x-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-full border-gray-200 dark:border-skill-gray/30 bg-white/80 dark:bg-skill-dark/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-skill-dark/90 hover:shadow-sm hover:-translate-y-0.5 transition-all"
                        >
                          <ThumbsUp size={16} className="mr-2 text-skill-purple dark:text-skill-blue" />
                          <span className="text-skill-dark dark:text-white">Helpful</span>
                          <span className="ml-2 text-xs bg-gray-100 dark:bg-skill-gray/30 text-skill-dark dark:text-white px-2 py-0.5 rounded-full">
                            24
                          </span>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-full border-gray-200 dark:border-skill-gray/30 bg-white/80 dark:bg-skill-dark/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-skill-dark/90 hover:shadow-sm hover:-translate-y-0.5 transition-all"
                        >
                          <Bookmark size={16} className="mr-2 text-skill-purple dark:text-skill-blue" />
                          <span className="text-skill-dark dark:text-white">Save</span>
                        </Button>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Share this article:</span>
                        <div className="flex space-x-1">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full h-8 w-8 border-gray-200 dark:border-skill-gray/30 bg-white/80 dark:bg-skill-dark/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-skill-dark/90 hover:shadow-sm hover:-translate-y-0.5 transition-all"
                            onClick={() => handleShare('facebook')}
                          >
                            <Facebook size={14} className="text-gray-600 dark:text-gray-300" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full h-8 w-8 border-gray-200 dark:border-skill-gray/30 bg-white/80 dark:bg-skill-dark/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-skill-dark/90 hover:shadow-sm hover:-translate-y-0.5 transition-all"
                            onClick={() => handleShare('twitter')}
                          >
                            <Twitter size={14} className="text-gray-600 dark:text-gray-300" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full h-8 w-8 border-gray-200 dark:border-skill-gray/30 bg-white/80 dark:bg-skill-dark/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-skill-dark/90 hover:shadow-sm hover:-translate-y-0.5 transition-all"
                            onClick={() => handleShare('linkedin')}
                          >
                            <Linkedin size={14} className="text-gray-600 dark:text-gray-300" />
                          </Button>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="rounded-full h-8 w-8 border-gray-200 dark:border-skill-gray/30 bg-white/80 dark:bg-skill-dark/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-skill-dark/90 hover:shadow-sm hover:-translate-y-0.5 transition-all"
                              >
                                <Share2 size={14} className="text-gray-600 dark:text-gray-300" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                              align="end" 
                              className="border-gray-100 dark:border-skill-gray/30 bg-white/80 dark:bg-skill-dark/80 backdrop-blur-lg shadow-xl"
                            >
                              <DropdownMenuItem 
                                onClick={() => handleShare('copy')}
                                className="cursor-pointer px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-skill-gray/20 rounded"
                              >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                                Copy link
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sidebar */}
                  <div className="w-full lg:w-1/3 space-y-8">
                    {/* Author Info Card */}
                    <div className="glass-card p-6 rounded-2xl border border-white/20 dark:border-skill-gray/20 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold hero-gradient-text">
                          About the Author
                        </h3>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:bg-white/20 hover:text-skill-purple dark:hover:text-skill-blue">
                            <Twitter size={14} />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:bg-white/20 hover:text-skill-purple dark:hover:text-skill-blue">
                            <Linkedin size={14} />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-8 mb-6">
                        <div className="relative flex-shrink-0 w-24 h-24">
                          <div className="absolute inset-0 bg-gradient-to-br from-skill-purple to-skill-blue rounded-full p-0.5 -m-0.5">
                            <div className="w-full h-full rounded-full bg-white dark:bg-skill-dark p-0.5">
                              <img 
                                src={post.author.avatar} 
                                alt={post.author.name} 
                                className="w-full h-full rounded-full border-2 border-white dark:border-skill-dark object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-lg text-skill-dark dark:text-white truncate">{post.author.name}</p>
                          <p className="text-sm text-skill-purple dark:text-skill-blue truncate">{post.author.title}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                        Expert instructor with over 10 years of industry experience, specializing in {post.category.split('-').join(' ')} and related technologies. Passionate about sharing knowledge and helping others grow in their careers.
                      </p>
                      
                      <Button 
                        className="w-full button-gradient"
                        size="sm"
                      >
                        View Profile
                      </Button>
                    </div>
                    
                    {/* Related Articles */}
                    {relatedPosts.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-skill-dark dark:text-white">You might also like</h3>
                        <div className="space-y-4">
                          {relatedPosts.map((relatedPost) => (
                            <Link to={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="block group">
                              <Card className="border-gray-100 dark:border-skill-gray/30 overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
                                <CardContent className="p-4 flex gap-4">
                                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-skill-gray">
                                    <img 
                                      src={relatedPost.coverImage || '/placeholder.svg'} 
                                      alt={relatedPost.title}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-skill-dark dark:text-white line-clamp-2 group-hover:text-skill-purple dark:group-hover:text-skill-blue transition-colors">
                                      {relatedPost.title}
                                    </h4>
                                    <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                                      <Clock size={12} className="mr-1 flex-shrink-0" />
                                      <span>{relatedPost.readTime} min read</span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Call to Action */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-skill-purple to-skill-blue dark:from-skill-blue dark:to-skill-teal p-6 text-white">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10"></div>
                      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10"></div>
                      
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-3">Want to learn more?</h3>
                        <p className="mb-6 text-white/90 text-sm leading-relaxed">
                          Explore our courses and start building in-demand skills for your career. Join thousands of students who have already transformed their careers with us.
                        </p>
                        <Button 
                          className="w-full bg-white text-skill-purple hover:bg-white/90 hover:shadow-lg transition-all transform hover:-translate-y-0.5" 
                          size="lg"
                          asChild
                        >
                          <Link to="/courses" className="font-medium">
                            Explore Courses
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
