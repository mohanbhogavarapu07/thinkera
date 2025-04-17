
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Lightbulb, ChevronRight } from "lucide-react";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with ServiceNow Development: A Beginner's Guide",
    excerpt: "Learn the fundamentals of ServiceNow development and how to build your first application on the platform.",
    date: "April 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300&q=80",
    category: "tutorials",
    tags: ["ServiceNow", "Development", "Beginners"],
    author: {
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: 2,
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Exploring how artificial intelligence is reshaping enterprise software development and what it means for developers.",
    date: "April 12, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&h=300&q=80",
    category: "industry-insights",
    tags: ["AI", "Enterprise", "Future Tech"],
    author: {
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: 3,
    title: "5 Essential Skills Every Salesforce Developer Should Master",
    excerpt: "Discover the key skills that will set you apart as a Salesforce developer in today's competitive job market.",
    date: "April 10, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&h=300&q=80",
    category: "career-tips",
    tags: ["Salesforce", "Career Development", "Skills"],
    author: {
      name: "Michael Roberts",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  },
  {
    id: 4,
    title: "Building Responsive UIs with React and Tailwind CSS",
    excerpt: "A step-by-step tutorial on creating beautiful, responsive user interfaces using React and Tailwind CSS.",
    date: "April 8, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=500&h=300&q=80",
    category: "tutorials",
    tags: ["React", "Tailwind CSS", "Frontend"],
    author: {
      name: "Jessica Kim",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  },
  {
    id: 5,
    title: "Cloud Computing Trends to Watch in 2025",
    excerpt: "Analyzing the top cloud computing trends that are shaping the future of enterprise IT infrastructure.",
    date: "April 5, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?auto=format&fit=crop&w=500&h=300&q=80",
    category: "industry-insights",
    tags: ["Cloud Computing", "Trends", "Enterprise IT"],
    author: {
      name: "David Wilson",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  },
  {
    id: 6,
    title: "How to Prepare for a Technical Interview in Software Development",
    excerpt: "Practical tips and strategies to help you ace your next technical interview in the software development field.",
    date: "April 2, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&h=300&q=80",
    category: "career-tips",
    tags: ["Interview", "Career", "Job Search"],
    author: {
      name: "Emily Thompson",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  }
];

// Featured articles
const featuredPosts = blogPosts.slice(0, 3);

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine which category to show based on the URL
  const pathSegments = location.pathname.split('/');
  const categoryFromUrl = pathSegments[pathSegments.length - 1];
  const validCategories = ['tutorials', 'industry-insights', 'career-tips'];
  
  const initialTab = validCategories.includes(categoryFromUrl) ? categoryFromUrl : 'all';
  
  // Filter posts based on search and category
  const filterPosts = (posts, category, searchTerm) => {
    let filtered = posts;
    
    // Filter by category if not "all"
    if (category !== 'all') {
      filtered = filtered.filter(post => post.category === category);
    }
    
    // Filter by search term if provided
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    return filtered;
  };
  
  const handleTabChange = (value) => {
    if (value === 'all') {
      navigate('/blog');
    } else {
      navigate(`/blog/${value}`);
    }
  };
  
  const filteredPosts = filterPosts(blogPosts, initialTab !== 'all' ? initialTab : null, searchQuery);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-skill-purple/5 to-skill-blue/5 dark:from-skill-purple/10 dark:to-skill-blue/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="hero-gradient-text">SkillForge</span> Blog
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                Insights, tutorials, and expert advice to accelerate your tech career
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 py-6 text-lg rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Articles */}
        <section className="py-16 bg-white dark:bg-skill-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute top-0 right-0 m-4">
                      <Badge className="bg-skill-purple text-white">{post.category.replace('-', ' ')}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl hover:text-skill-purple transition-colors">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center pt-0">
                    <div className="flex items-center">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="h-8 w-8 rounded-full mr-2"
                      />
                      <span className="text-sm font-medium">{post.author.name}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`/blog/${post.id}`} className="flex items-center">
                        Read <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Categories and Posts */}
        <section className="py-16 bg-gray-50 dark:bg-skill-dark/50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue={initialTab} onValueChange={handleTabChange} className="w-full">
              <div className="flex justify-between items-center mb-8">
                <TabsList className="bg-white dark:bg-skill-dark/80">
                  <TabsTrigger value="all" className="text-sm md:text-base">All Posts</TabsTrigger>
                  <TabsTrigger value="tutorials" className="text-sm md:text-base">
                    <BookOpen className="h-4 w-4 mr-1 hidden sm:inline" />
                    Tutorials
                  </TabsTrigger>
                  <TabsTrigger value="industry-insights" className="text-sm md:text-base">
                    <Lightbulb className="h-4 w-4 mr-1 hidden sm:inline" />
                    Industry Insights
                  </TabsTrigger>
                  <TabsTrigger value="career-tips" className="text-sm md:text-base">
                    <ChevronRight className="h-4 w-4 mr-1 hidden sm:inline" />
                    Career Tips
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tutorials" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="industry-insights" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="career-tips" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No posts found</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-white dark:bg-skill-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Get the latest articles, tutorials, and industry insights delivered straight to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Your email address" className="flex-grow" />
                <Button className="button-gradient">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Blog Post Card Component
const BlogPostCard = ({ post }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="relative h-44 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 m-2">
          <Badge variant="secondary" className="bg-white/80 dark:bg-skill-dark/80 text-xs">
            {post.category.replace('-', ' ')}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg line-clamp-2 hover:text-skill-purple transition-colors">
          <a href={`/blog/${post.id}`}>{post.title}</a>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3 mb-3">
          {post.excerpt}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-gray-50 dark:bg-skill-dark/60">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 flex justify-between items-center">
        <div className="flex items-center space-x-3 text-xs text-gray-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <Button variant="ghost" size="sm" className="text-skill-purple dark:text-skill-purple-light p-0" asChild>
          <a href={`/blog/${post.id}`}>Read more</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Blog;
