import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect?: boolean;
}

interface QuestionCardProps {
  question: string;
  options: QuestionOption[];
  onAnswer: (optionId: string) => void;
  explanation?: string;
  showFeedback?: boolean;
  isSubmitted?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  onAnswer,
  explanation,
  showFeedback = false,
  isSubmitted = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { toast } = useToast();

  const handleOptionSelect = (optionId: string) => {
    if (isSubmitted) return;
    
    setSelectedOption(optionId);
    onAnswer(optionId);
    
    if (showFeedback) {
      const option = options.find(opt => opt.id === optionId);
      if (option?.isCorrect) {
        toast({
          title: "Correct!",
          description: explanation || "That's the right answer!",
          className: "bg-green-50 border-green-200",
        });
      } else {
        toast({
          title: "Not quite right",
          description: explanation || "Try to look for patterns in the question.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 leading-relaxed">{question}</h3>
      </div>
      
      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = selectedOption === option.id;
          
          let optionClasses = "p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3";
          
          if (isSelected) {
            optionClasses += " border-thinkera-purple bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10 shadow-sm";
          } else {
            optionClasses += " border-gray-100 hover:border-thinkera-purple/30 hover:bg-gradient-to-r hover:from-thinkera-purple/5 hover:to-thinkera-blue/5";
          }
          
          if (isSubmitted && showFeedback) {
            if (option.isCorrect) {
              optionClasses = "p-4 rounded-xl border-2 border-green-500 bg-green-50/50";
            } else if (isSelected && !option.isCorrect) {
              optionClasses = "p-4 rounded-xl border-2 border-red-500 bg-red-50/50";
            }
          }
          
          return (
            <motion.div
              key={option.id}
              whileHover={{ scale: 1.01 }}
              className={optionClasses}
              onClick={() => handleOptionSelect(option.id)}
            >
              <div className={`h-5 w-5 shrink-0 mt-0.5 rounded-full border-2 transition-colors duration-200 flex items-center justify-center ${
                isSelected
                  ? 'bg-thinkera-purple border-thinkera-purple'
                  : 'border-gray-300 hover:border-thinkera-purple/50'
              }`}>
                {isSelected && (
                  <div className="h-2 w-2 rounded-full bg-white" />
                )}
              </div>
              <div className={`text-base ${
                isSelected 
                  ? 'text-thinkera-purple font-medium' 
                  : 'text-gray-700 hover:text-thinkera-purple/80'
              }`}>
                {option.text}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
