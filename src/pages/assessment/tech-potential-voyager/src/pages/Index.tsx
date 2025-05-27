import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Library, Lightbulb, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const navigate = useNavigate();
  
  const startJourney = () => {
    navigate('/assessment/tech-potential-voyager/onboarding');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-secondary/30 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent mb-4">
            Tech Potential Navigator
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A scientifically-backed, gamified assessment to help engineering students identify cognitive strengths and explore aligned career paths.
          </p>
        </motion.header>

        {/* Main Content */}
        <main className="w-full max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Discover Your Tech Potential
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our adaptive cognitive assessment platform combines scientific rigor with engaging design to minimize anxiety and maximize insight.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-thinkera-purple/5 to-thinkera-purple/10 border border-thinkera-purple/20 hover:border-thinkera-purple/40 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-thinkera-purple to-thinkera-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Brain className="text-white h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Personalized Assessment</h3>
                <p className="text-gray-600">AI-powered adaptive testing adjusts to your cognitive style</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-thinkera-blue/5 to-thinkera-blue/10 border border-thinkera-blue/20 hover:border-thinkera-blue/40 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-thinkera-blue to-thinkera-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BarChart className="text-white h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">In-depth Insights</h3>
                <p className="text-gray-600">Discover your cognitive strengths across multiple dimensions</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-thinkera-purple/5 to-thinkera-purple/10 border border-thinkera-purple/20 hover:border-thinkera-purple/40 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-thinkera-purple to-thinkera-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lightbulb className="text-white h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Career Alignment</h3>
                <p className="text-gray-600">Get personalized suggestions for tech career paths</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-thinkera-blue/5 to-thinkera-blue/10 border border-thinkera-blue/20 hover:border-thinkera-blue/40 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-thinkera-blue to-thinkera-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Library className="text-white h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Learning Resources</h3>
                <p className="text-gray-600">Access tailored course recommendations and projects</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                onClick={startJourney} 
                className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Assessment
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-500 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              About 15 minutes to complete • Personalized results • Career insights
            </motion.p>
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer 
          className="mt-24 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>© 2025 Tech Potential Navigator. All rights reserved.</p>
          <p className="mt-2">
            Helping engineering students discover their optimal career path.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
