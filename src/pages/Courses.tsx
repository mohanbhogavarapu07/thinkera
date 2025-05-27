import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cloud, Database, Server, Code, 
  Brain, Users, Search, Filter,
  Clock, Award, ChevronRight, BookOpen,
  MessageSquare, Sparkles
} from 'lucide-react';

export const allCourses = [
  {
    id: 1,
    title: 'ServiceNow Administration Certification Course',
    description: 'Master ServiceNow platform administration and prepare for the CSA exam. Learn to automate workflows, manage users and data, and ensure platform alignment with business needs.',
    icon: Server,
    category: 'ServiceNow',
    level: 'Intermediate',
    duration: '12 weeks',
    certification: true,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Prompt Engineering & LLM Interfacing',
    description: 'Master the art of prompt engineering for Large Language Models. Learn to craft effective prompts, optimize AI responses, and unlock the full potential of generative AI.',
    icon: MessageSquare,
    category: 'Generative AI',
    level: 'Intermediate',
    duration: '8 weeks',
    certification: true,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 3,
    title: 'AI Adventure: Mastering Prompts!',
    description: 'A 1-Day Workshop for 12th Graders to explore the world of AI and prompt engineering. No coding required - just bring your curiosity!',
    icon: Sparkles,
    category: 'Future Tech Explorers',
    level: 'Beginner',
    duration: '1 Day',
    certification: true,
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 4,
    title: 'Prompt Engineering 1-Day Workshop',
    description: 'A comprehensive 1-day workshop for 12th-grade students to master AI and prompt engineering. Perfect for students from all streams.',
    icon: Brain,
    category: 'Future Tech Explorers',
    level: 'Beginner',
    duration: '1 Day (5.5 hours)',
    certification: true,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 5,
    title: 'Professional Scrum Master Certification Training',
    description: 'Master the Scrum framework and Agile mindset to excel as a Scrum Master. Learn to lead and coach Agile teams, facilitate Scrum events, and foster continuous improvement.',
    icon: Users,
    category: 'Agile & Scrum',
    level: 'Intermediate',
    duration: '4 Weeks',
    certification: true,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 6,
    title: 'Comprehensive Business Analyst Certification Program',
    description: 'Master Business Analysis with Agile, Scrum & JIRA integration. Learn to identify business needs, manage requirements, and bridge the gap between stakeholders and technology teams.',
    icon: Database,
    category: 'Business Analysis & Agile Practices',
    level: 'Intermediate',
    duration: '8 Weeks',
    certification: true,
    color: 'from-blue-500 to-indigo-600',
  }
];

const Courses = () => {
  // Remove state for filters as they are not shown in the requested layout
  // const [searchTerm, setSearchTerm] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('All');
  // const [selectedLevel, setSelectedLevel] = useState('All');

  // Add state for active category
  const [activeCategory, setActiveCategory] = useState('All Courses');

  // Remove filter options
  // const categories = ['All', 'Platform', 'Cloud', 'Engineering', 'AI', 'Business'];
  // const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

  // Remove filtering logic
  // const filteredCourses = allCourses.filter(course => {
  //   const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
  //                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
  //   const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
  //   return matchesSearch && matchesCategory && matchesLevel;
  // });

  // Group courses by the desired categories
  const categorizedCourses = {
    'Prompt Engineering': allCourses.filter(course => 
      course.category === 'Generative AI' || course.category === 'Future Tech Explorers'
    ),
    'ServiceNow': allCourses.filter(course => course.category === 'ServiceNow'),
    'SCRUM Master': allCourses.filter(course => course.title.includes('Scrum Master')),
    'Business Analyst': allCourses.filter(course => course.title.includes('Business Analyst')),
  };

  // Define categories for header display
  const courseCategories = ['All Courses', ...Object.keys(categorizedCourses)];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Banner */}
        <section className="py-16 bg-gradient-to-r from-thinkera-purple to-thinkera-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Courses</h1>
            <p className="text-white text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Explore our industry-aligned training programs designed to give you in-demand skills for the tech industry.
            </p>

            {/* Category Filters in Header */}
            <div className="flex flex-wrap gap-3 justify-center">
              {courseCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeCategory === category 
                      ? 'bg-white text-brand-purple shadow-lg hover:shadow-xl' 
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/30 backdrop-blur-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Remove Filters Section */}
        {/*
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
        */}
        
        {/* Course Listings Grouped by Category */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {
              activeCategory === 'All Courses' ? (
                // Render all courses without category headings
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allCourses.map((course) => (
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
                // Render specific category with heading
                Object.entries(categorizedCourses).map(([category, courses]) => (
                  activeCategory === category && (
                    <div key={category} className="mb-12 last:mb-0 border-b pb-8">
                      <h2 className="text-3xl font-bold text-brand-dark mb-8">{category}</h2>
                      {
                        courses.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {courses.map((course) => (
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
                          <div className="text-center py-8">
                            <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found in this category</h3>
                            <p className="text-gray-600">Check back later for new additions!</p>
                          </div>
                        )
                      }
                    </div>
                  )
                ))
             ) }
            
            {/* Removed 'No courses found' for the overall list */}
            {/*
            {filteredCourses.length > 0 ? ( ... ) : (
              <div className="text-center py-16">
                <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No courses found</h3>
                <p className="text-gray-600">Try adjusting your search or filters.</p>
              </div>
            )}
            */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
