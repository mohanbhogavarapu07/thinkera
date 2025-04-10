
import React from "react";
import { Calendar, Trophy, Users, ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HackathonCardProps {
  title: string;
  date: string;
  participants: number;
  prizes: string;
  status: "upcoming" | "live" | "ended";
  companyLogo?: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  title,
  date,
  participants,
  prizes,
  status,
  companyLogo,
}) => {
  const statusClasses = {
    upcoming: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    live: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    ended: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  };

  return (
    <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md p-6 card-hover">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Calendar className="h-4 w-4 mr-2 text-skill-purple" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Users className="h-4 w-4 mr-2 text-skill-purple" />
          <span>{participants} Participants</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Trophy className="h-4 w-4 mr-2 text-skill-purple" />
          <span>{prizes}</span>
        </div>
      </div>
      
      {companyLogo && (
        <div className="flex items-center mb-4">
          <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">Sponsored by:</span>
          <img src={companyLogo} alt="Company logo" className="h-6" />
        </div>
      )}
      
      <Button className="w-full bg-skill-purple hover:bg-skill-purple-dark text-white">
        {status === "live" ? "Join Now" : status === "upcoming" ? "Register" : "View Results"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

const HackathonSection = () => {
  return (
    <section id="hackathons" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="hero-gradient-text">Hackathons</span> & Challenges
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">
              Showcase your skills, build your portfolio, and win exciting prizes while connecting with top companies.
            </p>
          </div>
          <a href="#all-hackathons" className="button-outline mt-6 md:mt-0">
            View All Hackathons
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HackathonCard
            title="AI Innovation Challenge"
            date="May 15 - June 2, 2025"
            participants={250}
            prizes="$5,000 + Internship Opportunities"
            status="upcoming"
            companyLogo="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=32&q=80"
          />
          <HackathonCard
            title="ServiceNow Solutions Hackathon"
            date="April 20 - May 5, 2025"
            participants={180}
            prizes="$3,000 + Placement Interviews"
            status="live"
          />
          <HackathonCard
            title="Web3 Development Contest"
            date="March 1 - March 15, 2025"
            participants={320}
            prizes="$4,500 + Mentorship Program"
            status="ended"
            companyLogo="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=32&q=80"
          />
        </div>
        
        <div className="mt-16 bg-card-gradient rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-3">
                Host a Corporate Hackathon
              </h3>
              <p className="max-w-md opacity-90">
                Connect with top technical talent through customized hackathons for your organization's specific needs.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-white text-skill-purple hover:bg-gray-100">
                Learn More
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
