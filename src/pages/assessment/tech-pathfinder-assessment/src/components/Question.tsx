import React from 'react';
import { Question as QuestionType } from '../data/questions';
import { motion } from 'framer-motion';

interface QuestionProps {
  question: QuestionType;
  selectedChoice: string | null;
  onSelectChoice: (choiceId: string) => void;
}

const Question: React.FC<QuestionProps> = ({ 
  question, 
  selectedChoice, 
  onSelectChoice 
}) => {
  const IconComponent = question.icon;

  const renderChoices = () => {
    switch (question.type) {
      case 'multiple-choice':
      case 'scenario':
      case 'tradeoff':
        return (
          <div className="space-y-3 mt-6">
            {question.choices.map((choice) => (
              <motion.div 
                key={choice.id}
                whileHover={{ scale: 1.01 }}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  selectedChoice === choice.id 
                    ? 'border-thinkera-purple bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10 shadow-sm' 
                    : 'border-gray-100 hover:border-thinkera-purple/30 hover:bg-gradient-to-r hover:from-thinkera-purple/5 hover:to-thinkera-blue/5'
                }`}
                onClick={() => onSelectChoice(choice.id)}
              >
                <div className="flex items-start">
                  <div className="h-5 w-5 shrink-0 mt-0.5">
                    <div className={`h-5 w-5 rounded-full border-2 transition-colors duration-200 ${
                      selectedChoice === choice.id 
                        ? 'bg-thinkera-purple border-thinkera-purple' 
                        : 'border-gray-300 hover:border-thinkera-purple/50'
                    } flex items-center justify-center`}>
                      {selectedChoice === choice.id && (
                        <div className="h-2 w-2 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                  <div className="ml-3">
                    <span className={`text-base ${
                      selectedChoice === choice.id 
                        ? 'text-thinkera-purple font-medium' 
                        : 'text-gray-700 hover:text-thinkera-purple/80'
                    }`}>
                      {choice.text}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      
      case 'likert-scale':
        return (
          <div className="mt-6 space-y-4">
            {question.choices.map((choice) => (
              <motion.div 
                key={choice.id}
                whileHover={{ scale: 1.01 }}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  selectedChoice === choice.id 
                    ? 'border-thinkera-purple bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10 shadow-sm' 
                    : 'border-gray-100 hover:border-thinkera-purple/30 hover:bg-gradient-to-r hover:from-thinkera-purple/5 hover:to-thinkera-blue/5'
                }`}
                onClick={() => onSelectChoice(choice.id)}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-base ${
                    selectedChoice === choice.id 
                      ? 'text-thinkera-purple font-medium' 
                      : 'text-gray-700 hover:text-thinkera-purple/80'
                  }`}>
                    {choice.text}
                  </span>
                  <div className="h-5 w-5">
                    <div className={`h-5 w-5 rounded-full border-2 transition-colors duration-200 ${
                      selectedChoice === choice.id 
                        ? 'bg-thinkera-purple border-thinkera-purple' 
                        : 'border-gray-300 hover:border-thinkera-purple/50'
                    } flex items-center justify-center`}>
                      {selectedChoice === choice.id && (
                        <div className="h-2 w-2 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      
      default:
        return null;
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
      <div className="flex items-center gap-3 mb-4">
        {IconComponent && (
          <div className="p-2 rounded-lg bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10">
            <IconComponent className="h-5 w-5 text-thinkera-purple" />
          </div>
        )}
        <h3 className="text-2xl font-semibold text-gray-800 leading-relaxed">
          {question.question}
        </h3>
      </div>
      
      {question.description && (
        <p className="text-gray-600 mb-6 text-base leading-relaxed">{question.description}</p>
      )}
      
      {renderChoices()}
    </motion.div>
  );
};

export default Question;
