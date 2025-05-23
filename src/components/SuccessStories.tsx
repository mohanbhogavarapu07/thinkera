import React from "react";
import { Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  company?: string;
  image: string;
  quote: string;
  companyLogo?: string;
  placement?: string;
  detailedStory?: string;
  previousRole?: string;
  salaryStat?: string;
  category?: string;
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
  category
}) => {
  return (
    <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md p-6 card-hover">
      <div className="flex items-start mb-4">
        <div className="relative mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-skill-purple/30" 
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/56?text=" + name.charAt(0);
            }}
          />
          <Quote className="absolute -bottom-2 -right-2 h-6 w-6 bg-skill-purple text-white p-1 rounded-full" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role} {company && `at ${company}`}
          </p>
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
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {detailedStory}
        </div>
      )}
      
      {previousRole && salaryStat && (
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <p>Previous Role: {previousRole}</p>
          <p className="text-skill-purple">{salaryStat}</p>
        </div>
      )}
      
      {companyLogo && (
        <div className="flex justify-end">
          <img 
            src={companyLogo} 
            alt={`${company} logo`} 
            className="h-6"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/64x24?text=" + company;
            }}
          />
        </div>
      )}
    </div>
  );
};

const SuccessStories = () => {
  return (
    <section id="success-stories" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Success <span className="hero-gradient-text">Stories</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our alumni have secured positions at leading tech companies and achieved remarkable career growth after completing our programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial
            name="Aisha Patel"
            role="ServiceNow Developer"
            company="TechSolutions Inc"
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=56&h=56&q=80"
            quote="The ServiceNow certification course gave me the exact skills employers were looking for. I received three job offers within two weeks of completing the program!"
            placement="Placed with 92% salary increase"
          />
          <Testimonial
            name="Michael Chen"
            role="AI Engineer"
            company="DataMinds"
            image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=56&h=56&q=80"
            quote="The AI/ML bootcamp and hackathon experience were game-changers. The practical projects became my portfolio, which impressed my current employer."
            placement="Winner of 2023 AI Innovation Hackathon"
          />
          <Testimonial
            name="Priya Sharma"
            role="Salesforce Administrator"
            company="CloudForce Solutions"
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=56&h=56&q=80"
            quote="The mentorship program was invaluable. My mentor helped me navigate the certification process and connected me directly with hiring managers."
            placement="Secured role within 30 days of certification"
          />
        </div>
        
        <div className="mt-16">
          <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">Placement Statistics</h3>
              <p className="text-gray-600 dark:text-gray-400">Real-time metrics from our placement cell</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
