import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { CheckCircle, Award, BarChart2, Printer, Download, RefreshCw } from 'lucide-react';
import { scenarios } from '../data/scenarios';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const FeedbackDashboard = () => {
  const navigate = useNavigate();
  const { role, completedScenarios, competencies, resetAssessment } = useUser();

  if (!role) return null;

  const totalScenarios = scenarios.filter(scenario => scenario.role === role).length;
  const completionPercentage = (completedScenarios.length / totalScenarios) * 100;

  // Calculate average scores across completed scenarios
  const averageScores = {
    technicalJudgment: completedScenarios.length ? competencies.technicalJudgment / completedScenarios.length : 0,
    stakeholderManagement: completedScenarios.length ? competencies.stakeholderManagement / completedScenarios.length : 0,
    adaptability: completedScenarios.length ? competencies.adaptability / completedScenarios.length : 0,
  };

  // Generate a relative performance assessment
  const getPerformanceLevel = (score: number) => {
    if (score >= 8) return { text: 'Excellent', color: 'text-emerald-600' };
    if (score >= 6) return { text: 'Good', color: 'text-thinkera-blue' };
    if (score >= 4) return { text: 'Developing', color: 'text-amber-500' };
    return { text: 'Needs Improvement', color: 'text-thinkera-purple' };
  };

  // Generate recommendations based on lowest score
  const getRecommendations = () => {
    const lowestScore = Math.min(
      averageScores.technicalJudgment, 
      averageScores.stakeholderManagement, 
      averageScores.adaptability
    );
    
    if (lowestScore === averageScores.technicalJudgment) {
      return {
        area: 'Technical Judgment',
        tips: [
          'Review industry best practices for your technology stack',
          'Practice evaluating trade-offs between different technical approaches',
          'Consider technical implications alongside business requirements'
        ]
      };
    }
    
    if (lowestScore === averageScores.stakeholderManagement) {
      return {
        area: 'Stakeholder Management',
        tips: [
          'Improve communication transparency with all project stakeholders',
          'Practice presenting technical concepts to non-technical audiences',
          'Consider how decisions affect different stakeholder groups'
        ]
      };
    }
    
    return {
      area: 'Adaptability',
      tips: [
        'Practice responding to changing requirements and constraints',
        'Develop contingency plans for your technical decisions',
        'Focus on flexible solutions that can evolve over time'
      ]
    };
  };

  const recommendations = getRecommendations();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Create a PDF using the current dashboard content
    const element = document.getElementById('dashboard-content');
    if (element) {
      // You would typically use a library like html2pdf.js here
      // For now, we'll just show an alert
      alert('PDF download functionality will be implemented soon');
    }
  };

  const handleRetakeAssessment = () => {
    resetAssessment();
    navigate('/assessment/tech-scenario-solver-lab/assessment');
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-secondary/30 py-16" id="dashboard-content">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent mb-4">
              Your Progress Dashboard
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Track your performance and get personalized recommendations to improve your tech problem-solving skills.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-thinkera-purple/20 hover:border-thinkera-purple/40 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold flex items-center gap-2 text-gray-900">
                  <div className="h-10 w-10 bg-gradient-to-br from-thinkera-purple to-thinkera-blue rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  Scenarios Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                  {completedScenarios.length}/{totalScenarios}
                </div>
                <Progress value={completionPercentage} className="h-2 bg-gray-200" />
                <p className="text-sm text-gray-600 mt-2">
                  {completionPercentage.toFixed(0)}% complete
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-thinkera-blue/20 hover:border-thinkera-blue/40 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold flex items-center gap-2 text-gray-900">
                  <div className="h-10 w-10 bg-gradient-to-br from-thinkera-blue to-thinkera-purple rounded-full flex items-center justify-center shadow-lg">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  Top Performance Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                {completedScenarios.length === 0 ? (
                  <p className="text-gray-600">Complete scenarios to see your top performance area</p>
                ) : (
                  <>
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-thinkera-blue to-thinkera-purple bg-clip-text text-transparent">
                      {Object.entries(averageScores).sort((a, b) => b[1] - a[1])[0][0]
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/^./, str => str.toUpperCase())}
                    </div>
                    <p className="text-gray-600">
                      You excel at making decisions that demonstrate strong {Object.entries(averageScores).sort((a, b) => b[1] - a[1])[0][0]
                        .replace(/([A-Z])/g, ' $1')
                        .toLowerCase()}.
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-thinkera-purple/20 hover:border-thinkera-purple/40 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold flex items-center gap-2 text-gray-900">
                  <div className="h-10 w-10 bg-gradient-to-br from-thinkera-purple to-thinkera-blue rounded-full flex items-center justify-center shadow-lg">
                    <BarChart2 className="h-5 w-5 text-white" />
                  </div>
                  Industry Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                {completedScenarios.length === 0 ? (
                  <p className="text-gray-600">Complete scenarios to see industry comparisons</p>
                ) : (
                  <>
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                      Top 30%
                    </div>
                    <p className="text-gray-600">
                      Your problem-solving approach aligns with industry professionals in {role.toUpperCase()} roles.
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-thinkera-purple/20 hover:border-thinkera-purple/40 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Competency Assessment</CardTitle>
                <CardDescription className="text-lg text-gray-600">Your performance across key competency areas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {completedScenarios.length === 0 ? (
                  <p className="text-gray-600 py-6">Complete scenarios to see your competency assessment</p>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-base font-medium text-gray-900">Technical Judgment</span>
                        <span className={`text-base font-medium ${getPerformanceLevel(averageScores.technicalJudgment).color}`}>
                          {getPerformanceLevel(averageScores.technicalJudgment).text}
                        </span>
                      </div>
                      <Progress value={averageScores.technicalJudgment * 10} className="h-2 bg-gray-200" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-base font-medium text-gray-900">Stakeholder Management</span>
                        <span className={`text-base font-medium ${getPerformanceLevel(averageScores.stakeholderManagement).color}`}>
                          {getPerformanceLevel(averageScores.stakeholderManagement).text}
                        </span>
                      </div>
                      <Progress value={averageScores.stakeholderManagement * 10} className="h-2 bg-gray-200" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-base font-medium text-gray-900">Adaptability</span>
                        <span className={`text-base font-medium ${getPerformanceLevel(averageScores.adaptability).color}`}>
                          {getPerformanceLevel(averageScores.adaptability).text}
                        </span>
                      </div>
                      <Progress value={averageScores.adaptability * 10} className="h-2 bg-gray-200" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-thinkera-blue/20 hover:border-thinkera-blue/40 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Personalized Recommendations</CardTitle>
                <CardDescription className="text-lg text-gray-600">Based on your scenario responses</CardDescription>
              </CardHeader>
              <CardContent>
                {completedScenarios.length === 0 ? (
                  <p className="text-gray-600 py-6">Complete scenarios to receive personalized recommendations</p>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Focus on improving your <span className="font-semibold text-gray-900">{recommendations.area}</span> skills:
                    </p>
                    <ul className="space-y-4">
                      {recommendations.tips.map((tip, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="h-6 w-6 bg-gradient-to-br from-thinkera-blue to-thinkera-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            onClick={handlePrint}
            className="bg-white border-2 border-thinkera-purple/20 hover:border-thinkera-purple/40 text-gray-900 hover:bg-thinkera-purple/5 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Printer className="h-5 w-5 mr-2" />
            Print Results
          </Button>
          <Button 
            onClick={handleDownloadPDF}
            className="bg-white border-2 border-thinkera-blue/20 hover:border-thinkera-blue/40 text-gray-900 hover:bg-thinkera-blue/5 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </Button>
          <Button 
            onClick={handleRetakeAssessment}
            className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Retake Assessment
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeedbackDashboard;
