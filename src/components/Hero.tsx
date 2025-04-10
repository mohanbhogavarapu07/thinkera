
import React from "react";
import { ArrowRight, Users, Award, BarChart } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[85vh] pt-20 flex flex-col justify-center relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-skill-purple/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-skill-blue/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Forge Your Future with <span className="hero-gradient-text">Next-Gen</span> Tech Skills
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Industry-recognized certifications and exclusive hackathons designed for engineering students and corporate professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#courses" className="button-gradient inline-flex items-center justify-center">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#corporate" className="button-outline inline-flex items-center justify-center">
                Corporate Solutions
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-skill-purple mr-2" />
                <span className="text-gray-700 dark:text-gray-200">
                  <span className="font-semibold">12,000+</span> Students Trained
                </span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-skill-purple mr-2" />
                <span className="text-gray-700 dark:text-gray-200">
                  <span className="font-semibold">1,200+</span> Placements
                </span>
              </div>
              <div className="flex items-center">
                <BarChart className="h-5 w-5 text-skill-purple mr-2" />
                <span className="text-gray-700 dark:text-gray-200">
                  <span className="font-semibold">98%</span> Success Rate
                </span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block md:w-2/5 relative">
            <div className="absolute top-10 right-10 w-64 h-64 bg-skill-purple-light/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="relative z-10">
              <div className="w-full h-full p-4">
                <div className="glass-card rounded-2xl shadow-lg p-6 animate-fade-in animate-delay-200">
                  <h3 className="font-semibold text-xl mb-4">Next Cohort Starting</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white dark:bg-skill-dark/80 rounded-lg p-3 text-center">
                      <div className="text-3xl font-bold text-skill-purple">15</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Days</div>
                    </div>
                    <div className="bg-white dark:bg-skill-dark/80 rounded-lg p-3 text-center">
                      <div className="text-3xl font-bold text-skill-purple">08</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Hours</div>
                    </div>
                  </div>
                  <a href="#enroll" className="button-gradient w-full flex justify-center">
                    Reserve Your Spot
                  </a>
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
