import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import HackathonSection from "@/components/HackathonSection";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/Footer";
import { Filter, Search, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const courseData = [
  {
    id: 1,
    title: "ServiceNow Administration & Development",
    description: "Master ServiceNow platform administration, scripting, and application development with hands-on projects.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300&q=80",
    level: "Intermediate",
    duration: "12 Weeks",
    rating: 4.8,
    certification: "ServiceNow Certified",
    category: "Platform Development"
  },
  {
    id: 2,
    title: "Salesforce Developer Certification",
    description: "Comprehensive training on Salesforce development, Apex programming, and Lightning components.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&h=300&q=80",
    level: "Advanced",
    duration: "16 Weeks",
    rating: 4.7,
    certification: "Salesforce Developer I",
    category: "CRM"
  },
  {
    id: 3,
    title: "AI/ML Engineering Bootcamp",
    description: "In-depth training on machine learning algorithms, deep learning, and AI application development.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300&q=80",
    level: "Advanced",
    duration: "24 Weeks",
    rating: 4.9,
    certification: "AI/ML Professional",
    category: "Artificial Intelligence"
  },
  {
    id: 4,
    title: "AWS Solutions Architect",
    description: "Design and deploy scalable, highly available systems on Amazon Web Services cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&h=300&q=80",
    level: "Intermediate",
    duration: "14 Weeks",
    rating: 4.6,
    certification: "AWS Certified",
    category: "Cloud Computing"
  },
  {
    id: 5,
    title: "Full Stack Web Development",
    description: "End-to-end web development with React, Node.js, and modern frameworks for building scalable applications.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&h=300&q=80",
    level: "Beginner to Intermediate",
    duration: "20 Weeks",
    rating: 4.7,
    certification: "Full Stack Developer",
    category: "Web Development"
  },
  {
    id: 6,
    title: "DevOps Engineering & CI/CD",
    description: "Master DevOps practices, CI/CD pipelines, containerization, and infrastructure as code.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&h=300&q=80",
    level: "Intermediate",
    duration: "16 Weeks",
    rating: 4.5,
    certification: "DevOps Professional",
    category: "DevOps"
  }
];

const corporateSection = (
  <section id="corporate" className="py-16 bg-gray-50 dark:bg-skill-dark">
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
        <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md p-8 card-hover">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-skill-purple/10 text-skill-purple mb-6">
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
              <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
              Specialized curriculum development
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
              Hands-on workshops and labs
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
              Progress tracking and reporting
            </li>
          </ul>
          <Button className="w-full button-gradient">Request Details</Button>
        </div>
        
        <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md p-8 card-hover">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-skill-purple/10 text-skill-purple mb-6">
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
              <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
              Bulk certification training
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
              Dedicated success managers
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
              Certification exam vouchers
            </li>
          </ul>
          <Button className="w-full button-gradient">Request Details</Button>
        </div>
        
        <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md p-8 card-hover">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-skill-purple/10 text-skill-purple mb-6">
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
              <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
              Pre-trained talent pool
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
              Customized hackathons
            </li>
            <li className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
              Direct placement opportunities
            </li>
          </ul>
          <Button className="w-full button-gradient">Request Details</Button>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <a href="#" className="inline-flex items-center text-skill-purple dark:text-skill-purple-light hover:underline font-medium">
          View All Corporate Solutions
          <ChevronDown className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

const Index = () => {
  const [showFilters, setShowFilters] = useState(false);
  
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
            
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 md:mb-0">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <Input
                    placeholder="Search courses..."
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                <Button 
                  variant="outline" 
                  className="inline-flex items-center"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {showFilters ? (
                    <ChevronUp className="h-4 w-4 ml-2" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-2" />
                  )}
                </Button>
              </div>
              
              <div className="flex space-x-2">
                <a href="#" className="bg-white dark:bg-skill-dark/50 border hover:bg-gray-50 dark:hover:bg-skill-dark/80 transition-colors px-4 py-2 rounded-lg text-sm">
                  All
                </a>
                <a href="#" className="bg-skill-purple text-white px-4 py-2 rounded-lg text-sm">
                  Popular
                </a>
                <a href="#" className="bg-white dark:bg-skill-dark/50 border hover:bg-gray-50 dark:hover:bg-skill-dark/80 transition-colors px-4 py-2 rounded-lg text-sm">
                  New
                </a>
              </div>
            </div>
            
            {showFilters && (
              <div className="bg-white dark:bg-skill-dark/80 p-4 rounded-lg mb-8 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Skill Level</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">Beginner</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">Intermediate</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">Advanced</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Duration</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">{"< 10 Weeks"}</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">10-20 Weeks</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">{"> 20 Weeks"}</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Certification</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">ServiceNow</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">Salesforce</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">AWS</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">AI/ML</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Tech Stack</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">JavaScript</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">Python</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">Java</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-skill-purple/10">Cloud</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button variant="ghost" className="mr-2">Reset</Button>
                  <Button className="bg-skill-purple text-white hover:bg-skill-purple-dark">Apply Filters</Button>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseData.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  level={course.level}
                  duration={course.duration}
                  rating={course.rating}
                  certification={course.certification}
                  category={course.category}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="button-gradient">
                View All Courses
                <ChevronDown className="ml-2 h-4 w-4" />
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
