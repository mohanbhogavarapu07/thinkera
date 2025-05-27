import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Puzzle, Rocket, Shield } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { motion } from 'framer-motion';

const Index = () => {
  const navigate = useNavigate();
  const { setStage } = useUser();
  
  const startAssessment = () => {
    setStage('roleSelection');
    navigate('/assessment/tech-scenario-solver-lab/assessment');
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
            Tech Scenario Solver Lab
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Test your problem-solving skills with real-world tech scenarios and get personalized feedback on your approach.
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
              Solve Real Tech Challenges
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our scenario-based assessment helps you demonstrate your technical problem-solving abilities in realistic situations.
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
                  <Code className="text-white h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Code Analysis</h3>
                <p className="text-gray-600">Debug and optimize real code scenarios</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-thinkera-blue/5 to-thinkera-blue/10 border border-thinkera-blue/20 hover:border-thinkera-blue/40 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-thinkera-blue to-thinkera-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Puzzle className="text-white h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Problem Solving</h3>
                <p className="text-gray-600">Tackle complex technical challenges</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-thinkera-purple/5 to-thinkera-purple/10 border border-thinkera-purple/20 hover:border-thinkera-purple/40 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-thinkera-purple to-thinkera-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Rocket className="text-white h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600">Optimize solutions for efficiency</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-thinkera-blue/5 to-thinkera-blue/10 border border-thinkera-blue/20 hover:border-thinkera-blue/40 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-thinkera-blue to-thinkera-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="text-white h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Best Practices</h3>
                <p className="text-gray-600">Apply industry standards and security</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                onClick={startAssessment} 
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
              About 20 minutes to complete • Detailed feedback • Solution analysis
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
          <p>© 2025 Tech Scenario Solver Lab. All rights reserved.</p>
          <p className="mt-2">
            Helping developers master real-world technical challenges.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
