import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, Trophy, Users, Clock, 
  ChevronRight, ChevronDown, ChevronUp,
  MapPin, Monitor, Award, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { leaderboardData } from './Leadership';

const Hackathons = () => {
  const upcomingHackathons = [
    {
      id: 1,
      title: "AI for Good Hackathon",
      date: "April 15-17, 2025",
      description: "Use artificial intelligence to create solutions for social impact and sustainability.",
      location: "Online",
      mode: "Virtual",
      duration: "48 Hours",
      registration: "Opening Soon",
      prizes: ["₹1,00,000", "₹50,000", "₹25,000"],
      sponsors: ["Drehill"]
    }
  ];

  const pastHackathons = [
  {
    id: 1,
      title: "ServiceNow Innovation Challenge",
      date: "January 10-12, 2025",
      winners: ["Team TechStar (IIT Delhi)", "NowNinjas (BITS Pilani)", "ServiceMasters (VIT)"],
      participants: 500,
      placements: 15
  },
  {
    id: 2,
      title: "ServiceNow App Builder Contest",
      date: "November 5-7, 2024",
      winners: ["CloudForce (IIT Bombay)", "SalesGurus (NIT Trichy)", "ForceField (IIIT Hyderabad)"],
      participants: 450,
      placements: 12
  },
  {
    id: 3,
      title: "ServiceNow Automation Challenge",
      date: "September 15-17, 2024",
      winners: ["Pipeline Pros (DTU)", "ContainerKings (IIT Kanpur)", "GitMasters (COEP)"],
      participants: 350,
      placements: 8
    }
  ];

  const placementPartners = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
    { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Banner */}
        <section className="py-16 bg-gradient-to-r from-thinkera-purple to-thinkera-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hackathons & Placements</h1>
            <p className="text-white text-xl max-w-2xl mx-auto">
              Showcase your skills, solve real-world problems, and get placed at top tech companies.
            </p>
          </div>
        </section>
        
        {/* Upcoming Hackathons */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-thinkera-dark dark:text-white mb-4">Upcoming Hackathons</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Register for our upcoming hackathons and get a chance to win exciting prizes and placement opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingHackathons.map((hackathon) => (
                <Card key={hackathon.id} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="inline-flex items-center px-3 py-1 bg-thinkera-purple/10 dark:bg-thinkera-purple/20 rounded-full text-thinkera-purple dark:text-thinkera-purple-light font-medium text-sm">
                        <Calendar size={16} className="mr-2" />
                        {hackathon.date}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        hackathon.registration === 'Open' 
                          ? 'bg-thinkera-blue/10 text-thinkera-blue dark:bg-thinkera-blue/20 dark:text-thinkera-blue-light' 
                          : 'bg-thinkera-purple/10 text-thinkera-purple dark:bg-thinkera-purple/20 dark:text-thinkera-purple-light'
                      }`}>
                        {hackathon.registration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-thinkera-dark dark:text-white mb-3">{hackathon.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{hackathon.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <MapPin size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">{hackathon.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Monitor size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">{hackathon.mode}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">{hackathon.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">Team of 2-4</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-thinkera-dark dark:text-white mb-2">Prizes</h4>
                      <div className="flex space-x-4">
                        {hackathon.prizes.map((prize, index) => (
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
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-thinkera-dark dark:text-white mb-2">Sponsored by</h4>
                      <div className="flex space-x-4">
                        {hackathon.sponsors.map((sponsor, index) => (
                          <span key={index} className="text-gray-600 dark:text-gray-300">{sponsor}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button className="w-full bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple-dark hover:to-thinkera-blue-dark text-white">
                        {hackathon.registration === 'Open' ? 'Register Now' : 'Get Notified'}
                        <ChevronRight size={16} className="ml-1" />
                </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leaderboard */}
        <section className="py-16 bg-gray-50 dark:bg-thinkera-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-thinkera-dark dark:text-white mb-4">Current Leaderboard</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Top performing teams from our ongoing Cloud Innovation Challenge.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg">Full Rankings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Team
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        College
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Badges
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((participant) => (
                      <tr key={participant.id} className={`${
                        participant.rank === 1 ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                        participant.rank === 2 ? 'bg-gray-100 dark:bg-gray-800/30' :
                        participant.rank === 3 ? 'bg-orange-100 dark:bg-orange-900/30' :
                        'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center">
                            {participant.rank === 1 && (
                              <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                            )}
                            {participant.rank === 2 && (
                              <Trophy className="w-5 h-5 text-gray-400 mr-2" />
                            )}
                            {participant.rank === 3 && (
                              <Trophy className="w-5 h-5 text-orange-500 mr-2" />
                            )}
                            {participant.rank}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img 
                              src={participant.avatar} 
                              alt={participant.name} 
                              className="h-8 w-8 rounded-full mr-3 object-cover"
                            />
                            <span className="font-medium">{participant.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-gray-600 dark:text-gray-300">{participant.college}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-2">
                            {participant.badges.map((badge, index) => (
                              <Badge key={index} className={
                                participant.rank === 1 ? 'bg-thinkera-purple hover:bg-thinkera-purple/90 text-white' :
                                participant.rank === 2 ? 'bg-thinkera-blue hover:bg-thinkera-blue/90 text-white' :
                                participant.rank === 3 ? 'bg-thinkera-indigo hover:bg-thinkera-indigo/90 text-white' :
                                'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                              }>
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`font-semibold ${
                            participant.rank === 1 ? 'text-thinkera-purple dark:text-thinkera-purple-light' :
                            participant.rank === 2 ? 'text-thinkera-blue dark:text-thinkera-blue-light' :
                            participant.rank === 3 ? 'text-thinkera-indigo dark:text-thinkera-indigo-light' :
                            'text-gray-700 dark:text-gray-300'
                          }`}>
                            {participant.score}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        {/* Past Hackathons */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-thinkera-dark dark:text-white mb-4">Past Hackathons</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Check out the results from our previous hackathons and the teams that secured placements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastHackathons.map((hackathon) => (
                <Card key={hackathon.id} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Calendar size={18} className="text-thinkera-purple dark:text-thinkera-purple-light mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">{hackathon.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-thinkera-dark dark:text-white mb-4">{hackathon.title}</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Winners:</h4>
                      <ol className="space-y-1">
                        {hackathon.winners.map((winner, index) => (
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
                    
                    <div className="mt-auto space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Participants:</span>
                        <span className="font-medium text-thinkera-dark dark:text-white">{hackathon.participants}+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Placements:</span>
                        <span className="font-medium text-thinkera-purple dark:text-thinkera-purple-light">{hackathon.placements} students</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Placement Partners */}
        <section className="py-16 bg-gray-50 dark:bg-thinkera-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-thinkera-dark dark:text-white mb-4">Placement Partners</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Top companies that hire talent directly through our hackathons and training programs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {placementPartners.map((partner) => (
                <div key={partner.name} className="bg-white dark:bg-thinkera-dark/50 p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-10 max-w-[120px] object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/120x40?text=" + partner.name;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-thinkera-dark dark:text-white mb-4">Success Stories</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Meet some of our students who secured placements through our hackathons.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mx-auto w-20 h-20 bg-thinkera-purple/10 dark:bg-thinkera-purple/20 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold text-thinkera-dark dark:text-white text-center mb-2">Rahul Patel</h3>
                  <div className="flex items-center justify-center mb-4">
                    <Award size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-1" />
                    <span className="text-thinkera-purple dark:text-thinkera-purple-light">Placed at Microsoft</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    "Participating in the DevOps Automation Challenge helped me develop practical skills that impressed recruiters. I received an offer from Microsoft within weeks!"
                  </p>
                  <div className="mt-auto text-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">DevOps Automation Challenge 2024</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mx-auto w-20 h-20 bg-thinkera-purple/10 dark:bg-thinkera-purple/20 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold text-thinkera-dark dark:text-white text-center mb-2">Priya Sharma</h3>
                  <div className="flex items-center justify-center mb-4">
                    <Award size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-1" />
                    <span className="text-thinkera-purple dark:text-thinkera-purple-light">Placed at Infosys</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    "The ServiceNow Innovation Challenge was my gateway to a career in ITSM. The training and mentorship I received helped me stand out during interviews."
                  </p>
                  <div className="mt-auto text-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">ServiceNow Innovation Challenge 2025</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mx-auto w-20 h-20 bg-thinkera-purple/10 dark:bg-thinkera-purple/20 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold text-thinkera-dark dark:text-white text-center mb-2">Aditya Verma</h3>
                  <div className="flex items-center justify-center mb-4">
                    <Award size={16} className="text-thinkera-purple dark:text-thinkera-purple-light mr-1" />
                    <span className="text-thinkera-purple dark:text-thinkera-purple-light">Placed at Amazon</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    "Being part of the winning team in the Cloud Innovation Challenge was a life-changing experience. The exposure to real-world problems prepared me for my role at Amazon."
                  </p>
                  <div className="mt-auto text-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Cloud Innovation Challenge 2024</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-thinkera-purple to-thinkera-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Showcase Your Skills?</h2>
            <p className="text-white text-opacity-90 text-lg max-w-2xl mx-auto mb-8">
              Join our upcoming hackathons and take the first step towards an exciting tech career with top companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/hackathons">
                <Button className="bg-white text-thinkera-purple hover:bg-opacity-90 text-base px-8 py-6">
                  Register for Hackathon
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-thinkera-purple text-base px-8 py-6">
                  Explore Courses <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hackathons;