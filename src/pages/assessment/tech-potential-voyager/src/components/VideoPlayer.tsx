import React, { useState } from 'react';
import { Play, Pause, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  videoSrc?: string;
  posterSrc?: string;
  onClose?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  videoSrc = 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
  posterSrc = '/placeholder.svg', 
  onClose 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-2xl overflow-hidden bg-black/80 w-full aspect-video shadow-lg"
    >
      {onClose && (
        <motion.button 
          whileHover={{ scale: 1.1 }}
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
          aria-label="Close video"
        >
          <X size={20} />
        </motion.button>
      )}
      
      <video 
        ref={videoRef}
        className="w-full h-full object-contain"
        poster={posterSrc}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-200"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause size={64} className="text-white opacity-80" />
        ) : (
          <Play size={64} className="text-white opacity-80" />
        )}
      </motion.button>
    </motion.div>
  );
};

export default VideoPlayer;
