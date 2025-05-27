
import React from 'react';

import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Shield, BookOpen, Users } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  
  return (
    
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Tech Potential Navigator</h1>
            <p className="text-xl text-gray-600">
              Empowering engineering students to discover their cognitive strengths and align them with fulfilling tech careers.
            </p>
          </div>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Tech Potential Navigator was created to bridge the gap between academic learning and real-world career success in technology fields. We believe that every engineering student possesses unique cognitive strengths that, when properly identified and nurtured, can lead to exceptional career outcomes.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to provide students with scientifically valid, accessible, and anxiety-free assessments that reveal their innate cognitive potential. By understanding their strengths, students can make more informed decisions about specializations, course selection, and career paths.
            </p>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">The Science Behind Our Assessment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="text-xl font-medium mb-4">Psychometric Validity</h3>
                <p className="text-gray-600">
                  Our assessment is built on established psychometric principles, with questions calibrated through rigorous testing with thousands of engineering students. Each item has been analyzed for difficulty, discrimination, and fairness.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="text-xl font-medium mb-4">Adaptive Testing</h3>
                <p className="text-gray-600">
                  Using Computerized Adaptive Testing (CAT) algorithms, our assessment adapts in real-time to your responses, efficiently mapping your cognitive profile with fewer questions and greater precision than traditional tests.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="text-xl font-medium mb-4">Cognitive Dimensions</h3>
                <p className="text-gray-600">
                  We measure five key cognitive dimensions that research has linked to success in various tech roles: Logical Reasoning, Abstract Reasoning, Spatial Reasoning, Systems Thinking, and Processing Efficiency.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="text-xl font-medium mb-4">Career Mapping</h3>
                <p className="text-gray-600">
                  Our career recommendations are based on correlations between cognitive profiles and success patterns in different technical roles, derived from studies with professionals across the industry.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-navigator-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Scientific Integrity</h3>
                  <p className="text-gray-600">
                    We maintain rigorous standards in our assessment development, continuously updating our item bank and algorithms based on the latest research in cognitive science and psychometrics.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-navigator-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Accessibility & Inclusion</h3>
                  <p className="text-gray-600">
                    We design our platform to be accessible to all students, with accommodations for different learning needs and continuous testing to minimize cultural and gender bias in our assessment items.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-navigator-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Growth Mindset</h3>
                  <p className="text-gray-600">
                    We believe cognitive abilities can be developed through dedication and hard work. Our platform emphasizes that assessment results are not fixed labels but starting points for targeted growth.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-navigator-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Ethical Data Use</h3>
                  <p className="text-gray-600">
                    We maintain the highest standards of data privacy and security. Assessment data is used only for providing insights to students and for improving our tools, with clear opt-in policies for research.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Ready to Discover Your Potential?</h2>
            <div className="bg-navigator-purple/10 p-8 rounded-xl text-center">
              <p className="text-lg mb-6">
                Take the first step toward aligning your education and career with your natural cognitive strengths.
              </p>
              <Button 
                className="bg-navigator-purple hover:bg-navigator-purple/90 text-white px-8 py-6 text-lg"
                onClick={() => navigate('/onboarding')}
              >
                Start Your Assessment Journey
              </Button>
            </div>
          </section>
        </div>
      </div>
 
  );
};

export default About;
