import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, TrendingUp, BarChart, Award,
  CheckCircle, Calendar, Clock, User,
  FileText, Send
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Corporate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Banner */}
        <section className="py-20 bg-gradient-to-r from-skill-purple to-skill-blue text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <div className="inline-flex items-center px-4 py-1.5 bg-white/10 rounded-full text-white font-medium text-sm mb-6">
                    <Users size={16} className="mr-2" />
                    For Businesses & Teams
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Empower Your Workforce with Cutting-Edge Tech Skills
                  </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl">
                    Custom training programs designed to upskill your teams in high-demand technologies, improving productivity and driving innovation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="#inquiry-form">
                      <Button className="bg-white text-skill-purple hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                        Request a Consultation
                      </Button>
                    </Link>
                    <Link to="#programs">
                      <Button className="bg-white text-skill-purple hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                        Explore Programs
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 bg-white rounded-2xl opacity-5 transform rotate-6"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Corporate training" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Business Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                ROI-Focused Training
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Benefits for Your Business
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our corporate training programs deliver measurable impact on your team's performance and your business outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="h-full transition-all duration-200 hover:shadow-md border border-gray-100 rounded-xl overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-skill-purple/10 text-skill-purple flex items-center justify-center mb-4">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Productivity</h3>
                  <p className="text-gray-600">
                    Teams trained in the latest technologies complete projects faster and with higher quality, reducing development cycles by up to 30%.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full transition-all duration-200 hover:shadow-md border border-gray-100 rounded-xl overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                    <BarChart size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Efficiency</h3>
                  <p className="text-gray-600">
                    Develop in-house expertise instead of outsourcing, reducing dependency on external consultants and lowering long-term costs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full transition-all duration-200 hover:shadow-md border border-gray-100 rounded-xl overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Talent Retention</h3>
                  <p className="text-gray-600">
                    Investing in employee development improves satisfaction and retention, with our partner companies reporting 25% lower turnover rates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Training Programs */}
        <section id="programs" className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-skill-purple/10 rounded-full text-skill-purple font-medium text-sm mb-4">
                Customized Solutions
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Corporate Training Programs
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Flexible training options designed to fit your organization's specific needs and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-skill-purple/10 rounded-full text-skill-purple font-medium text-sm">
                      Technology Upskilling
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Technology-Specific Training</h3>
                  <p className="text-gray-600 mb-6">
                    Targeted training in specific technologies like ServiceNow, Salesforce, AWS, Azure, or DevOps practices tailored to your team's current skill level.
                  </p>
                  
                  <div className="mb-6 space-y-2">
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Instructor-led workshops with hands-on labs</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Custom curriculum based on your specific use cases</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Pre and post-training assessments to measure improvement</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Certification preparation and exam vouchers</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                    <div className="flex items-center">
                      <Calendar size={16} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">2-4 week duration</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">10-30 participants</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 rounded-full text-blue-500 font-medium text-sm">
                      Digital Transformation
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Enterprise Transformation</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive programs designed to support your organization's digital transformation initiatives with a focus on modern technologies and methodologies.
                  </p>
                  
                  <div className="mb-6 space-y-2">
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Executive workshops and technical training tracks</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Change management and adoption strategy</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Pilot project implementation with mentorship</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Long-term roadmap development</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                    <div className="flex items-center">
                      <Calendar size={16} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">3-6 month program</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">Cross-functional teams</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-skill-purple/10 rounded-full text-skill-purple font-medium text-sm">
                      Innovation
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Innovation Bootcamps</h3>
                  <p className="text-gray-600 mb-6">
                    Intensive, hands-on programs that challenge your teams to solve real business problems using emerging technologies and innovative approaches.
                  </p>
                  
                  <div className="mb-6 space-y-2">
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-skill-purple mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Problem-definition workshops</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-skill-purple mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Rapid prototyping and iterative development</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-skill-purple mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Pitch practice and presentation skills</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-skill-purple mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Implementation planning for winning solutions</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                    <div className="flex items-center">
                      <Clock size={16} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">2-5 day intensive</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">Cross-functional teams</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-skill-purple/10 rounded-full text-skill-purple font-medium text-sm">
                      Remote Learning
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Virtual Training Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Flexible, remote-friendly training programs for distributed teams, featuring a mix of live sessions and self-paced learning.
                  </p>
                  
                  <div className="mb-6 space-y-2">
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Live instructor-led virtual sessions</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">On-demand video lessons and resources</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Interactive labs and virtual practice environments</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Team collaboration tools and challenges</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                    <div className="flex items-center">
                      <Calendar size={16} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">Flexible schedule</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">4-8 week program</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-skill-purple/10 rounded-full text-skill-purple font-medium text-sm mb-4">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Corporate Partners Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from HR leaders and CTOs about the impact of our training programs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="h-full card-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-skill-purple/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
                <CardContent className="p-8 h-full flex flex-col relative z-10">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-skill-purple/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg mb-6 flex-grow italic">
                    "The ServiceNow training program delivered by SkillSpark has transformed our IT service capabilities. Our team is now fully equipped to handle complex workflows and automation, reducing ticket resolution time by 40%."
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sarah Williams</h4>
                      <p className="text-sm text-gray-600">
                        CTO, GreenTech Solutions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="h-full card-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
                <CardContent className="p-8 h-full flex flex-col relative z-10">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg mb-6 flex-grow italic">
                    "We partnered with SkillSpark to upskill our development team in cloud technologies. The customized AWS training program was exactly what we needed, and the ROI has been exceptional with a 30% reduction in infrastructure costs."
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Rajiv Mehta</h4>
                      <p className="text-sm text-gray-600">
                        VP of Engineering, CloudNine Technologies
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Inquiry Form */}
        <section id="inquiry-form" className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="inline-block px-4 py-1.5 bg-skill-purple/10 rounded-full text-skill-purple font-medium text-sm mb-4">
                    Get Started
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Request a Consultation
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form and our corporate training team will contact you to discuss your specific needs and create a customized proposal.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Award size={20} className="text-skill-purple mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Industry-Expert Instructors</h3>
                        <p className="text-gray-600">All our trainers have 10+ years of hands-on experience in their fields</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users size={20} className="text-skill-purple mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Scalable Programs</h3>
                        <p className="text-gray-600">From small teams to enterprise-wide initiatives with thousands of employees</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FileText size={20} className="text-skill-purple mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Custom Materials</h3>
                        <p className="text-gray-600">Training materials tailored to your industry and specific use cases</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card className="h-full">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Work Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <input 
                          type="text" 
                          id="company" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                          placeholder="Acme Inc."
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="position" className="block text-gray-700 font-medium mb-2">Your Position</label>
                        <input 
                          type="text" 
                          id="position" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                          placeholder="HR Manager"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="training" className="block text-gray-700 font-medium mb-2">Training Interest</label>
                        <select 
                          id="training" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                          required
                        >
                          <option value="">Select training program</option>
                          <option value="ServiceNow">ServiceNow</option>
                          <option value="Salesforce">Salesforce</option>
                          <option value="AWS">AWS Cloud</option>
                          <option value="Azure">Microsoft Azure</option>
                          <option value="DevOps">DevOps</option>
                          <option value="AI">AI & Machine Learning</option>
                          <option value="Custom">Custom Training</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="team-size" className="block text-gray-700 font-medium mb-2">Team Size</label>
                        <select 
                          id="team-size" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                          required
                        >
                          <option value="">Select team size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501+">501+ employees</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Details</label>
                        <textarea 
                          id="message" 
                          rows={4} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                          placeholder="Tell us about your specific training needs"
                        ></textarea>
                      </div>
                      
                      <Button className="w-full bg-skill-purple hover:bg-skill-purple/90 text-white flex items-center justify-center py-6 text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                        Submit Inquiry <Send size={16} className="ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Clients */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted by Leading Companies
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join hundreds of organizations that trust SkillSpark for their technical training needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {['TechCorp', 'InnoTech', 'CloudNine', 'DataSphere', 'Nexus', 'Quantum'].map((company, i) => (
                <div key={i} className="flex items-center justify-center h-20">
                  <div className="text-gray-700 font-medium text-lg">{company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Corporate;
