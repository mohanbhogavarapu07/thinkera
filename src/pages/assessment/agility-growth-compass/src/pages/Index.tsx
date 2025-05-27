import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AssessmentProvider } from '../contexts/AssessmentContext';
import AssessmentFlow from '../components/assessment/AssessmentFlow';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const navigate = useNavigate();
  const [started, setStarted] = React.useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  if (started) {
    return (
      <AssessmentProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
              <AssessmentFlow />
            </div>
          </div>
        </TooltipProvider>
      </AssessmentProvider>
    );
  }

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
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent mb-4">
            Agility Growth Compass
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover your learning agility and unlock your potential for growth in the tech industry through this comprehensive assessment.
          </p>
        </motion.header>

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
              Measure Your Learning Agility
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our assessment helps you understand how you adapt to new challenges and identify areas for growth in your learning journey.
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
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Learning Style</h3>
                <p className="text-gray-600">Understand how you best absorb and process new information</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-thinkera-blue/5 to-thinkera-blue/10 border border-thinkera-blue/20 hover:border-thinkera-blue/40 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-thinkera-blue to-thinkera-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="text-white h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Adaptability</h3>
                <p className="text-gray-600">Measure your ability to adjust to new situations</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-thinkera-purple/5 to-thinkera-purple/10 border border-thinkera-purple/20 hover:border-thinkera-purple/40 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-thinkera-purple to-thinkera-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="text-white h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Growth Potential</h3>
                <p className="text-gray-600">Identify areas where you can accelerate your development</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-thinkera-blue/5 to-thinkera-blue/10 border border-thinkera-blue/20 hover:border-thinkera-blue/40 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="h-14 w-14 bg-gradient-to-br from-thinkera-blue to-thinkera-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="text-white h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Career Growth</h3>
                <p className="text-gray-600">Get insights for advancing your tech career</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                onClick={handleStart}
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
              About 10 minutes to complete • Personalized insights • Growth recommendations
            </motion.p>
          </motion.div>
        </main>

        <motion.footer 
          className="mt-24 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>© 2025 Agility Growth Compass. All rights reserved.</p>
          <p className="mt-2">
            Empowering tech professionals to reach their full potential.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
