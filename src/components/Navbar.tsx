import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-thinkera-purple dark:text-thinkera-purple-light" : "text-gray-700 dark:text-gray-200";
  };

  const isActiveSubPath = (path: string) => {
    return location.pathname.startsWith(path) ? "text-thinkera-purple dark:text-thinkera-purple-light" : "text-gray-700 dark:text-gray-200";
  };

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
      isScrolled ? "bg-white/90 dark:bg-thinkera-dark/90 shadow-sm" : "bg-white/80 dark:bg-thinkera-dark/80"
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-poppins font-bold text-2xl hero-gradient-text">ThinkEra</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className={`${isActive("/courses")} hover:text-thinkera-purple dark:hover:text-thinkera-purple-light transition-colors`}>
              Courses
            </Link>
            <Link to="/hackathons" className={`${isActive("/hackathons")} hover:text-thinkera-purple dark:hover:text-thinkera-purple-light transition-colors`}>
              Hackathons
            </Link>
            <Link to="/success-stories" className={`${isActive("/success-stories")} hover:text-thinkera-purple dark:hover:text-thinkera-purple-light transition-colors`}>
              Success Stories
            </Link>
            <Link to="/corporate" className={`${isActive("/corporate")} hover:text-thinkera-purple dark:hover:text-thinkera-purple-light transition-colors`}>
              Corporate Training
            </Link>
            <Link to="/leadership" className={`${isActive("/leadership")} hover:text-thinkera-purple dark:hover:text-thinkera-purple-light transition-colors`}>
            Leaderboard            </Link>
            <Link to="/contact" className={`${isActive("/contact")} hover:text-thinkera-purple dark:hover:text-thinkera-purple-light transition-colors`}>
            Contact        </Link>
            <Link to="/blog" className={`${isActive("/blog")} hover:text-thinkera-purple dark:hover:text-thinkera-purple-light transition-colors`}>
            Blog         </Link>
            
            
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="ml-2">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button className="button-gradient">Sign In</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button onClick={toggleDarkMode} variant="ghost" size="icon">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/courses" className={`${isActive("/courses")} py-2 hover:text-thinkera-purple dark:hover:text-thinkera-purple-light`}>
                Courses
              </Link>
              <Link to="/hackathons" className={`${isActive("/hackathons")} py-2 hover:text-thinkera-purple dark:hover:text-thinkera-purple-light`}>
                Hackathons
              </Link>
              <Link to="/success-stories" className={`${isActive("/success-stories")} py-2 hover:text-thinkera-purple dark:hover:text-thinkera-purple-light`}>
                Success Stories
              </Link>
              <Link to="/corporate" className={`${isActive("/corporate")} py-2 hover:text-thinkera-purple dark:hover:text-thinkera-purple-light`}>
                Corporate Training
              </Link>
              
              {/* Blog section for mobile */}
              <div className="py-2">
                <div className={`${isActiveSubPath("/blog")} font-medium mb-2`}>Blog</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="/blog/tutorials" className="text-gray-600 dark:text-gray-300 hover:text-thinkera-purple dark:hover:text-thinkera-purple-light">
                    Tutorials
                  </Link>
                  <Link to="/blog/industry-insights" className="text-gray-600 dark:text-gray-300 hover:text-thinkera-purple dark:hover:text-thinkera-purple-light">
                    Industry Insights
                  </Link>
                  <Link to="/blog/career-tips" className="text-gray-600 dark:text-gray-300 hover:text-thinkera-purple dark:hover:text-thinkera-purple-light">
                    Career Tips
                  </Link>
                  <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-thinkera-purple dark:hover:text-thinkera-purple-light">
                    All Posts
                  </Link>
                </div>
              </div>
              
              <Button className="button-gradient w-full mt-2">Sign In</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
