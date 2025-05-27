import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Question from './Question';
import ProgressBar from './ProgressBar';
import Results from './Results';
import { questions } from '../data/questions';
import { calculateResults, results } from '../data/results';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Assessment: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleSelectChoice = (choiceId: string) => {
    setAnswers({
      ...answers,
      [questions[currentQuestionIndex].id]: choiceId
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setHasStarted(false);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const selectedChoice = currentQuestion ? answers[currentQuestion.id] : null;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const renderAssessment = () => {
    if (showResults) {
      const result = calculateResults(answers);
      return (
        <Results 
          primaryMatch={results[result.primaryMatch]}
          secondaryMatch={results[result.secondaryMatch]}
          percentages={result.percentages}
          onRestart={handleRestart}
        />
      );
    }

    return (
      <div>
        <ProgressBar currentStep={currentQuestionIndex + 1} totalSteps={questions.length} />
        
        <div className="assessment-card">
          {currentQuestion && (
            <Question 
              question={currentQuestion}
              selectedChoice={selectedChoice}
              onSelectChoice={handleSelectChoice}
            />
          )}
        </div>

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
            disabled={!selectedChoice}
            className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLastQuestion ? 'See Results' : 'Next'}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p className="font-medium">Question {currentQuestionIndex + 1} of {questions.length}</p>
          <p className="italic mt-2 text-gray-400">Remember, there are no right or wrong answers!</p>
        </div>
      </div>
    );
  };

  const renderIntro = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
      >
        <div className="inline-block p-2 bg-thinkera-purple/5 rounded-2xl mb-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
            Discover Your Tech Career Path
          </h2>
        </div>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto text-base leading-relaxed">
          Find your perfect match in AI, ServiceNow, or Salesforce with our personalized assessment.
          Answer a few questions about your interests, work style, and values to receive your customized recommendation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl border border-gray-100 hover:border-thinkera-purple/30 transition-all duration-200"
          >
            <div className="h-14 w-14 bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-thinkera-purple font-bold text-lg">AI</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Artificial Intelligence</h3>
            <p className="text-sm text-gray-600">Machine learning, data science, and intelligent systems</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl border border-gray-100 hover:border-thinkera-purple/30 transition-all duration-200"
          >
            <div className="h-14 w-14 bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-thinkera-purple font-bold text-lg">SN</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">ServiceNow</h3>
            <p className="text-sm text-gray-600">Digital workflows, process automation, and IT service management</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl border border-gray-100 hover:border-thinkera-purple/30 transition-all duration-200"
          >
            <div className="h-14 w-14 bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-thinkera-purple font-bold text-lg">SF</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Salesforce</h3>
            <p className="text-sm text-gray-600">Customer relationship management, cloud solutions, and business apps</p>
          </motion.div>
        </div>
        
        <Button 
          onClick={handleStart} 
          className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white px-8 py-6 text-lg"
        >
          Start Assessment
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
        
        <p className="text-sm text-gray-500 mt-6">
          About 5 minutes to complete • 15 questions • Personalized results
        </p>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      {hasStarted ? renderAssessment() : renderIntro()}
    </div>
  );
};

export default Assessment;
