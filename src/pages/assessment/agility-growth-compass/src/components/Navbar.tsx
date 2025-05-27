import { useAssessment } from '../contexts/AssessmentContext';
import { Home, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { currentPhase, setCurrentPhase, resetAssessment } = useAssessment();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/assessment/agility-growth-compass');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-thinkera-purple to-thinkera-blue rounded-xl">
          <BarChart3 size={24} className="text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
          Agility Growth Compass
        </span>
      </div>
      
      <div className="flex space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleHomeClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-thinkera-purple"
        >
          <Home size={18} />
          <span>Home</span>
        </Button>
        
        {currentPhase === 'results' && (
          <Button
            variant="default"
            size="sm"
            onClick={resetAssessment}
            className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white"
          >
            Start New Assessment
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
