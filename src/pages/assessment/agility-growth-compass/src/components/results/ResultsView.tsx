import { useAssessment } from '../../contexts/AssessmentContext';
import RadarChart from './RadarChart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Download, Printer, RefreshCw, Share2, Calendar, Trophy, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResultsView = () => {
  const { results, resetAssessment } = useAssessment();
  const navigate = useNavigate();
  
  const handleRetakeAssessment = () => {
    resetAssessment();
    navigate('/assessment/agility-growth-compass');
  };

  const handlePrintResults = () => {
    window.print();
  };

  // Format data for radar chart
  const chartData = [
    { name: 'Curiosity', value: results.curiosity },
    { name: 'Resilience', value: results.resilience },
    { name: 'Feedback', value: results.feedbackSensitivity },
    { name: 'Experimentation', value: results.experimentation },
  ];
  
  return (
    <div className="w-full max-w-4xl mx-auto p-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-block p-2 bg-thinkera-purple/5 rounded-2xl mb-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
            Your Agility Scorecard
          </h2>
        </div>
        <p className="text-gray-600 max-w-lg mx-auto">
          Here's where your learning agility currently stands and how you can grow further
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Your Agility Radar</CardTitle>
              <CardDescription className="text-gray-600">
                How your learning adaptability measures across four key dimensions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadarChart data={chartData} />
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {chartData.map((item) => (
                  <div key={item.name} className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
                    <span className="text-gray-700">{item.name}</span>
                    <span 
                      className={`font-bold ${
                        item.value >= 75 ? 'text-thinkera-purple' : 
                        item.value >= 50 ? 'text-thinkera-blue' : 
                        'text-gray-500'
                      }`}
                    >
                      {item.value}%
                    </span>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-thinkera-purple">
                    <Trophy size={16} />
                    <p className="text-sm font-medium">
                      <span className="text-gray-600">Strongest area:</span> {
                        chartData.reduce((max, item) => 
                          max.value > item.value ? max : item
                        ).name
                      }
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-thinkera-blue mt-2">
                    <TrendingUp size={16} />
                    <p className="text-sm font-medium">
                      <span className="text-gray-600">Growth opportunity:</span> {
                        chartData.reduce((min, item) => 
                          min.value < item.value ? min : item
                        ).name
                      }
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-3"
        >
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Personalized Playbook</CardTitle>
              <CardDescription className="text-gray-600">
                Based on your results, here are some strategies to enhance your learning agility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-8 h-8 flex items-center justify-center bg-thinkera-purple/10 rounded-lg">
                      <Trophy size={16} className="text-thinkera-purple" />
                    </span>
                    Recommended Micro-Learning
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-thinkera-purple mt-2"></span>
                      5-Day "Embracing Uncertainty" Challenge
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-thinkera-purple mt-2"></span>
                      Feedback Loop: Giving & Receiving Workshop
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-thinkera-purple mt-2"></span>
                      Rapid Prototyping Techniques
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-8 h-8 flex items-center justify-center bg-thinkera-blue/10 rounded-lg">
                      <TrendingUp size={16} className="text-thinkera-blue" />
                    </span>
                    Adaptation Strategies
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-thinkera-blue mt-2"></span>
                      Use the 70-20-10 rule for learning new tools
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-thinkera-blue mt-2"></span>
                      Schedule weekly 30-minute exploration sessions
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-thinkera-blue mt-2"></span>
                      Start a learning journal to track insights
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center gap-4">
                <Button 
                  variant="outline"
                  onClick={handlePrintResults}
                  className="border-gray-200 hover:bg-gray-50 text-gray-700"
                >
                  <Printer className="mr-2 h-4 w-4" />
                  Print Results
                </Button>
                <Button 
                  onClick={handleRetakeAssessment}
                  className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retake Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsView;
