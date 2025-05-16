import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, Phone, Mail, Clock, 
  Send, MessageSquare, CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Banner */}
        <section className="py-24 bg-gradient-to-r from-skill-purple to-skill-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container-section relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              Have questions? Reach out to us and our team will get back to you soon.
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-20">
          <div className="container-section px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-skill-purple/10 text-skill-purple flex items-center justify-center mb-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-600">
                    123 Tech Avenue, Innovation District<br />
                    Bengaluru, Karnataka 560001<br />
                    India
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-skill-blue/10 text-skill-blue flex items-center justify-center mb-4">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-2">
                    Main: +91 (80) 4567-8901
                  </p>
                  <p className="text-gray-600 mb-2">
                    Admissions: +91 (80) 4567-8902
                  </p>
                  <p className="text-gray-600">
                    Corporate: +91 (80) 4567-8903
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-skill-teal/10 text-skill-teal flex items-center justify-center mb-4">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">
                    General: info@skillspark.edu
                  </p>
                  <p className="text-gray-600 mb-2">
                    Admissions: admissions@skillspark.edu
                  </p>
                  <p className="text-gray-600">
                    Corporate: corporate@skillspark.edu
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Map and Form */}
        <section className="py-20 bg-gray-50">
          <div className="container-section px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Map */}
              <div className="h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
                <div className="bg-gray-200 h-96 w-full rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9913815990077!2d77.59013147369847!3d12.97145001807424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1679835721625!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock size={20} className="text-gray-500 mr-2" />
                    <span className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare size={20} className="text-gray-500 mr-2" />
                    <span className="text-gray-700">WhatsApp: +91 98765 43210</span>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                {submitted ? (
                  <Card className="h-full bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-12 h-full flex flex-col items-center justify-center text-center">
                      <CheckCircle size={48} className="text-green-500 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out to us. We've received your message and will get back to you shortly.
                      </p>
                      <Button 
                        className="w-full bg-skill-purple hover:bg-skill-purple/90 text-white py-5 px-6 rounded-lg font-medium text-base shadow-md hover:shadow-lg transition-all duration-200"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="h-full bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-8 sm:p-10">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                            <input 
                              type="text" 
                              id="name" 
                              name="name" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                            <input 
                              type="tel" 
                              id="phone" 
                              name="phone" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                            <select 
                              id="subject" 
                              name="subject" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select a subject</option>
                              <option value="Course Inquiry">Course Inquiry</option>
                              <option value="Hackathon">Hackathon</option>
                              <option value="Corporate Training">Corporate Training</option>
                              <option value="Placements">Placements</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                          <textarea 
                            id="message" 
                            name="message" 
                            rows={5} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skill-purple" 
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="bg-gradient-to-r from-skill-purple to-skill-blue hover:from-skill-purple/90 hover:to-skill-blue/90 text-white flex items-center"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : (
                            <>
                              Send Message
                              <Send size={16} className="ml-2" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-skill-dark dark:text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Find quick answers to common questions about our programs and services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-skill-dark dark:text-white mb-2">How do I enroll in a course?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      You can enroll by visiting our Courses page, selecting your desired course, and clicking the "Apply Now" button. Our admissions team will contact you with further instructions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-skill-dark dark:text-white mb-2">Do you offer scholarships?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Yes, we offer merit-based scholarships for outstanding students. Additionally, we have special scholarships for women in tech and economically disadvantaged students.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-skill-dark dark:text-white mb-2">What is the mode of training?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We offer both online and in-person training options. Our online courses include live sessions, recorded lectures, and interactive projects, while in-person training is available at our centers in selected cities.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-skill-dark dark:text-white mb-2">How do I register for a hackathon?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      You can register for our hackathons by visiting the Hackathons page and clicking on the registration link for the event you're interested in. Teams of 2-4 members can participate.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-skill-dark dark:text-white mb-2">Do you provide placement assistance?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Yes, we provide comprehensive placement assistance to our students. We have partnerships with 100+ companies that regularly hire from our talent pool. Our placement rate is over 90%.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
