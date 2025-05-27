import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Search, Filter,
  Clock, Award, ChevronRight, BookOpen,
  Brain, Rocket, Lightbulb, Puzzle
} from 'lucide-react';

const Assessments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = ['All', 'Technical', 'Soft Skills', 'Leadership', 'Industry'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

  const assessments = [
    {
      id: 'agility-growth-compass',
      title: 'Agility Growth Compass',
      description: 'Evaluate your adaptability and growth mindset in the ever-evolving tech landscape.',
      category: 'Soft Skills',
      level: 'All Levels',
      duration: '30 mins',
      icon: Brain,
      path: '/assessment/agility-growth-compass'
    },
    {
      id: 'tech-pathfinder',
      title: 'Tech Pathfinder Assessment',
      description: 'Discover your optimal career path in technology through comprehensive skill evaluation.',
      category: 'Technical',
      level: 'All Levels',
      duration: '45 mins',
      icon: Rocket,
      path: '/assessment/tech-pathfinder-assessment'
    },
    {
      id: 'tech-potential',
      title: 'Tech Potential Voyager',
      description: 'Uncover your hidden potential and future growth areas in technology.',
      category: 'Technical',
      level: 'Intermediate',
      duration: '40 mins',
      icon: Lightbulb,
      path: '/assessment/tech-potential-voyager'
    },
    {
      id: 'tech-scenario',
      title: 'Tech Scenario Solver Lab',
      description: 'Test your problem-solving abilities in real-world technical scenarios.',
      category: 'Technical',
      level: 'Advanced',
      duration: '50 mins',
      icon: Puzzle,
      path: '/assessment/tech-scenario-solver-lab'
    }
  ];

  const filteredAssessments = assessments.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assessment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || assessment.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || assessment.level === selectedLevel;
    
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Skill Assessments</h1>
            <p className="text-white text-xl max-w-2xl mx-auto">
              Evaluate your skills and get personalized recommendations for your career growth.
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
                  placeholder="Search assessments..." 
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
        
        {/* Assessment Listings */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredAssessments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAssessments.map((assessment) => (
                  <Card key={assessment.id} className="hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${
                          assessment.id === 'agility-growth-compass' ? 'bg-gradient-to-br from-emerald-500 to-teal-600' :
                          assessment.id === 'tech-pathfinder' ? 'bg-gradient-to-br from-amber-500 to-orange-600' :
                          assessment.id === 'tech-potential' ? 'bg-gradient-to-br from-rose-500 to-pink-600' :
                          'bg-gradient-to-br from-indigo-500 to-violet-600'
                        }`}>
                          <assessment.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{assessment.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{assessment.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-thinkera-purple/10 rounded-full text-sm text-thinkera-purple font-medium">
                          {assessment.category}
                        </span>
                        <span className="px-3 py-1 bg-thinkera-blue/10 rounded-full text-sm text-thinkera-blue font-medium">
                          {assessment.level}
                        </span>
                      </div>
                      <Link to={assessment.path}>
                        <Button className="w-full bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white">
                          Start Assessment
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No assessments found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Assessments; 