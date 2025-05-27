import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    discipline: '',
    yearOfStudy: '',
    careerInterests: [] as string[],
    previousExperience: 'no'
  });
  
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/assessment/tech-potential-voyager/practice');
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/assessment/tech-potential-voyager');
    }
  };
  
  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleCareerInterest = (interest: string) => {
    setFormData(prev => {
      const currentInterests = [...prev.careerInterests];
      if (currentInterests.includes(interest)) {
        return {
          ...prev,
          careerInterests: currentInterests.filter(i => i !== interest)
        };
      } else {
        return {
          ...prev,
          careerInterests: [...currentInterests, interest]
        };
      }
    });
  };

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-secondary/30 py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">Step {step} of 3</span>
            <div className="flex gap-2">
              {[1, 2, 3].map(i => (
                <motion.div 
                  key={i}
                  className={`h-2 w-12 rounded-full transition-all duration-300 ${
                    i === step 
                      ? 'bg-gradient-to-r from-thinkera-purple to-thinkera-blue' 
                      : i < step 
                        ? 'bg-gradient-to-r from-thinkera-purple/40 to-thinkera-blue/40' 
                        : 'bg-gray-200'
                  }`}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: i === step ? 1.1 : 1 }}
                ></motion.div>
              ))}
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-thinkera-purple to-thinkera-blue bg-clip-text text-transparent">
            Let's Get To Know You
          </h1>
          <p className="text-lg text-gray-600">
            This information helps us tailor the assessment to your background and goals. No pressure!
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                className="space-y-8"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Academic Background</h2>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="discipline" className="text-base font-medium text-gray-700">What's your field of study?</Label>
                    <Select 
                      onValueChange={(value) => updateFormData('discipline', value)}
                      value={formData.discipline}
                    >
                      <SelectTrigger id="discipline" className="h-12 text-base">
                        <SelectValue placeholder="Select your discipline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="electrical-engineering">Electrical Engineering</SelectItem>
                        <SelectItem value="mechanical-engineering">Mechanical Engineering</SelectItem>
                        <SelectItem value="civil-engineering">Civil Engineering</SelectItem>
                        <SelectItem value="chemical-engineering">Chemical Engineering</SelectItem>
                        <SelectItem value="biomedical-engineering">Biomedical Engineering</SelectItem>
                        <SelectItem value="other">Other Engineering Field</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="yearOfStudy" className="text-base font-medium text-gray-700">What year are you in?</Label>
                    <Select 
                      onValueChange={(value) => updateFormData('yearOfStudy', value)}
                      value={formData.yearOfStudy}
                    >
                      <SelectTrigger id="yearOfStudy" className="h-12 text-base">
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freshman">Freshman (1st year)</SelectItem>
                        <SelectItem value="sophomore">Sophomore (2nd year)</SelectItem>
                        <SelectItem value="junior">Junior (3rd year)</SelectItem>
                        <SelectItem value="senior">Senior (4th year)</SelectItem>
                        <SelectItem value="graduate">Graduate Student</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>
            )}
            
            {step === 2 && (
              <motion.div 
                className="space-y-8"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Career Interests</h2>
                
                <div className="space-y-6">
                  <Label className="text-base font-medium text-gray-700">Which tech career paths interest you? (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Software Development',
                      'Data Science',
                      'Cybersecurity',
                      'AI/Machine Learning',
                      'Cloud Computing',
                      'DevOps',
                      'Systems Engineering',
                      'UX/UI Design',
                      'Product Management',
                      'Robotics',
                      'IoT/Embedded Systems',
                      'AR/VR Development'
                    ].map(interest => (
                      <motion.div 
                        key={interest}
                        className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                          formData.careerInterests.includes(interest)
                            ? 'border-thinkera-purple bg-gradient-to-r from-thinkera-purple/5 to-thinkera-blue/5'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => toggleCareerInterest(interest)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          formData.careerInterests.includes(interest)
                            ? 'bg-gradient-to-r from-thinkera-purple to-thinkera-blue text-white'
                            : 'border-2 border-gray-300'
                        }`}>
                          {formData.careerInterests.includes(interest) && (
                            <Check size={14} />
                          )}
                        </div>
                        <span className="text-gray-700">{interest}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {step === 3 && (
              <motion.div 
                className="space-y-8"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Assessment Experience</h2>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label htmlFor="previousExperience" className="text-base font-medium text-gray-700">Have you taken similar cognitive assessments before?</Label>
                    <RadioGroup 
                      value={formData.previousExperience} 
                      onValueChange={(value) => updateFormData('previousExperience', value)}
                      className="grid grid-cols-1 gap-4 pt-2"
                    >
                      <motion.div 
                        className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <RadioGroupItem value="yes" id="yes" className="text-thinkera-purple" />
                        <Label htmlFor="yes" className="cursor-pointer text-gray-700">Yes, I've taken similar assessments</Label>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <RadioGroupItem value="no" id="no" className="text-thinkera-purple" />
                        <Label htmlFor="no" className="cursor-pointer text-gray-700">No, this is my first time</Label>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <RadioGroupItem value="not-sure" id="not-sure" className="text-thinkera-purple" />
                        <Label htmlFor="not-sure" className="cursor-pointer text-gray-700">I'm not sure</Label>
                      </motion.div>
                    </RadioGroup>
                  </div>
                </div>
                
                <motion.div 
                  className="bg-gradient-to-r from-thinkera-purple/5 to-thinkera-blue/5 p-6 rounded-xl border border-thinkera-purple/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-base font-medium text-thinkera-purple mb-2">What happens next?</h3>
                  <p className="text-gray-700">
                    You'll be directed to our Practice Zone where you can try sample questions before starting the actual assessment. Don't worry - these practice questions won't affect your final results!
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
            <Button 
              variant="outline" 
              onClick={handleBack} 
              className="flex items-center gap-2 px-6 py-3 text-base hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Back
            </Button>
            
            <Button 
              onClick={handleNext} 
              className="bg-gradient-to-r from-thinkera-purple to-thinkera-blue hover:from-thinkera-purple/90 hover:to-thinkera-blue/90 text-white px-8 py-3 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              {step < 3 ? 'Continue' : 'Go to Practice Zone'}
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;
