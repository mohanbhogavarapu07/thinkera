import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '../../contexts/AssessmentContext';
import QuestionCard from './QuestionCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AssessmentFlow = () => {
  const navigate = useNavigate();
  const { assessmentQuestions, calculateResults, answers } = useAssessment();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const isCurrentQuestionAnswered = () => {
    const currentQuestion = assessmentQuestions[currentQuestionIndex];
    const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
    
    if (!currentAnswer) return false;
    
    switch (currentQuestion.type) {
      case 'situational':
        return currentAnswer.value !== '';
      case 'behavioral':
        const value = currentAnswer.value as number;
        return value >= (currentQuestion.min || 1) && value <= (currentQuestion.max || 5);
      case 'tradeoff':
        const tradeoff = currentAnswer.value as number[];
        return tradeoff[0] + tradeoff[1] === 10;
      default:
        return false;
    }
  };
  
  const handleNext = () => {
    if (!isCurrentQuestionAnswered()) return;
    
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
      navigate('/assessment/agility-growth-compass/results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const renderProgress = () => {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Progress</span>
          <span className="text-sm font-medium text-thinkera-purple">
            {Math.round(((currentQuestionIndex + 1) / assessmentQuestions.length) * 100)}%
          </span>
        </div>
        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-thinkera-purple to-thinkera-blue rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${((currentQuestionIndex + 1) / assessmentQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    );
  };
  
  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-block p-2 bg-thinkera-purple/5 rounded-2xl mb-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
            Agility Assessment
          </h2>
        </div>
        <p className="text-gray-600 max-w-lg mx-auto">
          Let's explore how you respond to learning challenges and discover your growth potential
        </p>
      </motion.div>
      
      {renderProgress()}
      
      <div className="assessment-card mt-8">
        <QuestionCard 
          question={currentQuestion} 
          onNext={handleNext} 
        />
        
        <div className="flex justify-between mt-8">
          <Button 
            onClick={handlePrevious} 
            disabled={currentQuestionIndex === 0}
            variant="outline"
            className="border-gray-200 hover:bg-gray-50 text-gray-600"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          <Button 
            onClick={handleNext} 
            disabled={!isCurrentQuestionAnswered()}
            className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestionIndex === assessmentQuestions.length - 1 ? 'See Results' : 'Next'}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p className="font-medium">Question {currentQuestionIndex + 1} of {assessmentQuestions.length}</p>
          <p className="italic mt-2 text-gray-400">Remember, there are no right or wrong answers!</p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentFlow;
