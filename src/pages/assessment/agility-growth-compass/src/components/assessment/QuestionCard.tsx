import { useState } from 'react';
import { Question, Answer, useAssessment } from '../../contexts/AssessmentContext';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { motion } from 'framer-motion';

interface QuestionCardProps {
  question: Question;
  onNext: () => void;
}

const QuestionCard = ({ question, onNext }: QuestionCardProps) => {
  const { addAnswer, answers } = useAssessment();
  
  // Get existing answer if available
  const existingAnswer = answers.find(a => a.questionId === question.id);
  
  // State for different question types
  const [situationalAnswer, setSituationalAnswer] = useState<string>(
    (existingAnswer?.value as string) || ''
  );
  const [behavioralAnswer, setBehavioralAnswer] = useState<number>(
    (existingAnswer?.value as number) || 
    (question.min && question.max ? Math.floor((question.min + question.max) / 2) : 3)
  );
  const [tradeoffAnswer, setTradeoffAnswer] = useState<number[]>(
    (existingAnswer?.value as number[]) || [5, 5]
  );
  
  const isAnswerValid = () => {
    switch (question.type) {
      case 'situational':
        return situationalAnswer !== '';
      case 'behavioral':
        return behavioralAnswer >= (question.min || 1) && behavioralAnswer <= (question.max || 5);
      case 'tradeoff':
        return tradeoffAnswer[0] + tradeoffAnswer[1] === 10;
      default:
        return false;
    }
  };
  
  const handleAnswer = () => {
    if (!isAnswerValid()) return;
    
    let value: string | number | number[];
    
    switch (question.type) {
      case 'situational':
        value = situationalAnswer;
        break;
      case 'behavioral':
        value = behavioralAnswer;
        break;
      case 'tradeoff':
        value = tradeoffAnswer;
        break;
      default:
        value = '';
    }
    
    addAnswer({
      questionId: question.id,
      value
    });
  };
  
  const renderQuestionContent = () => {
    switch (question.type) {
      case 'situational':
        return (
          <div className="mt-4 mb-6">
            <RadioGroup
              value={situationalAnswer}
              onValueChange={(value) => {
                setSituationalAnswer(value);
                if (value && value !== '') {
                  handleAnswer();
                }
              }}
              className="space-y-3"
            >
              {question.options?.map((option, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 border ${
                    situationalAnswer === option 
                      ? 'border-thinkera-purple bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10 shadow-sm' 
                      : 'border-gray-100 hover:border-thinkera-purple/30 hover:bg-gradient-to-r hover:from-thinkera-purple/5 hover:to-thinkera-blue/5'
                  }`}
                >
                  <RadioGroupItem 
                    value={option} 
                    id={`option-${index}`} 
                    className={`${
                      situationalAnswer === option 
                        ? 'border-thinkera-purple text-thinkera-purple' 
                        : 'border-gray-300 text-gray-400 hover:border-thinkera-purple/50'
                    }`} 
                  />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className={`cursor-pointer flex-1 ${
                      situationalAnswer === option 
                        ? 'text-thinkera-purple font-medium' 
                        : 'text-gray-700 hover:text-thinkera-purple/80'
                    }`}
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
        
      case 'behavioral':
        return (
          <div className="mt-6 mb-6">
            <div className="relative">
              <Slider
                defaultValue={[behavioralAnswer]}
                min={question.min || 1}
                max={question.max || 5}
                step={1}
                onValueChange={(val) => {
                  const newValue = val[0];
                  setBehavioralAnswer(newValue);
                  if (newValue >= (question.min || 1) && newValue <= (question.max || 5)) {
                    handleAnswer();
                  }
                }}
                className="my-6 [&>div]:bg-gradient-to-r [&>div]:from-thinkera-purple [&>div]:to-thinkera-blue [&>div>div]:border-2 [&>div>div]:border-thinkera-purple [&>div>div]:bg-white [&>div>div]:hover:border-thinkera-blue [&>div>div]:hover:scale-110 [&>div>div]:transition-all"
              />
            </div>
            
            <div className="emoji-scale flex justify-between items-center px-4">
              {question.emoji?.map((emoji, index) => (
                <div 
                  key={index} 
                  className={`emoji-scale-item flex flex-col items-center ${
                    index + (question.min || 1) === behavioralAnswer 
                      ? 'text-thinkera-purple scale-110 transform transition-transform' 
                      : 'text-gray-400 hover:text-thinkera-purple/70'
                  }`}
                >
                  <span className="text-3xl mb-2">{emoji}</span>
                  <span className="text-xs font-medium">
                    {index === 0 ? question.minLabel : index === (question.emoji?.length || 0) - 1 ? question.maxLabel : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'tradeoff':
        const total = 10;
        return (
          <div className="mt-6 mb-6">
            <p className="text-sm text-center mb-4 text-gray-600 font-medium">Allocate 10 points between these priorities</p>
            
            <div className="flex items-center mb-6">
              <div className="w-36 text-right mr-4 font-medium text-gray-700">{question.options?.[0]}</div>
              <div className="flex-grow relative">
                <Slider
                  defaultValue={[tradeoffAnswer[0]]}
                  min={0}
                  max={total}
                  step={1}
                  onValueChange={(val) => {
                    const newValue = val[0];
                    const newTradeoff = [newValue, total - newValue];
                    setTradeoffAnswer(newTradeoff);
                    if (newTradeoff[0] + newTradeoff[1] === 10) {
                      handleAnswer();
                    }
                  }}
                  className="my-2 [&>div]:bg-gradient-to-r [&>div]:from-thinkera-purple [&>div]:to-thinkera-blue [&>div>div]:border-2 [&>div>div]:border-thinkera-purple [&>div>div]:bg-white [&>div>div]:hover:border-thinkera-blue [&>div>div]:hover:scale-110 [&>div>div]:transition-all"
                />
              </div>
              <div className="w-36 ml-4 font-medium text-gray-700">{question.options?.[1]}</div>
            </div>
            
            <div className="flex justify-between px-8">
              <div className="text-center">
                <div className="font-bold text-xl bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                  {tradeoffAnswer[0]}
                </div>
                <div className="text-xs text-gray-500 font-medium">points</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                  {tradeoffAnswer[1]}
                </div>
                <div className="text-xs text-gray-500 font-medium">points</div>
              </div>
            </div>
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
      <h3 className="text-2xl font-semibold mb-8 text-gray-800 leading-relaxed">{question.question}</h3>
      {renderQuestionContent()}
    </motion.div>
  );
};

export default QuestionCard;
