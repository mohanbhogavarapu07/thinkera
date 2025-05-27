import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { ArrowRight, HelpCircle } from 'lucide-react';
import QuestionCard, { QuestionOption } from '../components/QuestionCard';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample practice questions
const practiceQuestions = [
  {
    id: 'p1',
    question: 'Which number comes next in the sequence: 2, 4, 8, 16, __?',
    options: [
      { id: 'p1a', text: '18', isCorrect: false },
      { id: 'p1b', text: '24', isCorrect: false },
      { id: 'p1c', text: '32', isCorrect: true },
      { id: 'p1d', text: '64', isCorrect: false },
    ],
    explanation: 'Each number in the sequence is doubled from the previous number (2×2=4, 4×2=8, 8×2=16, 16×2=32).',
    tip: 'Look for patterns of multiplication or addition between sequential numbers.'
  },
  {
    id: 'p2',
    question: 'Which shape completes the pattern?',
    // In a real application, we would use actual images for the matrices
    options: [
      { id: 'p2a', text: 'Circle', isCorrect: false },
      { id: 'p2b', text: 'Triangle', isCorrect: true },
      { id: 'p2c', text: 'Square', isCorrect: false },
      { id: 'p2d', text: 'Pentagon', isCorrect: false },
    ],
    explanation: 'The pattern shows a rotation of shapes where every third shape is a triangle.',
    tip: 'In matrix problems, examine patterns across both rows and columns.'
  },
  {
    id: 'p3',
    question: 'If all Zarks are Yinks, and some Yinks are Quills, which statement must be true?',
    options: [
      { id: 'p3a', text: 'All Zarks are Quills', isCorrect: false },
      { id: 'p3b', text: 'Some Zarks may be Quills', isCorrect: true },
      { id: 'p3c', text: 'No Zarks are Quills', isCorrect: false },
      { id: 'p3d', text: 'All Quills are Zarks', isCorrect: false },
    ],
    explanation: 'Since all Zarks are Yinks and some Yinks are Quills, it\'s possible that some Zarks are also Quills.',
    tip: 'For logical reasoning questions, try visualizing the relationships with overlapping circles.'
  }
];

const Practice = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showTips, setShowTips] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const currentQuestion = practiceQuestions[currentQuestionIndex];
  
  const handleAnswer = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < practiceQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsSubmitted(false);
    } else {
      navigate('/assessment/tech-potential-voyager/assessment');
    }
  };
  
  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  
  const isAnswered = !!answers[currentQuestion?.id];
  const isLastQuestion = currentQuestionIndex === practiceQuestions.length - 1;

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-secondary/30 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
            Practice Zone
          </h1>
          <p className="text-lg text-gray-600">
            Try a few sample questions to get familiar with the format. These don't count toward your results.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className="w-full lg:w-3/4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {currentQuestion && (
                <motion.div
                  key={currentQuestion.id}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <QuestionCard 
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    onAnswer={handleAnswer}
                    explanation={currentQuestion.explanation}
                    showFeedback={isSubmitted}
                    isSubmitted={isSubmitted}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/4 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium text-gray-900">Helpful Tips</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-sm hover:bg-gray-50"
                  onClick={() => setShowTips(!showTips)}
                >
                  {showTips ? 'Hide' : 'Show'}
                </Button>
              </div>
              
              <AnimatePresence>
                {showTips && currentQuestion && (
                  <motion.div 
                    className="text-base text-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p>{currentQuestion.tip}</p>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center gap-2 text-thinkera-purple cursor-help">
                              <HelpCircle size={16} />
                              <span className="text-sm">Why am I seeing this?</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs p-4">
                            <p className="text-sm">This practice zone helps you get familiar with the question formats. The actual assessment will adapt to your skill level.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="bg-gradient-to-br from-thinkera-purple/5 to-thinkera-blue/5 rounded-2xl border border-thinkera-purple/20 p-6">
              <h4 className="font-medium text-gray-900 mb-4">Question Progress</h4>
              <div className="flex gap-2 mb-4">
                {practiceQuestions.map((_, index) => (
                  <motion.div 
                    key={index} 
                    className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                      index === currentQuestionIndex
                        ? 'bg-gradient-to-r from-thinkera-purple to-thinkera-blue'
                        : index < currentQuestionIndex
                          ? 'bg-gradient-to-r from-thinkera-purple/40 to-thinkera-blue/40'
                          : 'bg-gray-200'
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: index === currentQuestionIndex ? 1.1 : 1 }}
                  ></motion.div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Question {currentQuestionIndex + 1} of {practiceQuestions.length}
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-between mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            variant="outline" 
            onClick={() => {
              if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                setIsSubmitted(false);
              } else {
                navigate('/assessment/tech-potential-voyager/onboarding');
              }
            }}
            className="px-6 py-3 text-base hover:bg-gray-50"
          >
            {currentQuestionIndex > 0 ? 'Previous Question' : 'Back to Onboarding'}
          </Button>
          
          <div className="space-x-4">
            {!isSubmitted && (
              <Button 
                variant="secondary"
                onClick={handleSubmit}
                disabled={!isAnswered}
                className="px-6 py-3 text-base"
              >
                Check Answer
              </Button>
            )}
            
            <Button 
              onClick={handleNext}
              className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white px-8 py-3 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              disabled={!isAnswered}
            >
              {isLastQuestion ? 'Start Assessment' : 'Next Question'}
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Practice;
