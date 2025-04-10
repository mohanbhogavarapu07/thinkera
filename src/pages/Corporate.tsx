
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Building, Users, ArrowRight, CheckCircle2, Phone, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Corporate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-skill-purple/90 to-blue-600/90 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Training Solutions</h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">
              Customized upskilling programs designed specifically for your organization's technology needs and growth objectives.
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
                    Flexible delivery options (online/onsite)
                  </li>
                </ul>
                <Button className="w-full button-gradient">Request Details</Button>
              </div>
              
              <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md p-8 card-hover">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-skill-purple/10 text-skill-purple mb-6">
                  <Building className="h-8 w-8" />
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
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
                    Custom learning portals
                  </li>
                </ul>
                <Button className="w-full button-gradient">Request Details</Button>
              </div>
              
              <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md p-8 card-hover">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-skill-purple/10 text-skill-purple mb-6">
                  <Users className="h-8 w-8" />
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
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-skill-purple mr-2"></div>
                    Employer branding integration
                  </li>
                </ul>
                <Button className="w-full button-gradient">Request Details</Button>
              </div>
            </div>
            
            <div className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-3">
                  Why Choose <span className="hero-gradient-text">SkillForge</span> for Corporate Training?
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Our enterprise solutions are designed to deliver measurable results and ROI for your organization.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-skill-dark/90 p-6 rounded-lg shadow-sm">
                  <div className="text-skill-purple mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Industry-Relevant Curriculum</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Programs developed in collaboration with industry leaders to ensure relevance to current market needs.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-skill-dark/90 p-6 rounded-lg shadow-sm">
                  <div className="text-skill-purple mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Experienced Instructors</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Our trainers average 12+ years of industry experience in their respective technology domains.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-skill-dark/90 p-6 rounded-lg shadow-sm">
                  <div className="text-skill-purple mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Flexible Delivery Models</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Choose from virtual instructor-led, on-site, or blended learning approaches to fit your organization's needs.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-skill-dark/90 p-6 rounded-lg shadow-sm">
                  <div className="text-skill-purple mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Measurable Outcomes</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Comprehensive assessment and reporting systems to track learning progress and ROI.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl font-semibold mb-6">Contact Our Enterprise Team</h3>
                    
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                          <Input id="name" placeholder="Jane Doe" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                          <Input id="email" type="email" placeholder="jane.doe@company.com" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                          <Input id="company" placeholder="Acme Corporation" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="position" className="text-sm font-medium">Job Title</label>
                          <Input id="position" placeholder="HR Manager" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="requirements" className="text-sm font-medium">Training Requirements</label>
                        <Textarea id="requirements" placeholder="Please describe your organization's training needs..." className="min-h-[120px]" />
                      </div>
                      
                      <div className="pt-2">
                        <Button className="w-full button-gradient">Submit Inquiry</Button>
                      </div>
                    </form>
                  </div>
                  
                  <div className="bg-gradient-to-br from-skill-purple to-blue-600 text-white p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 mr-4 mt-1" />
                        <div>
                          <p className="font-medium">Call Us</p>
                          <p className="text-white/80">+91 1234 567 890</p>
                          <p className="text-white/80">Monday to Friday, 9am to 6pm IST</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 mr-4 mt-1" />
                        <div>
                          <p className="font-medium">Email Us</p>
                          <p className="text-white/80">corporate@skillforge.edu.in</p>
                          <p className="text-white/80">We'll respond within 24 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <FileText className="h-5 w-5 mr-4 mt-1" />
                        <div>
                          <p className="font-medium">Download Resources</p>
                          <div className="flex flex-col space-y-2 mt-2">
                            <a href="#" className="text-white/80 hover:text-white underline flex items-center">
                              <ArrowRight className="h-3 w-3 mr-1" />
                              Corporate Training Brochure
                            </a>
                            <a href="#" className="text-white/80 hover:text-white underline flex items-center">
                              <ArrowRight className="h-3 w-3 mr-1" />
                              Case Studies
                            </a>
                            <a href="#" className="text-white/80 hover:text-white underline flex items-center">
                              <ArrowRight className="h-3 w-3 mr-1" />
                              Certification Pathways
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-3">
                  Trusted by Leading Organizations
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Join hundreds of enterprises who have partnered with us for their upskilling needs.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center opacity-70">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=100&h=50&q=80" 
                      alt={`Company logo ${i+1}`} 
                      className="h-12 object-contain" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Corporate;
