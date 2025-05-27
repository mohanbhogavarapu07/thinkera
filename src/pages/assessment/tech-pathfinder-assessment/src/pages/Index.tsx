import React from 'react';
import Assessment from '../components/Assessment';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent mb-4">
            Niche Tech Interest Matcher
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover which high-demand tech field aligns best with your interests, 
            work style, and values: AI, ServiceNow, or Salesforce.
          </p>
        </motion.header>

        <motion.main
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Assessment />
        </motion.main>

        <motion.footer 
          className="mt-24 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>© 2025 Niche Tech Interest Matcher. All rights reserved.</p>
          <p className="mt-2">
            Helping students and career switchers find their perfect tech path.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
