import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Blog from './Blog';
import { BookOpen } from 'lucide-react';

const BlogCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  // List of valid categories - matching TechSpark's categories
  const validCategories = [
    'tech-insights',
    'success-stories',
    'industry-news',
    'tutorials',
    'events'
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  // If category doesn't exist, redirect to main blog page
  if (!category || !validCategories.includes(category)) {
    return <Navigate to="/blog" replace />;
  }
  
  // Use the main Blog component but with the category filter applied
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* TechSpark-style Header */}
      <header className="bg-gradient-to-r from-skill-purple to-skill-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Insights & Updates</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay ahead with the latest trends, tutorials, and expert insights in technology and professional development.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link 
              to="/courses" 
              className="px-6 py-3 bg-white text-skill-purple font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Explore Courses
            </Link>
            <Link 
              to="/success-stories" 
              className="px-6 py-3 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </header>
      <Blog showHeader={false} />
    </div>
  );
};

export default BlogCategory;
