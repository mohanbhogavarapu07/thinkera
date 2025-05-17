import React from "react";
import { Calendar, Trophy, Users, Clock, MapPin, Monitor, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface HackathonCardProps {
  title: string;
  date: string;
  participants: number;
  prizes: string[];
  status: "upcoming" | "live" | "ended";
  location: string;
  mode: string;
  duration: string;
  sponsors?: string[];
  winners?: string[];
  placements?: number;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  title,
  date,
  participants,
  prizes,
  status,
  location,
  mode,
  duration,
  sponsors,
  winners,
  placements,
}) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="inline-flex items-center px-3 py-1 bg-thinkera-purple/10 dark:bg-thinkera-purple/20 rounded-full text-thinkera-purple dark:text-thinkera-purple-light font-medium text-sm">
            <Calendar size={16} className="mr-2" />
            {date}
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'live' 
              ? 'bg-thinkera-blue/10 text-thinkera-blue dark:bg-thinkera-blue/20 dark:text-thinkera-blue-light' 
              : status === 'upcoming'
              ? 'bg-thinkera-purple/10 text-thinkera-purple dark:bg-thinkera-purple/20 dark:text-thinkera-purple-light'
              : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
          }`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-thinkera-dark dark:text-white mb-3">{title}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <MapPin size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-2" />
            <span className="text-gray-700 dark:text-gray-300">{location}</span>
          </div>
          <div className="flex items-center">
            <Monitor size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-2" />
            <span className="text-gray-700 dark:text-gray-300">{mode}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-2" />
            <span className="text-gray-700 dark:text-gray-300">{duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-2" />
            <span className="text-gray-700 dark:text-gray-300">{participants}+ Participants</span>
          </div>
        </div>
        
        {winners && (
          <div className="mb-6">
            <h4 className="font-semibold text-thinkera-dark dark:text-white mb-2">Winners:</h4>
            <ol className="space-y-1">
              {winners.map((winner, index) => (
                <li key={index} className="flex items-start">
                  <span className={`mr-2 ${
                    index === 0 ? 'text-thinkera-blue dark:text-thinkera-blue-light' : 
                    index === 1 ? 'text-thinkera-purple dark:text-thinkera-purple-light' : 
                    'text-thinkera-purple-dark dark:text-thinkera-purple'
                  }`}>
                    {index + 1}.
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{winner}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
        
        <div className="mb-6">
          <h4 className="font-semibold text-thinkera-dark dark:text-white mb-2">Prizes</h4>
          <div className="flex space-x-4">
            {prizes.map((prize, index) => (
              <div key={index} className="flex flex-col items-center">
                <Trophy size={16} className={`${
                  index === 0 ? 'text-thinkera-blue dark:text-thinkera-blue-light' : 
                  index === 1 ? 'text-thinkera-purple dark:text-thinkera-purple-light' : 
                  'text-thinkera-purple-dark dark:text-thinkera-purple'
                } mb-1`} />
                <span className="text-thinkera-dark dark:text-white font-semibold">{prize}</span>
              </div>
            ))}
          </div>
        </div>
        
        {sponsors && (
          <div className="mb-6">
            <h4 className="font-semibold text-thinkera-dark dark:text-white mb-2">Sponsored by</h4>
            <div className="flex space-x-4">
              {sponsors.map((sponsor, index) => (
                <span key={index} className="text-gray-600 dark:text-gray-300">{sponsor}</span>
              ))}
            </div>
          </div>
        )}
        
        {placements && (
          <div className="mb-6">
            <h4 className="font-semibold text-thinkera-dark dark:text-white mb-2">Placements</h4>
            <div className="flex items-center">
              <Users size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-2" />
              <span className="text-gray-700 dark:text-gray-300">{placements} students placed</span>
            </div>
          </div>
        )}
        
        <div className="mt-auto">
          <Button className="w-full bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple-dark hover:to-thinkera-blue-dark text-white">
            {status === 'live' ? 'Join Now' : status === 'upcoming' ? 'Register' : 'View Results'}
            <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
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
            title="ServiceNow Innovation Challenge"
            date="January 10-12, 2025"
            participants={500}
            prizes={["₹1,00,000", "₹50,000", "₹25,000"]}
            status="ended"
            location="Online"
            mode="Virtual"
            duration="48 Hours"
            sponsors={["Drehill"]}
            winners={[
              "Team TechStar (IIT Delhi)",
              "NowNinjas (BITS Pilani)",
              "ServiceMasters (VIT)"
            ]}
            placements={15}
          />
          <HackathonCard
            title="ServiceNow App Builder Contest"
            date="November 5-7, 2024"
            participants={450}
            prizes={["₹75,000", "₹35,000", "₹15,000"]}
            status="ended"
            location="Hybrid"
            mode="Online + On-site"
            duration="72 Hours"
            sponsors={["Drehill"]}
            winners={[
              "CloudForce (IIT Bombay)",
              "SalesGurus (NIT Trichy)",
              "ForceField (IIIT Hyderabad)"
            ]}
            placements={12}
          />
          <HackathonCard
            title="ServiceNow Automation Challenge"
            date="September 15-17, 2024"
            participants={350}
            prizes={["₹90,000", "₹45,000", "₹20,000"]}
            status="ended"
            location="Online"
            mode="Virtual"
            duration="48 Hours"
            sponsors={["Drehill"]}
            winners={[
              "Pipeline Pros (DTU)",
              "ContainerKings (IIT Kanpur)",
              "GitMasters (COEP)"
            ]}
            placements={8}
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
