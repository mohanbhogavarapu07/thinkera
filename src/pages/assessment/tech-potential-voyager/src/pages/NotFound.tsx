
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <div className="w-24 h-24 bg-navigator-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl font-bold text-navigator-purple">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Looks like the page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </p>
        <Button 
          onClick={() => navigate('/')} 
          className="bg-navigator-purple hover:bg-navigator-purple/90 text-white"
        >
          <Home size={18} className="mr-2" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
