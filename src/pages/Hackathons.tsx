
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Trophy, Users, ArrowRight, Code, ExternalLink, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface HackathonCardProps {
  title: string;
  date: string;
  participants: number;
  prizes: string;
  status: "upcoming" | "live" | "ended";
  companyLogo?: string;
  tags?: string[];
  description?: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  title,
  date,
  participants,
  prizes,
  status,
  companyLogo,
  tags,
  description
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
      
      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
      )}
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
      )}
      
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

const hackathonsData = [
  {
    id: 1,
    title: "AI Innovation Challenge",
    description: "Build innovative AI solutions for real-world problems in healthcare, finance, or education.",
    date: "May 15 - June 2, 2025",
    participants: 250,
    prizes: "$5,000 + Internship Opportunities",
    status: "upcoming" as "upcoming",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=32&q=80",
    tags: ["AI", "Machine Learning", "Computer Vision"]
  },
  {
    id: 2,
    title: "ServiceNow Solutions Hackathon",
    description: "Develop innovative ServiceNow applications and workflows to transform business processes.",
    date: "April 20 - May 5, 2025",
    participants: 180,
    prizes: "$3,000 + Placement Interviews",
    status: "live" as "live",
    tags: ["ServiceNow", "Workflow Automation", "Enterprise Apps"]
  },
  {
    id: 3,
    title: "Web3 Development Contest",
    description: "Create decentralized applications leveraging blockchain technology and smart contracts.",
    date: "March 1 - March 15, 2025",
    participants: 320,
    prizes: "$4,500 + Mentorship Program",
    status: "ended" as "ended",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=32&q=80",
    tags: ["Blockchain", "Ethereum", "Smart Contracts"]
  },
  {
    id: 4,
    title: "Cloud Infrastructure Challenge",
    description: "Design and implement cloud-native solutions with focus on scalability and resilience.",
    date: "June 10 - June 25, 2025",
    participants: 150,
    prizes: "$3,500 + Cloud Certification Vouchers",
    status: "upcoming" as "upcoming",
    tags: ["AWS", "Azure", "Kubernetes", "Docker"]
  },
  {
    id: 5,
    title: "FinTech Innovation Hackathon",
    description: "Develop innovative financial technology solutions for modern banking and investment challenges.",
    date: "May 5 - May 20, 2025",
    participants: 200,
    prizes: "$4,000 + Industry Mentorship",
    status: "upcoming" as "upcoming",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=32&q=80",
    tags: ["Finance", "Banking", "RegTech"]
  },
  {
    id: 6,
    title: "DevOps Pipeline Competition",
    description: "Build efficient CI/CD pipelines and infrastructure as code solutions for enterprise applications.",
    date: "February 15 - March 1, 2025",
    participants: 120,
    prizes: "$2,500 + DevOps Certification",
    status: "ended" as "ended",
    tags: ["DevOps", "CI/CD", "Infrastructure as Code"]
  }
];

const Hackathons = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredHackathons = hackathonsData.filter(hackathon => {
    if (activeTab === "all") return true;
    return hackathon.status === activeTab;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-skill-purple/90 to-blue-600/90 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hackathons & Challenges</h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">
              Showcase your skills, build your portfolio, and win exciting prizes while connecting with top companies.
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger 
                    value="all"
                    onClick={() => setActiveTab("all")}
                  >
                    All Hackathons
                  </TabsTrigger>
                  <TabsTrigger 
                    value="upcoming"
                    onClick={() => setActiveTab("upcoming")}
                  >
                    Upcoming
                  </TabsTrigger>
                  <TabsTrigger 
                    value="live"
                    onClick={() => setActiveTab("live")}
                  >
                    Live Now
                  </TabsTrigger>
                  <TabsTrigger 
                    value="ended"
                    onClick={() => setActiveTab("ended")}
                  >
                    Past Hackathons
                  </TabsTrigger>
                </TabsList>
                
                <Button className="bg-skill-purple text-white hover:bg-skill-purple-dark hidden md:flex">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredHackathons.map((hackathon) => (
                    <HackathonCard
                      key={hackathon.id}
                      title={hackathon.title}
                      description={hackathon.description}
                      date={hackathon.date}
                      participants={hackathon.participants}
                      prizes={hackathon.prizes}
                      status={hackathon.status}
                      companyLogo={hackathon.companyLogo}
                      tags={hackathon.tags}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="upcoming">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredHackathons.map((hackathon) => (
                    <HackathonCard
                      key={hackathon.id}
                      title={hackathon.title}
                      description={hackathon.description}
                      date={hackathon.date}
                      participants={hackathon.participants}
                      prizes={hackathon.prizes}
                      status={hackathon.status}
                      companyLogo={hackathon.companyLogo}
                      tags={hackathon.tags}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="live">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredHackathons.map((hackathon) => (
                    <HackathonCard
                      key={hackathon.id}
                      title={hackathon.title}
                      description={hackathon.description}
                      date={hackathon.date}
                      participants={hackathon.participants}
                      prizes={hackathon.prizes}
                      status={hackathon.status}
                      companyLogo={hackathon.companyLogo}
                      tags={hackathon.tags}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="ended">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredHackathons.map((hackathon) => (
                    <HackathonCard
                      key={hackathon.id}
                      title={hackathon.title}
                      description={hackathon.description}
                      date={hackathon.date}
                      participants={hackathon.participants}
                      prizes={hackathon.prizes}
                      status={hackathon.status}
                      companyLogo={hackathon.companyLogo}
                      tags={hackathon.tags}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-16 bg-white dark:bg-skill-dark/90 rounded-xl shadow-md p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-3">Upcoming Hackathon Schedule</h3>
                <p className="text-gray-600 dark:text-gray-300">Mark your calendar for these exciting events</p>
              </div>
              
              <div className="space-y-6">
                {hackathonsData
                  .filter(h => h.status === "upcoming")
                  .map((hackathon) => (
                    <div key={hackathon.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex-1 mb-4 md:mb-0">
                        <h4 className="font-medium text-lg mb-1">{hackathon.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          {hackathon.date}
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                        <Button variant="outline" className="text-skill-purple border-skill-purple">
                          <Clock className="mr-2 h-4 w-4" />
                          Set Reminder
                        </Button>
                        <Button className="bg-skill-purple text-white">
                          Register Now
                        </Button>
                      </div>
                    </div>
                  ))
                }
              </div>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Hackathons;
