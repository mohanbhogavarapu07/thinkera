
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp, User, Twitter, Facebook, Linkedin } from "lucide-react";

// Sample blog post data (same as in Blog.tsx)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with ServiceNow Development: A Beginner's Guide",
    excerpt: "Learn the fundamentals of ServiceNow development and how to build your first application on the platform.",
    content: `
      <p class="mb-6">ServiceNow has become one of the most important platforms for enterprise service management, and learning to develop on it can open many career opportunities. In this guide, we'll walk through the basics of ServiceNow development and help you get started with your first application.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Understanding the ServiceNow Platform</h2>
      
      <p class="mb-6">ServiceNow is a cloud-based platform that delivers digital workflows. At its core, ServiceNow is a relational database with a web interface and powerful automation capabilities. As a developer, you'll be working with:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Tables and database records</li>
        <li class="mb-2">Forms and user interfaces</li>
        <li class="mb-2">Business rules and script actions</li>
        <li class="mb-2">Workflows and approvals</li>
        <li class="mb-2">Reporting and dashboards</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Setting Up Your Developer Instance</h2>
      
      <p class="mb-6">Before you can start developing, you need your own instance. ServiceNow offers free developer instances that you can use to learn and practice.</p>
      
      <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2">Visit developer.servicenow.com and create an account</li>
        <li class="mb-2">Request a Personal Developer Instance (PDI)</li>
        <li class="mb-2">Log in to your instance once it's ready</li>
        <li class="mb-2">Familiarize yourself with the interface</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Your First Application</h2>
      
      <p class="mb-6">Let's create a simple application for tracking office equipment:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Create a new application</h3>
      
      <p class="mb-6">Navigate to System Applications > Studio and click "Create Application". Name it "Equipment Tracker" and give it a description.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">2. Define your data model</h3>
      
      <p class="mb-6">In Studio, create a new table called "Equipment" with the following fields:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Name (string)</li>
        <li class="mb-2">Type (choice: Computer, Phone, Other)</li>
        <li class="mb-2">Serial Number (string)</li>
        <li class="mb-2">Assigned To (reference to User table)</li>
        <li class="mb-2">Purchase Date (date)</li>
        <li class="mb-2">Status (choice: Available, Assigned, In Repair, Retired)</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">3. Create the user interface</h3>
      
      <p class="mb-6">Design forms and lists for your Equipment table. Create a module that users can access from the application navigator.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">4. Add business logic</h3>
      
      <p class="mb-6">Create a business rule that runs when equipment is assigned, which automatically changes the status to "Assigned" and sends an email notification to the assigned user.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Next Steps</h2>
      
      <p class="mb-6">Once you've built this basic application, you can expand your skills by:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Creating more complex workflows</li>
        <li class="mb-2">Building Service Portal widgets</li>
        <li class="mb-2">Learning client-side scripting</li>
        <li class="mb-2">Exploring integrations with other systems</li>
      </ul>
      
      <p class="mb-6">ServiceNow development is a vast field with many specialized areas. Start with these fundamentals and gradually expand your expertise based on your interests and career goals.</p>
    `,
    date: "April 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=600&q=80",
    category: "tutorials",
    tags: ["ServiceNow", "Development", "Beginners"],
    author: {
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "ServiceNow Developer and Solution Architect with 10+ years of experience in enterprise IT management."
    },
    relatedPosts: [2, 4, 6]
  },
  {
    id: 2,
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Exploring how artificial intelligence is reshaping enterprise software development and what it means for developers.",
    content: `<p>Detailed content about AI in enterprise software would go here...</p>`,
    date: "April 12, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=600&q=80",
    category: "industry-insights",
    tags: ["AI", "Enterprise", "Future Tech"],
    author: {
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "AI researcher and tech writer specializing in enterprise applications of machine learning."
    },
    relatedPosts: [1, 3, 5]
  },
  {
    id: 3,
    title: "5 Essential Skills Every Salesforce Developer Should Master",
    excerpt: "Discover the key skills that will set you apart as a Salesforce developer in today's competitive job market.",
    content: `<p>Detailed content about Salesforce developer skills would go here...</p>`,
    date: "April 10, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=600&q=80",
    category: "career-tips",
    tags: ["Salesforce", "Career Development", "Skills"],
    author: {
      name: "Michael Roberts",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "Salesforce Technical Architect and career mentor with experience at Fortune 500 companies."
    },
    relatedPosts: [2, 4, 6]
  },
  {
    id: 4,
    title: "Building Responsive UIs with React and Tailwind CSS",
    excerpt: "A step-by-step tutorial on creating beautiful, responsive user interfaces using React and Tailwind CSS.",
    content: `<p>Detailed content about React and Tailwind would go here...</p>`,
    date: "April 8, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1200&h=600&q=80",
    category: "tutorials",
    tags: ["React", "Tailwind CSS", "Frontend"],
    author: {
      name: "Jessica Kim",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "Frontend developer and UI/UX specialist with a passion for creating elegant, user-friendly interfaces."
    },
    relatedPosts: [1, 3, 5]
  },
  {
    id: 5,
    title: "Cloud Computing Trends to Watch in 2025",
    excerpt: "Analyzing the top cloud computing trends that are shaping the future of enterprise IT infrastructure.",
    content: `<p>Detailed content about cloud computing trends would go here...</p>`,
    date: "April 5, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?auto=format&fit=crop&w=1200&h=600&q=80",
    category: "industry-insights",
    tags: ["Cloud Computing", "Trends", "Enterprise IT"],
    author: {
      name: "David Wilson",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Cloud architect and consultant specializing in multi-cloud environments and digital transformation."
    },
    relatedPosts: [2, 4, 6]
  },
  {
    id: 6,
    title: "How to Prepare for a Technical Interview in Software Development",
    excerpt: "Practical tips and strategies to help you ace your next technical interview in the software development field.",
    content: `<p>Detailed content about technical interview preparation would go here...</p>`,
    date: "April 2, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=600&q=80",
    category: "career-tips",
    tags: ["Interview", "Career", "Job Search"],
    author: {
      name: "Emily Thompson",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      bio: "Technical recruiter and former software engineer helping candidates navigate the tech job market."
    },
    relatedPosts: [1, 3, 5]
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id);
  
  // Find the current post
  const post = blogPosts.find(p => p.id === postId);
  
  // Handle post not found
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Get related posts
  const relatedPosts = post.relatedPosts
    .map(id => blogPosts.find(p => p.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero section with post image */}
        <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
              <Badge className="mb-4 bg-skill-purple text-white self-start">
                {post.category.replace('-', ' ')}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center text-white/90 gap-x-6 gap-y-2">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author.name}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Breadcrumbs */}
        <div className="border-b dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Link to="/" className="hover:text-skill-purple dark:hover:text-skill-purple-light">Home</Link>
              <span className="mx-2">•</span>
              <Link to="/blog" className="hover:text-skill-purple dark:hover:text-skill-purple-light">Blog</Link>
              <span className="mx-2">•</span>
              <Link to={`/blog/${post.category}`} className="hover:text-skill-purple dark:hover:text-skill-purple-light">
                {post.category.replace('-', ' ')}
              </Link>
              <span className="mx-2">•</span>
              <span className="text-gray-700 dark:text-gray-300 truncate">{post.title}</span>
            </div>
          </div>
        </div>
        
        {/* Article content */}
        <article className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Main content */}
              <div className="lg:w-2/3">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-sm bg-gray-50 dark:bg-skill-dark/60">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Article content */}
                <div className="prose prose-lg dark:prose-invert max-w-none"
                     dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>
                
                {/* Author bio */}
                <div className="mt-12 p-6 bg-gray-50 dark:bg-skill-dark/50 rounded-lg">
                  <div className="flex items-start gap-4">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">About {post.author.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {post.author.bio}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social sharing */}
                <div className="mt-8 pt-8 border-t dark:border-gray-800">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Like
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bookmark className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400 mr-3">Share:</span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="rounded-full w-9 h-9 p-0">
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="rounded-full w-9 h-9 p-0">
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="rounded-full w-9 h-9 p-0">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="rounded-full w-9 h-9 p-0">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Post navigation */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start" asChild>
                    <Link to="/blog">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Blog
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3">
                {/* Related articles */}
                <div className="sticky top-24">
                  <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.map(relatedPost => (
                      <Card key={relatedPost.id} className="overflow-hidden">
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:w-1/3">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title} 
                              className="h-full w-full object-cover aspect-video sm:aspect-square"
                            />
                          </div>
                          <CardContent className="sm:w-2/3 p-4">
                            <h4 className="font-medium text-base mb-1 line-clamp-2 hover:text-skill-purple transition-colors">
                              <Link to={`/blog/${relatedPost.id}`}>
                                {relatedPost.title}
                              </Link>
                            </h4>
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                              <span>{relatedPost.date}</span>
                              <span className="mx-2">•</span>
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Popular tags */}
                  <h3 className="text-xl font-bold mt-10 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="cursor-pointer">ServiceNow</Badge>
                    <Badge variant="secondary" className="cursor-pointer">React</Badge>
                    <Badge variant="secondary" className="cursor-pointer">Salesforce</Badge>
                    <Badge variant="secondary" className="cursor-pointer">AI</Badge>
                    <Badge variant="secondary" className="cursor-pointer">Cloud Computing</Badge>
                    <Badge variant="secondary" className="cursor-pointer">Career</Badge>
                    <Badge variant="secondary" className="cursor-pointer">Development</Badge>
                    <Badge variant="secondary" className="cursor-pointer">JavaScript</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-br from-skill-purple/10 to-skill-blue/10 dark:from-skill-purple/20 dark:to-skill-blue/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for more tutorials, industry insights, and career tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-skill-dark/60 focus:outline-none focus:ring-2 focus:ring-skill-purple"
              />
              <Button className="button-gradient">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
