import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { Brain, Settings, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const RoleSelection = () => {
  const navigate = useNavigate();
  const { setRole, setStage } = useUser();
  
  const handleSelectRole = (role: 'ai' | 'servicenow' | 'salesforce') => {
    setRole(role);
    setStage('scenario');
    navigate('/assessment/tech-scenario-solver-lab/scenarios');
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
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent mb-4">
            Select Your Tech Focus
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose a technology track to practice scenario-based problem solving in your area of interest.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-thinkera-purple/20 hover:border-thinkera-purple/40 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-to-br from-thinkera-purple to-thinkera-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">AI Engineering</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Navigate ethical dilemmas, model training decisions, and ML operations challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  Tackle scenarios on bias detection, model governance, 
                  stakeholder communication, and AI project management.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleSelectRole('ai')} 
                  className="w-full bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Select AI Track
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-thinkera-blue/20 hover:border-thinkera-blue/40 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-to-br from-thinkera-blue to-thinkera-purple rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">ServiceNow</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Solve workflow automation challenges, system integration problems, and ITSM dilemmas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  Face scenarios on implementation timelines, custom integrations, 
                  change management, and ServiceNow best practices.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleSelectRole('servicenow')} 
                  className="w-full bg-gradient-to-r from-thinkera-blue to-thinkera-purple hover:from-thinkera-blue/90 hover:to-thinkera-purple/90 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Select ServiceNow Track
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-thinkera-purple/20 hover:border-thinkera-purple/40 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-to-br from-thinkera-purple to-thinkera-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Salesforce</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Address CRM implementation challenges, data migration issues, and client requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  Work through scenarios on data quality, customization vs configuration, 
                  user adoption, and Salesforce governance.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleSelectRole('salesforce')} 
                  className="w-full bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Select Salesforce Track
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoleSelection;
