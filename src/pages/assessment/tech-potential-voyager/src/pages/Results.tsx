import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { BarChart, Download, Share2, ChevronDown, ChevronUp, Printer, RefreshCw } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Import chart components from recharts
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const Results = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<string[]>(['strengths']);
  
  // Sample result data
  const cognitiveData = [
    { subject: 'Logical Reasoning', score: 85, fullMark: 100 },
    { subject: 'Abstract Reasoning', score: 72, fullMark: 100 },
    { subject: 'Spatial Reasoning', score: 90, fullMark: 100 },
    { subject: 'System Thinking', score: 78, fullMark: 100 },
    { subject: 'Processing Speed', score: 65, fullMark: 100 },
  ];
  
  const careerRecommendations = [
    {
      title: "Software Architecture",
      match: 92,
      description: "Your exceptional pattern recognition and systems thinking abilities align perfectly with software architecture roles, where you'd excel at designing complex systems.",
      courses: ["Advanced Software Design", "System Architecture Patterns", "Enterprise Application Development"]
    },
    {
      title: "Data Science",
      match: 87,
      description: "Your strong logical reasoning and pattern recognition skills would serve you well in data science roles involving complex analysis and model building.",
      courses: ["Machine Learning Fundamentals", "Statistical Analysis", "Data Visualization Techniques"]
    },
    {
      title: "Security Engineering",
      match: 83,
      description: "Your system thinking and logical reasoning abilities would help you excel at identifying vulnerabilities and designing secure systems.",
      courses: ["Cybersecurity Fundamentals", "Network Security", "Ethical Hacking Techniques"]
    }
  ];
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section) 
        : [...prev, section]
    );
  };
  
  const isExpanded = (section: string) => expandedSections.includes(section);
  
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    alert('PDF download functionality will be implemented soon');
  };

  const handleRetakeAssessment = () => {
    navigate('/assessment/tech-potential-voyager/assessment');
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                Your Cognitive Profile
              </h1>
              <p className="text-lg text-gray-600">
                Assessment completed on {new Date().toLocaleDateString()}
              </p>
            </div>
          </motion.div>
          
          <Tabs defaultValue="results" className="mb-10">
            <TabsList className="grid w-full grid-cols-3 bg-white/50 backdrop-blur-sm">
              <TabsTrigger value="results" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-thinkera-purple data-[state=active]:to-thinkera-blue data-[state=active]:text-white">
                Results Summary
              </TabsTrigger>
              <TabsTrigger value="careers" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-thinkera-purple data-[state=active]:to-thinkera-blue data-[state=active]:text-white">
                Career Insights
              </TabsTrigger>
              <TabsTrigger value="development" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-thinkera-purple data-[state=active]:to-thinkera-blue data-[state=active]:text-white">
                Development Plan
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="results" className="mt-8">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-thinkera-purple/20">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Cognitive Strengths Profile</CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      A visual representation of your cognitive abilities across five key dimensions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart outerRadius={120} data={cognitiveData}>
                          <PolarGrid stroke="#e5e7eb" />
                          <PolarAngleAxis 
                            dataKey="subject" 
                            tick={{ fill: '#4b5563', fontSize: 14 }}
                          />
                          <Radar
                            name="Your Score"
                            dataKey="score"
                            stroke="url(#gradient)"
                            fill="url(#gradient)"
                            fillOpacity={0.6}
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#9b87f5" />
                              <stop offset="100%" stopColor="#6b46c1" />
                            </linearGradient>
                          </defs>
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-10">
                  <motion.div 
                    className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-3"
                    onClick={() => toggleSection('strengths')}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <h2 className="text-2xl font-semibold text-gray-900">Key Cognitive Strengths</h2>
                    {isExpanded('strengths') ? <ChevronUp className="text-thinkera-purple" /> : <ChevronDown className="text-thinkera-purple" />}
                  </motion.div>
                  
                  <AnimatePresence>
                    {isExpanded('strengths') && (
                      <motion.div 
                        className="mt-6 space-y-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <motion.div 
                          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-thinkera-purple/20 shadow-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                            Spatial Reasoning (90th percentile)
                          </h3>
                          <p className="mt-3 text-gray-600 text-base leading-relaxed">
                            You show exceptional ability to visualize and manipulate 3D objects in your mind. This talent is particularly valuable in fields like computer graphics, architecture, and engineering design.
                          </p>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-thinkera-purple/20 shadow-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                            Logical Reasoning (85th percentile)
                          </h3>
                          <p className="mt-3 text-gray-600 text-base leading-relaxed">
                            Your logical reasoning abilities are well above average, allowing you to excel at deductive problem-solving and algorithmic thinking. This is a core skill for programming and system design.
                          </p>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-thinkera-purple/20 shadow-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                            System Thinking (78th percentile)
                          </h3>
                          <p className="mt-3 text-gray-600 text-base leading-relaxed">
                            You have a strong ability to understand complex systems and how their components interact. This skill is particularly valuable in fields like systems engineering, software architecture, and data science.
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="mt-10">
                  <motion.div 
                    className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-3"
                    onClick={() => toggleSection('areas')}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <h2 className="text-2xl font-semibold text-gray-900">Areas for Development</h2>
                    {isExpanded('areas') ? <ChevronUp className="text-thinkera-purple" /> : <ChevronDown className="text-thinkera-purple" />}
                  </motion.div>
                  
                  <AnimatePresence>
                    {isExpanded('areas') && (
                      <motion.div 
                        className="mt-6 space-y-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <motion.div 
                          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h3 className="text-xl font-semibold text-gray-900">Processing Speed (65th percentile)</h3>
                          <p className="mt-3 text-gray-600 text-base leading-relaxed">
                            While still above average, your processing speed could be further developed. Consider exercises that improve rapid decision-making and information processing.
                          </p>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-xl font-semibold text-gray-900">Abstract Reasoning (72nd percentile)</h3>
                          <p className="mt-3 text-gray-600 text-base leading-relaxed">
                            Your abstract reasoning skills are good but could be enhanced with practice on pattern recognition and conceptual thinking exercises.
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="careers" className="mt-8">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {careerRecommendations.map((career, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`bg-white/80 backdrop-blur-sm border ${index === 0 ? 'border-thinkera-purple/40' : 'border-gray-200'} shadow-lg`}>
                      {index === 0 && (
                        <div className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue text-white text-center py-2 text-sm font-medium rounded-t-lg">
                          Top Match
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-900">{career.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-3 mt-2">
                            <div className="h-2 bg-gray-200 w-full rounded-full">
                              <div 
                                className="h-2 bg-gradient-to-r from-thinkera-purple to-thinkera-blue rounded-full transition-all duration-500" 
                                style={{ width: `${career.match}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-700">{career.match}%</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base text-gray-600 mb-6 leading-relaxed">{career.description}</p>
                        <h4 className="text-base font-semibold text-gray-900 mb-3">Recommended Courses:</h4>
                        <ul className="text-base text-gray-600 space-y-2 list-disc pl-5">
                          {career.courses.map((course, i) => (
                            <li key={i}>{course}</li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant="outline" 
                          className="w-full hover:bg-gray-50 transition-colors duration-300"
                        >
                          Explore Career Path
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-10 bg-gradient-to-br from-thinkera-purple/5 to-thinkera-blue/5 p-8 rounded-xl border border-thinkera-purple/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-gradient-to-br from-thinkera-purple to-thinkera-blue rounded-full text-white">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Understanding Your Career Matches
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      These recommendations are based on your cognitive profile and how it aligns with success patterns in various tech roles. Remember that these are suggestions—your interests and values matter too! Use these insights as a starting point for exploration.
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="development" className="mt-8">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-thinkera-purple/20">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Personalized Development Plan</CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      A tailored roadmap to enhance your cognitive abilities and prepare for your chosen career path.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Development plan content */}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
          
          <motion.div 
            className="flex justify-end gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              variant="outline" 
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 text-base hover:bg-gray-50"
            >
              <Printer className="h-5 w-5" />
              Print Results
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-3 text-base hover:bg-gray-50"
            >
              <Download className="h-5 w-5" />
              Download PDF
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleRetakeAssessment}
              className="flex items-center gap-2 px-6 py-3 text-base hover:bg-gray-50"
            >
              <RefreshCw className="h-5 w-5" />
              Retake Assessment
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Results;
