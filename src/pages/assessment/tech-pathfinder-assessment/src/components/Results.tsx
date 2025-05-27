import React from 'react';
import { ResultProfile } from '../data/results';
import { Button } from "@/components/ui/button";
import { Share2, Award, ChevronRight } from 'lucide-react';
import ShareCard from './ShareCard';
import { motion } from 'framer-motion';

interface ResultsProps {
  primaryMatch: ResultProfile;
  secondaryMatch: ResultProfile;
  percentages: Record<string, number>;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ 
  primaryMatch, 
  secondaryMatch, 
  percentages,
  onRestart
}) => {
  const [showShareCard, setShowShareCard] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <div className="inline-block p-2 rounded-2xl bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10 mb-4">
          <Award className="h-12 w-12 text-thinkera-purple" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent mb-2">
          Your Tech Path Match
        </h2>
        <p className="text-gray-600 max-w-md mx-auto text-base leading-relaxed">
          Based on your responses, we've identified your ideal tech career path.
          Here's a personalized breakdown of your results.
        </p>
      </div>

      {/* Primary Match */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8 border-t-4 border-thinkera-purple"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-sm font-medium text-thinkera-purple/80">PRIMARY MATCH</span>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">{primaryMatch.title}</h3>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500">Match Strength</span>
            <p className="text-2xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
              {percentages[primaryMatch.id]}%
            </p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6 text-base leading-relaxed">
          {primaryMatch.description}
        </p>
        
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-3">Your Key Strengths:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {primaryMatch.strengths.map((strength, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-thinkera-purple to-thinkera-blue"></div>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-800 mb-3">Potential Roles:</h4>
          <div className="flex flex-wrap gap-2">
            {primaryMatch.roles.map((role, index) => (
              <span 
                key={index} 
                className="px-4 py-1.5 bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10 text-thinkera-purple rounded-full text-sm font-medium"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Secondary Match */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8 border-t-4 border-gray-200"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-sm font-medium text-gray-500">SECONDARY MATCH</span>
            <h3 className="text-xl font-bold text-gray-800 mt-1">{secondaryMatch.title}</h3>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500">Match Strength</span>
            <p className="text-xl font-bold text-gray-600">{percentages[secondaryMatch.id]}%</p>
          </div>
        </div>
        
        <p className="text-gray-700 text-base leading-relaxed">
          {secondaryMatch.description}
        </p>
      </motion.div>

      {/* Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 mb-8"
      >
        <Button 
          onClick={() => setShowShareCard(true)} 
          variant="outline" 
          className="flex-1 border-gray-200 hover:bg-gray-50 text-gray-600"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share Your Results
        </Button>
        <Button 
          className="flex-1 bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white"
        >
          Explore Training Options
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>

      <div className="text-center mb-8">
        <button 
          onClick={onRestart}
          className="text-gray-500 hover:text-thinkera-purple text-sm font-medium transition-colors duration-200"
        >
          Retake Assessment
        </button>
      </div>

      {showShareCard && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <ShareCard 
            result={primaryMatch} 
            percentage={percentages[primaryMatch.id]}
            onClose={() => setShowShareCard(false)}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Results;
