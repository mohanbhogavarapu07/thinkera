
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote, Star, Briefcase, Award, ArrowRight, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  companyLogo?: string;
  placement?: string;
  detailedStory?: string;
  previousRole?: string;
  salaryStat?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  image,
  quote,
  companyLogo,
  placement,
  detailedStory,
  previousRole,
  salaryStat,
}) => {
  return (
    <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md p-6 card-hover">
      <div className="flex items-start mb-4">
        <div className="relative mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-skill-purple/30" 
          />
          <Quote className="absolute -bottom-2 -right-2 h-6 w-6 bg-skill-purple text-white p-1 rounded-full" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role} {company && `at ${company}`}
          </p>
          {previousRole && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Previously: {previousRole}
            </p>
          )}
          {placement && (
            <div className="text-xs text-skill-purple mt-1">
              {placement}
            </div>
          )}
        </div>
      </div>
      
      <blockquote className="text-gray-600 dark:text-gray-300 text-sm italic mb-4">
        "{quote}"
      </blockquote>
      
      {detailedStory && (
        <div className="text-xs text-gray-600 dark:text-gray-300 mb-4">
          {detailedStory}
        </div>
      )}
      
      {salaryStat && (
        <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs p-2 rounded-md flex items-center mb-4">
          <BarChart className="h-4 w-4 mr-1" />
          {salaryStat}
        </div>
      )}
      
      {companyLogo && (
        <div className="flex justify-end">
          <img src={companyLogo} alt={`${company} logo`} className="h-6" />
        </div>
      )}
    </div>
  );
};

const testimonialData = [
  {
    id: 1,
    name: "Aisha Patel",
    role: "ServiceNow Developer",
    company: "TechSolutions Inc",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=56&h=56&q=80",
    quote: "The ServiceNow certification course gave me the exact skills employers were looking for. I received three job offers within two weeks of completing the program!",
    placement: "Placed with 92% salary increase",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=24&q=80",
    detailedStory: "After 5 years in IT support, I was looking for a career change that would leverage my technical background. The ServiceNow course provided hands-on training that prepared me perfectly for my technical interviews.",
    previousRole: "IT Support Specialist",
    salaryStat: "Salary increased from ₹6L to ₹11.5L per annum",
    category: "ServiceNow"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "AI Engineer",
    company: "DataMinds",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=56&h=56&q=80",
    quote: "The AI/ML bootcamp and hackathon experience were game-changers. The practical projects became my portfolio, which impressed my current employer.",
    placement: "Winner of 2023 AI Innovation Hackathon",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=24&q=80",
    detailedStory: "With a background in statistics but no formal programming experience, I needed to build practical skills. The bootcamp's project-based approach helped me create real-world applications that showcased my abilities.",
    previousRole: "Data Analyst",
    salaryStat: "Secured a 115% increase in compensation package",
    category: "AI/ML"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Salesforce Administrator",
    company: "CloudForce Solutions",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=56&h=56&q=80",
    quote: "The mentorship program was invaluable. My mentor helped me navigate the certification process and connected me directly with hiring managers.",
    placement: "Secured role within 30 days of certification",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=24&q=80",
    detailedStory: "As a fresh graduate with just an internship experience, breaking into Salesforce seemed daunting. The structured learning path and mentor support gave me the confidence and connections I needed.",
    previousRole: "Marketing Intern",
    salaryStat: "First job with ₹8.5L package (above industry average)",
    category: "Salesforce"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "AWS Solutions Architect",
    company: "CloudTech Systems",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=56&h=56&q=80",
    quote: "The AWS certification program provided deep technical knowledge and practical implementation experience that immediately translated to on-the-job success.",
    placement: "Hired directly through campus placement",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=24&q=80",
    detailedStory: "I had traditional IT infrastructure experience but needed to transition to cloud. The AWS program bridged that gap with hands-on labs and real-world scenarios.",
    previousRole: "System Administrator",
    salaryStat: "Role upgrade with 78% salary increase",
    category: "Cloud"
  },
  {
    id: 5,
    name: "Rahul Kapoor",
    role: "Full Stack Developer",
    company: "TechInnovate",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=56&h=56&q=80",
    quote: "The intensive full-stack bootcamp transformed me from a backend programmer to a versatile developer capable of building complete web applications.",
    placement: "Promoted within 6 months of program completion",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=24&q=80",
    detailedStory: "I was stuck in a limited-growth backend role. The bootcamp helped me expand my skills to include modern frontend frameworks and DevOps practices.",
    previousRole: "Java Developer",
    salaryStat: "Internal promotion with 45% compensation increase",
    category: "Web Development"
  },
  {
    id: 6,
    name: "Sarah Johnson",
    role: "DevOps Engineer",
    company: "AgileOps",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=56&h=56&q=80",
    quote: "The DevOps program gave me both the technical skills and the process knowledge needed to implement CI/CD pipelines and infrastructure automation.",
    placement: "Career transition completed in 4 months",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=24&q=80",
    detailedStory: "With a traditional development background, I was looking to specialize in DevOps. The program's emphasis on practical tools and collaboration methodologies was exactly what I needed.",
    previousRole: "Software Developer",
    salaryStat: "New role with 65% better compensation package",
    category: "DevOps"
  }
];

