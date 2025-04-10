
import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-skill-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-poppins font-bold text-xl hero-gradient-text mb-4">
              SkillForge
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
              Transforming engineering education through industry-relevant certifications and practical skill development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-skill-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-skill-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-skill-purple transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-skill-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
                  Browse Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
                  Upcoming Hackathons
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
                  Placement Records
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
                  Corporate Training
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Top Certifications</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
                  ServiceNow Administration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
                  Salesforce Developer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
                  AWS Solutions Architect
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
                  AI/ML Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
                  Full Stack Development
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-skill-purple mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Tech Park, Sector 62, Noida, Uttar Pradesh 201309
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-skill-purple mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-skill-purple mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  contact@skillforge.edu
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 SkillForge. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-skill-purple dark:hover:text-skill-purple-light transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
