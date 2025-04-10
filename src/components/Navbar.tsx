
import React, { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-skill-dark/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="font-poppins font-bold text-2xl hero-gradient-text">SkillForge</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-700 dark:text-gray-200 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
              Courses
            </a>
            <a href="#hackathons" className="text-gray-700 dark:text-gray-200 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
              Hackathons
            </a>
            <a href="#success-stories" className="text-gray-700 dark:text-gray-200 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
              Success Stories
            </a>
            <a href="#corporate" className="text-gray-700 dark:text-gray-200 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
              Corporate Training
            </a>
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
              <a href="#courses" className="text-gray-700 dark:text-gray-200 py-2 hover:text-skill-purple dark:hover:text-skill-purple-light">
                Courses
              </a>
              <a href="#hackathons" className="text-gray-700 dark:text-gray-200 py-2 hover:text-skill-purple dark:hover:text-skill-purple-light">
                Hackathons
              </a>
              <a href="#success-stories" className="text-gray-700 dark:text-gray-200 py-2 hover:text-skill-purple dark:hover:text-skill-purple-light">
                Success Stories
              </a>
              <a href="#corporate" className="text-gray-700 dark:text-gray-200 py-2 hover:text-skill-purple dark:hover:text-skill-purple-light">
                Corporate Training
              </a>
              <Button className="button-gradient w-full mt-2">Sign In</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
