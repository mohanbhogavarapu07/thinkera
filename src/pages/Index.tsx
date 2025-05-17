import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import HackathonSection from "@/components/HackathonSection";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/Footer";
import { Filter, Search, BookOpen, ChevronDown, ChevronUp, Cloud, Database, Server, Code, Brain, Users, Clock, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { allCourses } from "@/pages/Courses";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const courseData = [
  {
    id: 1,
    title: 'ServiceNow Development',
    description: 'Master the ServiceNow platform and become a certified developer. Learn to create applications, workflows, and integrations.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300&q=80',
    level: 'Intermediate',
    duration: '12 weeks',
    rating: 4.8,
    certification: 'ServiceNow Certified',
    category: 'Platform'
  },
  {
    id: 2,
    title: 'Salesforce Administration',
    description: 'Learn to manage and customize Salesforce for enterprise needs. Master user management, security, and custom objects.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&h=300&q=80',
    level: 'Beginner',
    duration: '8 weeks',
    rating: 4.7,
    certification: 'Salesforce Admin',
    category: 'Platform'
  },
  {
    id: 3,
    title: 'AWS Cloud Architecture',
    description: 'Design and implement scalable systems using AWS services. Master EC2, S3, Lambda, and more.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300&q=80',
    level: 'Advanced',
    duration: '16 weeks',
    rating: 4.9,
    certification: 'AWS Certified',
    category: 'Cloud'
  },
  {
    id: 4,
    title: 'DevOps Engineering',
    description: 'Master CI/CD pipelines, containers, and infrastructure as code. Learn Docker, Kubernetes, and Jenkins.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&h=300&q=80',
    level: 'Advanced',
    duration: '14 weeks',
    rating: 4.8,
    certification: 'DevOps Professional',
    category: 'Engineering'
  },
  {
    id: 5,
    title: 'AI & Machine Learning',
    description: 'Build intelligent applications with modern AI frameworks. Master TensorFlow, PyTorch, and data science fundamentals.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&h=300&q=80',
    level: 'Intermediate',
    duration: '16 weeks',
    rating: 4.9,
    certification: 'AI/ML Professional',
    category: 'AI'
  },
  {
    id: 6,
    title: 'Corporate Innovation',
    description: 'Customized training programs for enterprises and teams. Focus on specific technologies and business outcomes.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&h=300&q=80',
    level: 'All Levels',
    duration: 'Custom',
    rating: 4.7,
    certification: 'Enterprise Solutions',
    category: 'Business'
  }
];

const corporateSection = (
  <section id="corporate" className="py-16 bg-gray-50 dark:bg-thinkera-dark">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="hero-gradient-text">Corporate</span> Training Solutions
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Customized upskilling programs designed specifically for your organization's technology needs and growth objectives.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-thinkera-dark/90 rounded-xl shadow-md p-8 card-hover">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-thinkera-purple/10 text-thinkera-purple mb-6">
            <BookOpen className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            Custom Training Programs
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Tailored curriculum developed based on your team's specific needs and technology stack requirements.
          </p>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-thinkera-purple mr-2"></div>
              Specialized curriculum development
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-thinkera-purple mr-2"></div>
              Hands-on workshops and labs
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-thinkera-purple mr-2"></div>
              Progress tracking and reporting
            </li>
          </ul>
          <Button className="w-full button-gradient">Request Details</Button>
        </div>
        
        <div className="bg-white dark:bg-thinkera-dark/90 rounded-xl shadow-md p-8 card-hover">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-thinkera-purple/10 text-thinkera-purple mb-6">
            <BookOpen className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            Enterprise Certification Tracks
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Structured training paths to prepare your workforce for industry-recognized certifications at scale.
          </p>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-thinkera-purple mr-2"></div>
              Bulk certification training
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-thinkera-purple mr-2"></div>
              Dedicated success managers
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-thinkera-purple mr-2"></div>
              Certification exam vouchers
            </li>
          </ul>
          <Button className="w-full button-gradient">Request Details</Button>
        </div>
        
        <div className="bg-white dark:bg-thinkera-dark/90 rounded-xl shadow-md p-8 card-hover">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-thinkera-purple/10 text-thinkera-purple mb-6">
            <BookOpen className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            Talent Pipeline Programs
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Create a steady stream of skilled professionals trained specifically for your organization's requirements.
          </p>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-thinkera-purple mr-2"></div>
              Pre-trained talent pool
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-thinkera-purple mr-2"></div>
              Customized hackathons
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-thinkera-purple mr-2"></div>
              Direct placement opportunities
            </li>
          </ul>
          <Button className="w-full button-gradient">Request Details</Button>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <a href="#" className="inline-flex items-center text-thinkera-purple dark:text-thinkera-purple-light hover:underline font-medium">
          View All Corporate Solutions
          <ChevronDown className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

const Index = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const location = window.location.pathname;
  
  // Get first 3 courses for the home page initially
  const featuredCourses = allCourses.slice(0, showAllCourses ? 6 : 3);
  
  const handleViewAllClick = () => {
    if (location === '/') {
      setShowAllCourses(!showAllCourses);
    } else if (location.startsWith('/courses/')) {
      // If on course details page, go back to home page courses section
      window.location.href = '/#courses';
    } else {
      // If on courses page, stay on courses page
      window.location.href = '/courses';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Courses Section */}
        <section id="courses" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Industry-Recognized <span className="hero-gradient-text">Certifications</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Gain in-demand skills and accelerate your career with our specialized certification programs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <Card key={course.id} className="h-full card-hover">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} text-white flex items-center justify-center mb-4`}>
                      <course.icon size={24} />
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="bg-brand-purple bg-opacity-10 text-brand-purple text-xs font-medium px-2.5 py-0.5 rounded">
                        {course.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
                    <div className="mt-auto pt-4 space-y-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Clock size={16} className="text-gray-500 mr-2" />
                          <span className="text-gray-700">{course.duration}</span>
                        </div>
                        {course.certification && (
                          <div className="flex items-center">
                            <Award size={16} className="text-brand-purple mr-2" />
                            <span className="text-brand-purple">Certification</span>
                          </div>
                        )}
                      </div>
                      <Link to={`/courses/${course.id}`}>
                        <Button className="w-full button-gradient">View Details <ChevronRight size={16} className="ml-1" /></Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                className="button-gradient"
                onClick={handleViewAllClick}
              >
                {location === '/' ? (
                  showAllCourses ? 'Show Less' : 'View All Courses'
                ) : location.startsWith('/courses/') ? (
                  'Back to Home Courses'
                ) : (
                  'Back to All Courses'
                )}
                {location === '/' ? (
                  showAllCourses ? (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  )
                ) : (
                  <ChevronRight className="ml-2 h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </section>
        
        <HackathonSection />
        <SuccessStories />
        {corporateSection}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
