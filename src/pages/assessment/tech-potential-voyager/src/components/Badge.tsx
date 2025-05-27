import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  title: string;
  icon?: React.ReactNode;
  isUnlocked?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ title, icon, isUnlocked = false }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col items-center ${isUnlocked ? '' : 'opacity-40'}`}
    >
      <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
        isUnlocked 
          ? 'bg-gradient-to-r from-thinkera-purple to-thinkera-blue text-white shadow-lg shadow-thinkera-purple/20' 
          : 'bg-gray-100 text-gray-400'
      }`}>
        {icon}
      </div>
      <span className="mt-3 text-base font-medium text-gray-800">{title}</span>
      <span className={`text-sm ${
        isUnlocked 
          ? 'text-thinkera-purple font-medium' 
          : 'text-gray-500'
      }`}>
        {isUnlocked ? 'Unlocked' : 'Locked'}
      </span>
    </motion.div>
  );
};

export default Badge;
