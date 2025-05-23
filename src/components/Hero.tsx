import React from "react";
import { ArrowRight, Users, Award, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-teal-500/5 z-0" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium">
                Industry-Recognized Training
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Forge Your Future with <span className="hero-gradient-text">Next-Gen</span> Tech Skills
              </h1>
              <p className="text-xl text-muted-foreground">
                Industry-recognized certifications and exclusive hackathons designed for engineering students and corporate professionals.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="button-gradient">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Link to="/corporate" className="flex items-center">
                  Corporate Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-skill-purple mr-2" />
                <div>
                  <span className="block text-3xl font-bold">12,000+</span>
                  <span className="text-sm text-muted-foreground">Students Trained</span>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-skill-purple mr-2" />
                <div>
                  <span className="block text-3xl font-bold">1,200+</span>
                  <span className="text-sm text-muted-foreground">Placements</span>
                </div>
              </div>
              <div className="flex items-center">
                <BarChart className="h-5 w-5 text-skill-purple mr-2" />
                <div>
                  <span className="block text-3xl font-bold">98%</span>
                  <span className="text-sm text-muted-foreground">Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/30 blur-[100px] dark:bg-indigo-500/20" />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card dark:glass-card-dark rounded-2xl p-6 animate-float delay-100 shadow-lg">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                      <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                      <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                      <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                      <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                      <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                    </svg>
                  </div>
                  <h3 className="font-semibold">ServiceNow</h3>
                  <p className="text-sm text-muted-foreground">Master ITSM & workflow automation</p>
                </div>
                
                <div className="glass-card dark:glass-card-dark rounded-2xl p-6 animate-float delay-300 shadow-lg">
                  <div className="h-8 w-8 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v8"></path>
                      <path d="m16 6-4 4-4-4"></path>
                      <rect width="20" height="8" x="2" y="14" rx="2"></rect>
                    </svg>
                  </div>
                  <h3 className="font-semibold">Cloud Computing</h3>
                  <p className="text-sm text-muted-foreground">AWS, Azure & Google Cloud mastery</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-10">
                <div className="glass-card dark:glass-card-dark rounded-2xl p-6 animate-float delay-200 shadow-lg">
                  <div className="h-8 w-8 rounded-full bg-coral-100 dark:bg-coral-900/40 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-coral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                      <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold">Salesforce</h3>
                  <p className="text-sm text-muted-foreground">CRM & app development expertise</p>
                </div>
                
                <div className="glass-card dark:glass-card-dark rounded-2xl p-6 animate-float delay-400 shadow-lg">
                  <div className="h-8 w-8 rounded-full bg-lime-100 dark:bg-lime-900/40 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-lime-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a5 5 0 0 0-5 5v14a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z"></path>
                      <path d="M8 16h8"></path>
                      <path d="M8 20h8"></path>
                      <path d="M12 12V4"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold">AI & ML</h3>
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
