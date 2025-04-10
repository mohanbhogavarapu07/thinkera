
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Filter, Search, ChevronDown, ChevronUp } from "lucide-react";
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
  },
  {
    id: 7,
    title: "Cybersecurity Specialist",
    description: "Comprehensive training on network security, ethical hacking, and security compliance frameworks.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=500&h=300&q=80",
    level: "Advanced",
    duration: "16 Weeks",
    rating: 4.8,
    certification: "Certified Security Specialist",
    category: "Cybersecurity"
  },
  {
    id: 8,
    title: "Data Engineering with Python",
    description: "Build advanced data pipelines, ETL processes, and big data architectures using modern tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=300&q=80",
    level: "Intermediate",
    duration: "14 Weeks",
    rating: 4.7,
    certification: "Data Engineering Professional",
    category: "Data Science"
  },
  {
    id: 9,
    title: "Cloud Native Architecture",
    description: "Design and implement microservices, containers, and cloud-native applications at scale.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&h=300&q=80",
    level: "Advanced",
    duration: "18 Weeks",
    rating: 4.6,
    certification: "Cloud Architect",
    category: "Cloud Computing"
  }
];

const Courses = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredCourses = courseData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = ["All", "Platform Development", "CRM", "Artificial Intelligence", "Cloud Computing", "Web Development", "DevOps", "Cybersecurity", "Data Science"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-skill-purple/90 to-blue-600/90 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industry-Recognized Certifications</h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">
              Gain in-demand skills and accelerate your career with our specialized certification programs designed for today's tech landscape.
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 md:mb-0">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <Input
                    placeholder="Search courses..."
                    className="pl-10 w-full sm:w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category ? "bg-skill-purple text-white" : ""}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            {showFilters && (
              <div className="bg-white dark:bg-skill-dark/80 p-4 rounded-lg mb-8 animate-fade-in shadow-md">
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
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
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
                ))
              ) : (
                <div className="col-span-3 text-center py-16">
                  <p className="text-xl text-gray-500">No courses found matching your criteria.</p>
                  <Button 
                    variant="link" 
                    className="mt-2 text-skill-purple"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                  >
                    Reset filters
                  </Button>
                </div>
              )}
            </div>
            
            <div className="mt-16 bg-card-gradient rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-3">
                    Need a custom training program?
                  </h3>
                  <p className="max-w-md opacity-90">
                    We can develop a tailored curriculum based on your organization's specific needs and technology requirements.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-white text-skill-purple hover:bg-gray-100">
                    Corporate Solutions
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

export default Courses;
