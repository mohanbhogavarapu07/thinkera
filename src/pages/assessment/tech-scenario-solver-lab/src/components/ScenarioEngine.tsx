import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { getScenariosByRole, getScenarioById, Scenario, Option } from '../data/scenarios';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

const ScenarioEngine = () => {
  const navigate = useNavigate();
  const { role, completedScenarios, addCompletedScenario, updateCompetencies } = useUser();
  const [currentScenarioId, setCurrentScenarioId] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!role) {
      navigate('/assessment');
    }
  }, [role, navigate]);

  if (!role) return null;

  const availableScenarios = getScenariosByRole(role).filter(
    scenario => !completedScenarios.includes(scenario.id)
  );

  const currentScenario = currentScenarioId ? getScenarioById(currentScenarioId) : null;

  const handleStartScenario = (scenarioId: string) => {
    setCurrentScenarioId(scenarioId);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || !currentScenarioId) return;
    
    // Update competencies based on selected option
    updateCompetencies({
      technicalJudgment: selectedOption.technicalJudgment,
      stakeholderManagement: selectedOption.stakeholderManagement,
      adaptability: selectedOption.adaptability,
    });
    
    // Mark the scenario as completed
    addCompletedScenario(currentScenarioId);
    
    // Show feedback
    setShowFeedback(true);
    
    // Show toast notification
    toast({
      title: "Response submitted!",
      description: "See your feedback below and continue to the next scenario.",
      duration: 5000,
    });
  };

  const handleCompleteScenario = () => {
    setCurrentScenarioId(null);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  if (currentScenario) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border-2 border-thinkera-purple/20 shadow-xl">
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>5-10 min scenario</span>
                  </div>
                  <div className="text-sm font-medium bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                    {role === 'ai' ? 'AI Engineering' : role === 'servicenow' ? 'ServiceNow' : 'Salesforce'} Track
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">{currentScenario.title}</CardTitle>
                <CardDescription className="text-xl text-gray-600">{currentScenario.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <motion.div 
                  className="bg-gradient-to-br from-thinkera-purple/5 to-thinkera-blue/5 rounded-xl p-6 border border-thinkera-purple/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Scenario Context</h3>
                  <p className="text-gray-700 leading-relaxed">{currentScenario.context}</p>
                </motion.div>
                
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900">What would you do?</h3>
                  <div className="space-y-4">
                    {currentScenario.options.map((option) => (
                      <motion.div
                        key={option.id}
                        className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedOption?.id === option.id 
                            ? 'border-thinkera-purple bg-gradient-to-br from-thinkera-purple/10 to-thinkera-blue/10 shadow-lg' 
                            : 'border-gray-200 hover:border-thinkera-purple/50 hover:shadow-md'
                        }`}
                        onClick={() => handleSelectOption(option)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <p className="text-gray-700">{option.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <AnimatePresence>
                  {showFeedback && selectedOption && (
                    <motion.div 
                      className="bg-gradient-to-br from-thinkera-purple/5 to-thinkera-blue/5 rounded-xl p-6 border border-thinkera-purple/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <AlertCircle className="h-6 w-6 text-thinkera-purple" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Feedback</h3>
                          <p className="text-gray-700 leading-relaxed mb-6">{selectedOption.feedback}</p>
                          
                          <div className="grid grid-cols-3 gap-4">
                            <motion.div 
                              className="bg-white rounded-xl p-4 border border-thinkera-purple/20 shadow-sm"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="text-sm text-gray-600 mb-1">Technical Judgment</div>
                              <div className="text-2xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                                {selectedOption.technicalJudgment}/10
                              </div>
                            </motion.div>
                            <motion.div 
                              className="bg-white rounded-xl p-4 border border-thinkera-purple/20 shadow-sm"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="text-sm text-gray-600 mb-1">Stakeholder Management</div>
                              <div className="text-2xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                                {selectedOption.stakeholderManagement}/10
                              </div>
                            </motion.div>
                            <motion.div 
                              className="bg-white rounded-xl p-4 border border-thinkera-purple/20 shadow-sm"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="text-sm text-gray-600 mb-1">Adaptability</div>
                              <div className="text-2xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                                {selectedOption.adaptability}/10
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
              <CardFooter className="flex justify-between pt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentScenarioId(null)}
                  className="border-thinkera-purple/20 hover:border-thinkera-purple/40 hover:bg-thinkera-purple/5"
                >
                  Back to Scenarios
                </Button>
                {!showFeedback && (
                  <Button 
                    onClick={handleSubmitAnswer} 
                    disabled={!selectedOption}
                    className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Answer
                  </Button>
                )}
                {showFeedback && (
                  <Button 
                    onClick={handleCompleteScenario}
                    className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Complete & Continue
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

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
            Available Scenarios
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Select a scenario to practice your problem-solving skills in real-world tech situations.
          </p>
        </motion.div>

        {availableScenarios.length === 0 ? (
          <motion.div 
            className="max-w-md mx-auto text-center p-12 bg-white/80 backdrop-blur-sm border-2 border-thinkera-purple/20 rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="h-16 w-16 text-thinkera-purple mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">All Scenarios Completed!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              You've worked through all the available scenarios in this track. Check your progress dashboard to see how you performed.
            </p>
            <Button 
              onClick={() => navigate('/assessment/tech-scenario-solver-lab/feedback')}
              className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Progress Dashboard
            </Button>
          </motion.div>
        ) : (
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {availableScenarios.map((scenario) => (
              <motion.div key={scenario.id} variants={itemVariants}>
                <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-thinkera-purple/20 hover:border-thinkera-purple/40 transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">{scenario.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-600">{scenario.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {scenario.context.substring(0, 120)}...
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={() => handleStartScenario(scenario.id)}
                      className="w-full bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Start Scenario
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ScenarioEngine;
