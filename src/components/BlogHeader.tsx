import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Categories for filtering
const categories = [
  { name: 'All Articles', slug: 'all' },
  { name: 'Tech Trends', slug: 'tech-trends' },
  { name: 'Tutorials', slug: 'tutorials' },
  { name: 'Career Advice', slug: 'career' },
  { name: 'Success Stories', slug: 'success-stories' }
];

interface BlogHeaderProps {
  onSearch?: (term: string) => void;
  onCategoryChange?: (category: string) => void;
  activeCategory?: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ 
  onSearch = () => {}, 
  onCategoryChange = () => {},
  activeCategory = 'all' 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-accent/90 text-white py-12 md:py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent w-full h-full"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto pt-4">
          
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                SkillForge Blog
              </span>
            </h1>
          </div>
          
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Stay ahead with the latest trends, tutorials, and expert insights in technology and professional development.
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 group-focus-within:text-white transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="Search articles, tutorials, and more..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-28 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 text-white placeholder-white/60 transition-all duration-200 hover:bg-white/15"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-white text-primary hover:bg-white/90 font-medium rounded-lg transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105"
                >
                  <Search size={16} />
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => onCategoryChange(cat.slug)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeCategory === cat.slug 
                    ? 'bg-white text-primary shadow-lg hover:shadow-xl' 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/30 backdrop-blur-sm'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
