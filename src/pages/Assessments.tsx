import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Search, Filter,
  Clock, Award, ChevronRight, BookOpen,
  Brain, Code, Users, Lightbulb
} from 'lucide-react';

const Assessments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Technical', 'Soft Skills', 'Leadership', 'Industry'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

  const assessments = [
    {
      id: 'tech-potential',
      title: 'Tech Potential Voyager',
      description: 'Discover your cognitive profile and get personalized career recommendations.',
      icon: Brain,
      duration: '15-20 mins',
      level: 'All Levels',
      category: 'Technical',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'tech-pathfinder',
      title: 'Tech Pathfinder Assessment',
      description: 'Evaluate your technical skills and identify your ideal career path.',
      icon: Code,
      duration: '20-25 mins',
      level: 'Intermediate',
      category: 'Technical',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'scenario-solver',
      title: 'Tech Scenario Solver Lab',
      description: 'Test your problem-solving skills in realistic tech scenarios.',
      icon: Lightbulb,
      duration: '25-30 mins',
      level: 'Advanced',
      category: 'Technical',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'agility-compass',
      title: 'Agility Growth Compass',
      description: 'Measure your adaptability and growth potential in tech.',
      icon: Users,
      duration: '20-25 mins',
      level: 'All Levels',
      category: 'Soft Skills',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const handleStartAssessment = (assessmentId: string) => {
    switch (assessmentId) {
      case 'tech-potential':
        navigate('/assessments/tech-potential-voyager');
        break;
      case 'tech-pathfinder':
        navigate('/assessments/tech-pathfinder');
        break;
      case 'scenario-solver':
        navigate('/assessments/tech-scenario-solver-lab');
        break;
      case 'agility-compass':
        navigate('/assessments/agility-compass');
        break;
      default:
        console.log('Assessment not implemented yet');
    }
  };

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {assessments.map((assessment) => (
                <Card key={assessment.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${assessment.color} flex items-center justify-center mb-4`}>
                      <assessment.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold mb-2">{assessment.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 mb-4">
                      {assessment.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{assessment.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Award className="w-4 h-4" />
                        <span>{assessment.level}</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300"
                      variant="outline"
                      onClick={() => handleStartAssessment(assessment.id)}
                    >
                      Start Assessment
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Assessments; 