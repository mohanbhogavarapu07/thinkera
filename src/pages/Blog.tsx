import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts, BlogPost } from '@/data/blogData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { 
  ArrowRight, 
  Search, 
  Calendar, 
  Clock, 
  ArrowUpRight, 
  ChevronDown,
  Bookmark,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react';
import BlogHeader from '@/components/BlogHeader';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";

interface BlogProps {
  showHeader?: boolean;
}

// Format date to display as "Month Day, Year"
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const Blog = ({ showHeader = true }: BlogProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [activeTab, setActiveTab] = useState(categoryParam || 'all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Handle sharing
  const handleShare = (platform: string, post: BlogPost) => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`;
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

  // Filter posts based on category and search term
  useEffect(() => {
    let filtered = [...blogPosts];
    
    // Apply category filter if specified
    if (categoryParam && categoryParam !== 'all') {
      filtered = filtered.filter(post => post.category === categoryParam);
      setActiveTab(categoryParam);
    } else {
      setActiveTab('all');
    }
    
    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredPosts(filtered);
  }, [categoryParam, searchTerm]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'tech-trends', label: 'Tech Trends' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'career', label: 'Career Advice' },
    { id: 'success-stories', label: 'Success Stories' },
  ];

  // Get featured post (most recent)
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {showHeader && (
          <BlogHeader 
            onSearch={(term) => setSearchTerm(term)}
            onCategoryChange={handleTabChange}
            activeCategory={activeTab}
          />
        )}

        {/* Featured Post */}
        {activeTab === 'all' && !searchTerm && (
          <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container-section">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-80 lg:h-auto">
                      <img 
                        src={featuredPost.coverImage || '/placeholder.svg'} 
                        alt={featuredPost.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-8 text-white">
                        <Badge className="bg-skill-purple text-white border-0 mb-4">
                          Featured Article
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{featuredPost.title}</h2>
                        <p className="text-white/90 line-clamp-2">{featuredPost.excerpt}</p>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-6">
                          <img 
                            src={featuredPost.author.avatar} 
                            alt={featuredPost.author.name} 
                            className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{featuredPost.author.name}</p>
                            <p className="text-sm text-gray-500">{featuredPost.author.title}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4 text-gray-600">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-1.5 text-skill-purple" />
                              <span>{formatDate(featuredPost.publishDate)}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock size={16} className="mr-1.5 text-skill-purple" />
                              <span>{featuredPost.readTime} min read</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 pt-2">
                            {featuredPost.tags.slice(0, 3).map((tag, index) => (
                              <Badge 
                                key={index} 
                                variant="outline" 
                                className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-600 border-gray-200"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                        <Link 
                          to={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-all font-medium shadow-md hover:shadow-lg"
                        >
                          Read Full Article 
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100"
                            onClick={() => handleShare('copy', featuredPost)}
                          >
                            <Bookmark size={18} />
                          </Button>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100"
                              >
                                <Share2 size={18} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                              <DropdownMenuItem onClick={() => handleShare('facebook', featuredPost)}>
                                <Facebook size={16} className="mr-2 text-blue-600" /> Share on Facebook
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleShare('twitter', featuredPost)}>
                                <Twitter size={16} className="mr-2 text-blue-400" /> Share on Twitter
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleShare('linkedin', featuredPost)}>
                                <Linkedin size={16} className="mr-2 text-blue-700" /> Share on LinkedIn
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleShare('copy', featuredPost)}>
                                <Mail size={16} className="mr-2" /> Copy link
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group">
                    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
                      <Link to={`/blog/${post.slug}`} className="block">
                        <div className="relative pt-[56.25%] overflow-hidden">
                          <img 
                            src={post.coverImage || '/placeholder.svg'} 
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge 
                              className="bg-white/90 backdrop-blur-sm text-skill-purple font-medium border-0 shadow-sm"
                              variant="secondary"
                            >
                              {post.categoryLabel}
                            </Badge>
                          </div>
                        </div>
                      </Link>
                      
                      <CardContent className="flex-1 flex flex-col p-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-xs font-medium text-skill-purple bg-skill-purple/10 px-2.5 py-1 rounded-full">
                              {post.categoryLabel}
                            </span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">{formatDate(post.publishDate)}</span>
                          </div>
                          
                          <div className="mb-4">
                            <Link to={`/blog/${post.slug}`} className="block">
                              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-skill-purple transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              <p className="text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
                            </Link>
                            <div className="flex justify-end mt-3">
                              <Link 
                                to={`/blog/${post.slug}`} 
                                className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-skill-purple to-skill-blue bg-clip-text text-transparent hover:opacity-80 transition-all group"
                              >
                                Read more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <Badge 
                                key={index} 
                                variant="outline" 
                                className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-600 border-gray-200"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-4 mt-auto border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <img 
                                src={post.author.avatar} 
                                alt={post.author.name} 
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                                <p className="text-xs text-gray-500">{post.readTime} min read</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-1">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleShare('copy', post);
                                }}
                              >
                                <Bookmark size={16} />
                              </Button>
                              
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-8 w-8 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                                  >
                                    <Share2 size={16} />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48">
                                  <DropdownMenuItem onClick={() => handleShare('facebook', post)}>
                                    <Facebook size={16} className="mr-2 text-blue-600" /> Facebook
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleShare('twitter', post)}>
                                    <Twitter size={16} className="mr-2 text-blue-400" /> Twitter
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleShare('linkedin', post)}>
                                    <Linkedin size={16} className="mr-2 text-blue-700" /> LinkedIn
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleShare('copy', post)}>
                                    <Mail size={16} className="mr-2" /> Copy link
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-skill-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search size={28} className="text-skill-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-500 mb-6">
                    We couldn't find any articles matching your search. Try different keywords or browse our categories.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-skill-purple text-skill-purple hover:bg-skill-purple/5"
                    onClick={() => {
                      setSearchTerm('');
                      setActiveTab('all');
                      searchParams.delete('category');
                      setSearchParams(searchParams);
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              </div>
            )}
            
            {filteredPosts.length > 0 && (
              <div className="mt-16 text-center">
                <Button 
                  variant="outline" 
                  className="border-skill-purple text-skill-purple hover:bg-skill-purple/5 px-8 py-6 rounded-xl"
                >
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
