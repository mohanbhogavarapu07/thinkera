import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cloud, Database, Server, Code, 
  Brain, Users, Search, Filter,
  Clock, Award, ChevronRight, BookOpen
} from 'lucide-react';

export const allCourses = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    description: 'Build intelligent applications with modern AI frameworks. Master TensorFlow, PyTorch, and data science fundamentals.',
    icon: Brain,
    category: 'AI',
    level: 'Intermediate',
    duration: '16 weeks',
    certification: true,
    color: 'from-red-500 to-pink-600',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    description: 'Learn Python programming specifically for data analysis, visualization, and machine learning.',
    icon: Brain,
    category: 'AI',
    level: 'Beginner',
    duration: '8 weeks',
    certification: true,
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 3,
    title: 'Deep Learning & Neural Networks',
    description: 'Master deep learning concepts, neural network architectures, and advanced AI model development.',
    icon: Brain,
    category: 'AI',
    level: 'Advanced',
    duration: '12 weeks',
    certification: true,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 4,
    title: 'Natural Language Processing',
    description: 'Learn to build AI systems that understand and process human language using modern NLP techniques.',
    icon: Brain,
    category: 'AI',
    level: 'Intermediate',
    duration: '10 weeks',
    certification: true,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 5,
    title: 'Computer Vision & Image Processing',
    description: 'Develop AI systems that can analyze and understand visual data using computer vision techniques.',
    icon: Brain,
    category: 'AI',
    level: 'Advanced',
    duration: '14 weeks',
    certification: true,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 6,
    title: 'AI Ethics & Responsible AI',
    description: 'Learn about ethical considerations, bias mitigation, and responsible development of AI systems.',
    icon: Brain,
    category: 'AI',
    level: 'Intermediate',
    duration: '6 weeks',
    certification: true,
    color: 'from-orange-500 to-yellow-600',
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = ['All', 'Platform', 'Cloud', 'Engineering', 'AI', 'Business'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Banner */}
        <section className="py-16 bg-gradient-to-r from-thinkera-purple to-thinkera-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Courses</h1>
            <p className="text-white text-xl max-w-2xl mx-auto">
              Explore our industry-aligned training programs designed to give you in-demand skills for the tech industry.
            </p>
          </div>
        </section>
        
        {/* Filters */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-1/3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-brand-purple" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-gray-500" />
                  <span className="text-gray-700">Filter:</span>
                </div>
                
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select 
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Listings */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="h-full card-hover">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} text-white flex items-center justify-center mb-4`}>
                        <course.icon size={24} />
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-brand-purple bg-opacity-10 text-brand-purple text-xs font-medium px-2.5 py-0.5 rounded">
                          {course.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {course.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-brand-dark mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
                      <div className="mt-auto pt-4 space-y-4 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Clock size={16} className="text-gray-500 mr-2" />
                            <span className="text-gray-700">{course.duration}</span>
                          </div>
                          {course.certification && (
                            <div className="flex items-center">
                              <Award size={16} className="text-brand-purple mr-2" />
                              <span className="text-brand-purple">Certification</span>
                            </div>
                          )}
                        </div>
                        <Link to={`/courses/${course.id}`}>
                          <Button className="w-full button-gradient ">View Details <ChevronRight size={16} className="ml-1" /></Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No courses found</h3>
                <p className="text-gray-600">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
