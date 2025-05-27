import React from "react";
import { ArrowRight, Users, Award, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[85vh] pt-20 flex flex-col justify-center relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-skill-purple/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-skill-blue/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium">
                Premium Tech Training
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Master In-Demand Tech Skills with <span className="hero-gradient-text">ThinkEra</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Elevate your tech career with expert-led training in ServiceNow, Salesforce, AI, ML, Cloud, and more.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-gradient">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Link to="/hackathons" className="flex items-center">
                  Join Hackathons 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div>
                <span className="block text-3xl font-bold">20+</span>
                <span className="text-sm text-muted-foreground">Tech Stacks</span>
              </div>
              <div>
                <span className="block text-3xl font-bold">500+</span>
                <span className="text-sm text-muted-foreground">Placements</span>
              </div>
              <div>
                <span className="block text-3xl font-bold">30+</span>
                <span className="text-sm text-muted-foreground">Partners</span>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-2xl">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[100px] dark:bg-indigo-500/10" />
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="glass-card dark:glass-card-dark rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                      <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                      <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                      <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                      <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                      <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg">ServiceNow</h3>
                  <p className="text-sm text-muted-foreground">Master ITSM & workflow automation</p>
                </div>
                
                <div className="glass-card dark:glass-card-dark rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v8"></path>
                      <path d="m16 6-4 4-4-4"></path>
                      <rect width="20" height="8" x="2" y="14" rx="2"></rect>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg">Cloud Computing</h3>
                  <p className="text-sm text-muted-foreground">AWS, Azure & Google Cloud mastery</p>
                </div>
              </div>
              
              <div className="space-y-6 mt-12">
                <div className="glass-card dark:glass-card-dark rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="h-10 w-10 rounded-full bg-coral-100 dark:bg-coral-900/40 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                      <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg">Salesforce</h3>
                  <p className="text-sm text-muted-foreground">CRM & app development expertise</p>
                </div>
                
                <div className="glass-card dark:glass-card-dark rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="h-10 w-10 rounded-full bg-lime-100 dark:bg-lime-900/40 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lime-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a5 5 0 0 0-5 5v14a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z"></path>
                      <path d="M8 16h8"></path>
                      <path d="M8 20h8"></path>
                      <path d="M12 12V4"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg">AI & ML</h3>
                  <p className="text-sm text-muted-foreground">Deep learning & neural networks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
