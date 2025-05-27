import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import Badge from '../components/Badge';
import { Lightbulb, Brain, Puzzle, Clock, BarChart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";

// Sample questions for the assessment simulation
const assessmentQuestions = [
  {
    id: 'q1',
    question: 'Which number logically continues this sequence: 3, 6, 10, 15, 21, __?',
    options: [
      { id: 'q1a', text: '26', isCorrect: false },
      { id: 'q1b', text: '27', isCorrect: false },
      { id: 'q1c', text: '28', isCorrect: true },
      { id: 'q1d', text: '30', isCorrect: false },
    ],
    category: 'logical'
  },
  {
    id: 'q2',
    question: 'If the pattern continues, which shape comes next?',
    options: [
      { id: 'q2a', text: 'Square', isCorrect: false },
      { id: 'q2b', text: 'Circle', isCorrect: true },
      { id: 'q2c', text: 'Triangle', isCorrect: false },
      { id: 'q2d', text: 'Pentagon', isCorrect: false },
    ],
    category: 'pattern'
  },
  {
    id: 'q3',
    question: 'Which component would complete this circuit to make the light turn on?',
    options: [
      { id: 'q3a', text: 'Resistor', isCorrect: false },
      { id: 'q3b', text: 'Battery', isCorrect: true },
      { id: 'q3c', text: 'Capacitor', isCorrect: false },
      { id: 'q3d', text: 'Diode', isCorrect: false },
    ],
    category: 'systems'
  },
  {
    id: 'q4',
    question: 'Which code snippet would correctly calculate the sum of all even numbers in an array?',
    options: [
      { id: 'q4a', text: 'array.filter(x => x % 2 == 0).reduce((a, b) => a + b, 0)', isCorrect: true },
      { id: 'q4b', text: 'array.reduce((a, b) => a + b % 2 == 0, 0)', isCorrect: false },
      { id: 'q4c', text: 'array.filter(x => x % 2 == 0).sum()', isCorrect: false },
      { id: 'q4d', text: 'array.map(x => x % 2 == 0 ? x : 0).reduce((a, b) => a + b)', isCorrect: false },
    ],
    category: 'logical'
  },
  {
    id: 'q5',
    question: 'If the cube below is folded along the dotted lines, which 3D shape would it form?',
    options: [
      { id: 'q5a', text: 'Tetrahedron', isCorrect: false },
      { id: 'q5b', text: 'Cube', isCorrect: true },
      { id: 'q5c', text: 'Rectangular Prism', isCorrect: false },
      { id: 'q5d', text: 'Octahedron', isCorrect: false },
    ],
    category: 'spatial'
  }
];

// Badge definitions
const badges = [
  { id: 'b1', title: 'Fast Thinker', icon: <Clock size={24} /> },
  { id: 'b2', title: 'Pattern Master', icon: <Puzzle size={24} /> },
  { id: 'b3', title: 'Logic Guru', icon: <Brain size={24} /> },
  { id: 'b4', title: 'System Analyst', icon: <BarChart size={24} /> },
  { id: 'b5', title: 'Insight Champion', icon: <Lightbulb size={24} /> }
];

const Assessment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeRemaining, setTimeRemaining] = useState('15:00');
  const [progress, setProgress] = useState(0);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  
  const totalQuestions = assessmentQuestions.length;
  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  
  // Simulate progress calculation
  useEffect(() => {
    setProgress((Object.keys(answers).length / totalQuestions) * 100);
  }, [answers, totalQuestions]);
  
  // Simulate timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        const [mins, secs] = prev.split(':').map(Number);
        if (mins === 0 && secs === 0) return '0:00';
        
        if (secs === 0) {
          return `${mins - 1}:59`;
        } else {
          return `${mins}:${secs - 1 < 10 ? '0' + (secs - 1) : secs - 1}`;
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Simulate unlocking badges based on progress
  useEffect(() => {
    const progressThresholds = [20, 40, 60, 80, 100];
    const completedPercent = progress;
    
    progressThresholds.forEach((threshold, index) => {
      if (completedPercent >= threshold && !unlockedBadges.includes(badges[index].id)) {
        setTimeout(() => {
          setUnlockedBadges(prev => [...prev, badges[index].id]);
          toast({
            title: `Badge Unlocked: ${badges[index].title}`,
            description: "You've reached a new milestone in your assessment journey!",
            className: "bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10 border-thinkera-purple/20",
          });
        }, 500);
      }
    });
  }, [progress, toast, unlockedBadges]);
  
  const handleAnswer = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
    
    // Simulate the adaptive difficulty by showing a subtle animation
    const correctOption = currentQuestion.options.find(opt => opt.isCorrect);
    const isCorrect = correctOption?.id === optionId;
    
    // Simulate a delay before moving to next question automatically
    setTimeout(() => {
      if (currentQuestionIndex < assessmentQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // Last question answered, navigate to results
        navigate('/assessment/tech-potential-voyager/results');
      }
    }, 1000);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Last question answered, navigate to results
      navigate('/assessment/tech-potential-voyager/results');
    }
  };

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-secondary/30">
      <ProgressBar progress={progress} timeRemaining={timeRemaining} />
      
      <div className="container mx-auto max-w-4xl px-4 py-16">
        {/* Badge display area */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-8 flex-wrap justify-center">
            {badges.map(badge => (
              <motion.div
                key={badge.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: unlockedBadges.includes(badge.id) ? 1 : 0.8,
                  opacity: 1
                }}
                transition={{ duration: 0.3 }}
              >
                <Badge 
                  title={badge.title} 
                  icon={badge.icon} 
                  isUnlocked={unlockedBadges.includes(badge.id)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Question area */}
        <motion.div 
          className="max-w-2xl mx-auto"
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
                  showFeedback={false}
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.div 
            className="mt-8 flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-2 px-6 py-3 text-base hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5" />
              Previous
            </Button>

            <Button
              variant="default"
              size="lg"
              onClick={handleNext}
              className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white px-8 py-3 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              {currentQuestionIndex === assessmentQuestions.length - 1 ? 'See Results' : 'Next'}
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Assessment;
