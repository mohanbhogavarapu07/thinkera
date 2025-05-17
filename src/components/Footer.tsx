import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-12 shadow-inner">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-12 w-12 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TE</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                ThinkEra
              </span>
            </div>
            <p className="text-gray-400">
              Empowering students and professionals with cutting-edge technology skills for the future workplace.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:bg-blue-600 transition-colors p-2 bg-blue-500 rounded-full">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="text-white hover:bg-sky-500 transition-colors p-2 bg-sky-400 rounded-full">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="text-white hover:bg-pink-600 transition-colors p-2 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="text-white hover:bg-blue-700 transition-colors p-2 bg-blue-600 rounded-full">
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-brand-purple rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/hackathons" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-brand-purple rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Hackathons
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-brand-purple rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-brand-purple rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-brand-purple rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPinIcon size={20} className="text-brand-purple mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Tech Avenue, Innovation District, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon size={20} className="text-brand-purple flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon size={20} className="text-brand-purple flex-shrink-0" />
                <a href="mailto:info@thinkera.edu" className="text-gray-400 hover:text-white transition-colors">info@thinkera.edu</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates on courses, hackathons, and tech trends.</p>
            <div className="flex items-stretch">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-purple w-full" 
              />
              <button className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-6 py-2 rounded-r-md hover:opacity-90 transition-opacity flex items-center whitespace-nowrap">
                <MailIcon className="mr-2" size={18} />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ThinkEra. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
