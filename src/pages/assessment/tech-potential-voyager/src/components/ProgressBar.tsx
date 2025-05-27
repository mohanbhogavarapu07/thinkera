import React from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  timeRemaining?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, timeRemaining }) => {
  return (
    <div className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-40 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
                {Math.round(progress)}%
              </span>
              {timeRemaining && (
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-gray-500" />
                  <span className="text-sm text-gray-600">{timeRemaining} remaining</span>
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-thinkera-purple to-thinkera-blue rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
