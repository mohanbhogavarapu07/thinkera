import React from 'react';
import { ResultProfile } from '../data/results';
import { Button } from "@/components/ui/button";
import { X, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

interface ShareCardProps {
  result: ResultProfile;
  percentage: number;
  onClose: () => void;
}

const ShareCard: React.FC<ShareCardProps> = ({ result, percentage, onClose }) => {
  const { toast } = useToast();
  
  const handleCopyLink = () => {
    const text = `I'm a ${result.badge} with a ${percentage}% match! Find your tech career path with the Niche Tech Interest Matcher.`;
    navigator.clipboard.writeText(text);
    toast({
      title: "Link copied!",
      description: "Share your results with others."
    });
  };

  const handleShare = (platform: string) => {
    toast({
      title: "Sharing to " + platform,
      description: "Sharing functionality would open a share dialog for " + platform
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="bg-white max-w-md w-full rounded-2xl shadow-lg relative overflow-hidden p-6"
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
      >
        <X className="h-4 w-4 text-gray-600" />
      </button>
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent mb-2">
          Share Your Results
        </h3>
        <p className="text-gray-600 text-base">Let others know about your tech career match!</p>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-thinkera-purple/10 to-thinkera-blue/10 rounded-xl mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-thinkera-purple/80">YOUR BADGE</span>
          <span className="text-sm font-medium bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
            {percentage}% Match
          </span>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
          <div className="h-14 w-14 rounded-full bg-gradient-to-r from-thinkera-purple/20 to-thinkera-blue/20 flex items-center justify-center">
            <span className="text-thinkera-purple text-xl font-bold">{result.badge.split(' ')[0][0]}</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-lg">{result.badge}</h4>
            <p className="text-sm text-gray-600">Share and inspire others!</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <Button 
          onClick={() => handleShare("Facebook")}
          variant="outline" 
          className="w-full justify-start border-gray-200 hover:bg-gray-50 text-gray-600"
        >
          <Facebook className="mr-2 h-4 w-4 text-blue-600" />
          Share on Facebook
        </Button>
        
        <Button 
          onClick={() => handleShare("Twitter")}
          variant="outline" 
          className="w-full justify-start border-gray-200 hover:bg-gray-50 text-gray-600"
        >
          <Twitter className="mr-2 h-4 w-4 text-blue-400" />
          Share on Twitter
        </Button>
        
        <Button 
          onClick={() => handleShare("LinkedIn")}
          variant="outline" 
          className="w-full justify-start border-gray-200 hover:bg-gray-50 text-gray-600"
        >
          <Linkedin className="mr-2 h-4 w-4 text-blue-700" />
          Share on LinkedIn
        </Button>
        
        <Button 
          onClick={handleCopyLink}
          variant="outline" 
          className="w-full justify-start border-gray-200 hover:bg-gray-50 text-gray-600"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy Result Text
        </Button>
      </div>
      
      <p className="text-sm text-center text-gray-500">
        Thanks for taking the Niche Tech Interest Matcher!
      </p>
    </motion.div>
  );
};

export default ShareCard;