const corporateTestimonials = [
  {
    id: 1,
    name: "Vikram Mehta",
    role: "Chief Technology Officer",
    company: "GlobalTech Solutions",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=56&h=56&q=80",
    quote: "Partnering with SkillForge to upskill our IT department in ServiceNow has increased our implementation efficiency by 40% and reduced support tickets by 25%.",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=24&q=80",
    detailedStory: "We trained 35 team members through a customized ServiceNow program, resulting in faster deployment cycles and improved internal customer satisfaction.",
  },
  {
    id: 2,
    name: "Anjali Desai",
    role: "Head of Human Resources",
    company: "FinServe Corp",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=56&h=56&q=80",
    quote: "The specialized Salesforce training program has been transformative for our sales and customer service teams, enabling us to fully leverage our CRM investment.",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=24&q=80",
    detailedStory: "Through SkillForge's corporate training, we've certified over 50 employees in Salesforce, eliminating our dependency on external consultants for system management.",
  },
  {
    id: 3,
    name: "Raj Sharma",
    role: "Innovation Director",
    company: "HealthTech Innovations",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=56&h=56&q=80",
    quote: "The custom AI/ML training program has accelerated our data science capabilities, allowing us to implement predictive analytics across our healthcare solutions.",
    companyLogo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=24&q=80",
    detailedStory: "Our team of clinical researchers and developers gained practical ML skills that have directly contributed to improving our diagnostic algorithms and patient outcomes tracking.",
  }
];

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-skill-purple/90 to-blue-600/90 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">
              Our alumni have secured positions at leading tech companies and achieved remarkable career growth after completing our programs.
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="all">All Stories</TabsTrigger>
                  <TabsTrigger value="ServiceNow">ServiceNow</TabsTrigger>
                  <TabsTrigger value="Salesforce">Salesforce</TabsTrigger>
                  <TabsTrigger value="AI/ML">AI/ML</TabsTrigger>
                  <TabsTrigger value="Cloud">Cloud</TabsTrigger>
                  <TabsTrigger value="corporate">Corporate</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonialData.map((testimonial) => (
                    <Testimonial
                      key={testimonial.id}
                      name={testimonial.name}
                      role={testimonial.role}
                      company={testimonial.company}
                      image={testimonial.image}
                      quote={testimonial.quote}
                      placement={testimonial.placement}
                      companyLogo={testimonial.companyLogo}
                      detailedStory={testimonial.detailedStory}
                      previousRole={testimonial.previousRole}
                      salaryStat={testimonial.salaryStat}
                    />
                  ))}
                </div>
              </TabsContent>
              
              {["ServiceNow", "Salesforce", "AI/ML", "Cloud", "Web Development", "DevOps"].map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonialData
                      .filter(testimonial => testimonial.category === category)
                      .map((testimonial) => (
                        <Testimonial
                          key={testimonial.id}
                          name={testimonial.name}
                          role={testimonial.role}
                          company={testimonial.company}
                          image={testimonial.image}
                          quote={testimonial.quote}
                          placement={testimonial.placement}
                          companyLogo={testimonial.companyLogo}
                          detailedStory={testimonial.detailedStory}
                          previousRole={testimonial.previousRole}
                          salaryStat={testimonial.salaryStat}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
              
              <TabsContent value="corporate">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {corporateTestimonials.map((testimonial) => (
                    <Testimonial
                      key={testimonial.id}
                      name={testimonial.name}
                      role={testimonial.role}
                      company={testimonial.company}
                      image={testimonial.image}
                      quote={testimonial.quote}
                      companyLogo={testimonial.companyLogo}
                      detailedStory={testimonial.detailedStory}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-16">
              <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-2">Placement Statistics</h3>
                  <p className="text-gray-600 dark:text-gray-400">Real-time metrics from our placement cell</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-skill-purple mb-2">98%</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Placement Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-skill-purple mb-2">1,200+</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Students Placed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-skill-purple mb-2">45+</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Partner Companies</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-skill-purple mb-2">₹8.2L</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Average CTC</p>
                  </div>
                </div>
                
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-skill-dark/50 rounded-lg p-4 text-center">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-3">
                      <Award className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-1">Top Skills in Demand</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">ServiceNow, Salesforce, AWS, AI/ML</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-skill-dark/50 rounded-lg p-4 text-center">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-3">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-1">Top Hiring Companies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">IBM, Accenture, Infosys, TCS, Cognizant</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-skill-dark/50 rounded-lg p-4 text-center">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-3">
                      <Star className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-1">Average Rating</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">4.8/5 from our alumni network</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-card-gradient rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-3">
                    Ready to write your success story?
                  </h3>
                  <p className="max-w-md opacity-90">
                    Join our growing network of over 10,000 professionals who have transformed their careers through our programs.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-white text-skill-purple hover:bg-gray-100">
                    Explore Courses
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

export default SuccessStoriesPage;
