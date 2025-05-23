import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Clock, Award, Users, BookOpen, CheckCircle,
  Calendar, ArrowLeft, GraduationCap, FileText, ArrowRight,
  Server, Database, Cloud, Code, Brain, MessageSquare, Sparkles
} from 'lucide-react';

const courseDataExtended = [
  {
    id: 1,
    title: 'ServiceNow Administration Certification Course',
    description: 'Master ServiceNow platform administration and prepare for the CSA exam.',
    longDescription: 'This course provides comprehensive training on ServiceNow administration, equipping you with the skills to manage, configure, and maintain the ServiceNow platform effectively. You\'ll learn to automate workflows, manage users and data, and ensure the platform aligns with business needs. This course prepares you for the ServiceNow Certified System Administrator (CSA) exam.',
    icon: 'Server',
    category: 'ServiceNow',
    level: 'Intermediate',
    duration: '12 weeks',
    certification: true,
    price: '$1,499',
    instructor: 'Mr. Alex Chen',
    startDates: ['July 15, 2025', 'October 10, 2025'],
    color: 'from-indigo-500 to-purple-600',
    modules: [
      'ServiceNow Platform Overview & Navigation',
      'User Administration & Security',
      'Data Management in ServiceNow',
      'ServiceNow UI & Customization',
      'Workflow Automation & Flow Designer',
      'Service Catalog Administration',
      'ITSM Applications Overview',
      'Reporting, Dashboards & Performance Analytics Basics',
      'Instance Management & Best Practices',
      'Scripting in ServiceNow (Introduction)'
    ],
    skills: [
      'ServiceNow Platform Navigation',
      'User and Group Management',
      'Data Import and Management',
      'UI Configuration and Customization',
      'Workflow Design and Implementation',
      'Service Catalog Management',
      'Incident Management Basics',
      'Report and Dashboard Creation',
      'Instance Security and Performance Monitoring',
      'Preparation for ServiceNow CSA Exam'
    ],
    prerequisites: [
      'Basic understanding of ITIL concepts',
      'Familiarity with database concepts',
      'General IT experience (1-2 years recommended)',
      'Strong problem-solving skills'
    ]
  },
  {
    id: 2,
    title: 'Prompt Engineering & LLM Interfacing',
    description: 'Master the art of prompt engineering for Large Language Models.',
    longDescription: 'This course offers a deep dive into the art and science of prompt engineering for Large Language Models (LLMs). You\'ll learn how to craft effective prompts to guide AI models, optimize their responses for various tasks, and understand the nuances of interacting with state-of-the-art generative AI. This course will empower you to unlock the full potential of LLMs for creative and analytical applications.',
    icon: 'MessageSquare',
    category: 'Generative AI',
    level: 'Intermediate',
    duration: '8 weeks',
    certification: true,
    price: '$999',
    instructor: 'Ms. Sarah Chen',
    startDates: ['August 5, 2025', 'November 12, 2025'],
    color: 'from-blue-500 to-cyan-600',
    modules: [
      'Introduction to LLMs and Generative AI',
      'Fundamentals of Prompt Engineering',
      'Core Prompting Techniques',
      'Advanced Prompting Strategies',
      'Prompting for Creative Text Generation & Content Creation',
      'Prompting for Analytical Tasks',
      'Iterative Prompt Development & Evaluation Metrics',
      'Ethical AI: Responsible Prompting & Mitigating Bias',
      'Tools, APIs, and Platforms for Prompt Engineers',
      'Future of Prompt Engineering & LLM Interaction'
    ],
    skills: [
      'Effective Prompt Design & Crafting',
      'Multi-faceted Prompting Techniques',
      'LLM Response Evaluation',
      'Iterative Prompt Optimization',
      'Application-Specific Prompting',
      'Ethical LLM Interaction',
      'API Usage for LLMs (Basic)',
      'Creative Problem Solving with AI'
    ],
    prerequisites: [
      'Basic understanding of Artificial Intelligence concepts',
      'Strong written English and communication skills',
      'Familiarity with using web-based applications and APIs (beneficial, not mandatory)',
      'An analytical and creative mindset'
    ]
  },
  {
    id: 3,
    title: 'AI Adventure: Mastering Prompts!',
    description: 'A 1-Day Workshop for 12th Graders to explore the world of AI and prompt engineering.',
    longDescription: 'Ever wondered how to talk to AI and get amazing results? This one-day "AI Adventure" is your chance to dive into the exciting world of Prompt Engineering! Learn how to craft cool instructions (prompts) for Large Language Models (LLMs) – the brains behind tools like ChatGPT. Discover how this new skill can help you with your studies, unleash your creativity, and prepare you for a future powered by AI. No coding or prior tech genius needed – just bring your curiosity!',
    icon: 'Sparkles',
    category: 'Future Tech Explorers',
    level: 'Beginner',
    duration: '1 Day',
    certification: true,
    price: '₹999',
    instructor: 'Ms. Diya Sharma',
    startDates: ['July 12, 2025'],
    color: 'from-pink-500 to-rose-600',
    modules: [
      'Welcome to the World of AI!',
      'The Magic of Prompts',
      'AI for Creativity & School',
      'Explore Cool AI Tools & Be a Smart User'
    ],
    skills: [
      'Basic understanding of AI and LLMs',
      'How to write simple and effective prompts',
      'Experience using AI for creative and learning tasks',
      'Awareness of ethical AI use',
      'A glimpse into how AI will impact your future'
    ],
    prerequisites: [
      'All 12th-grade students (Science, Commerce, Arts/Humanities, and other streams)',
      'Curious minds eager to learn about the latest technology',
      'Anyone who wants to understand how to use AI effectively and safely',
      'No prior computer programming or AI knowledge is needed'
    ]
  }
];

const CourseDetail = () => {
  const { courseId } = useParams();
  const id = parseInt(courseId || '1');
  
  // Find the course with the matching ID
  const course = courseDataExtended.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Course Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The course you're looking for doesn't exist or has been removed.</p>
            <Link to="/courses">
              <Button className="bg-brand-purple">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // For color rendering
  let IconComponent;
  switch(course.icon) {
    case 'Server': IconComponent = <Server size={32} />; break;
    case 'Database': IconComponent = <Database size={32} />; break;
    case 'Cloud': IconComponent = <Cloud size={32} />; break;
    case 'Code': IconComponent = <Code size={32} />; break;
    case 'Brain': IconComponent = <Brain size={32} />; break;
    case 'Users': IconComponent = <Users size={32} />; break;
    case 'MessageSquare': IconComponent = <MessageSquare size={32} />; break;
    case 'Sparkles': IconComponent = <Sparkles size={32} />; break;
    default: IconComponent = <BookOpen size={32} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header/Hero Section */}
        <section className={`py-20 bg-gradient-to-r ${course.color} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 text-white">
                <Link to="/courses" className="inline-flex items-center text-white text-opacity-80 hover:text-opacity-100 mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Courses
                </Link>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-white bg-opacity-15 flex items-center justify-center mr-4">
                    {IconComponent}
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm">
                    {course.category}
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-white text-opacity-90 mb-6 max-w-2xl">
                  {course.longDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white bg-opacity-15 px-4 py-2 rounded-md">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center bg-white bg-opacity-15 px-4 py-2 rounded-md">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{course.level}</span>
                  </div>
                  {course.certification && (
                    <div className="flex items-center bg-white bg-opacity-15 px-4 py-2 rounded-md">
                      <Award className="h-5 w-5 mr-2" />
                      <span>Certification</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg w-full md:w-auto">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-brand-dark">{course.price}</p>
                  <p className="text-gray-500">Complete Course</p>
                </div>
                <Button className="w-full bg-brand-purple mb-4">Enroll Now</Button>
                <Button variant="outline" className="w-full mb-6">Download Syllabus</Button>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="text-brand-purple mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-brand-dark">Next Batch Starts</p>
                      <p className="text-gray-500 text-sm">{course.startDates[0]}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <GraduationCap className="text-brand-purple mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-brand-dark">Instructor</p>
                      <p className="text-gray-500 text-sm">{course.instructor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-brand-dark mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{module}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-brand-dark mb-6">Course Modules</h2>
                <div className="space-y-4 mb-8">
                  {course.modules.map((module, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="p-4 flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-purple bg-opacity-10 text-brand-purple flex items-center justify-center mr-3">
                              <span className="font-semibold">{index + 1}</span>
                            </div>
                            <h3 className="font-semibold text-gray-800">{module}</h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-brand-dark mb-6">Prerequisites</h2>
                <div className="space-y-2 mb-8">
                  {course.prerequisites.map((prereq, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-brand-purple mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{prereq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">Skills You'll Gain</h2>
                <div className="space-y-2 mb-8">
                  {course.skills.map((skill, index) => (
                    <div key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">
                      {skill}
                    </div>
                  ))}
                </div>

                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-brand-dark mb-4">Course Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium text-gray-800">{course.duration}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Level</span>
                        <span className="font-medium text-gray-800">{course.level}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Category</span>
                        <span className="font-medium text-gray-800">{course.category}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Certification</span>
                        <span className="font-medium text-gray-800">{course.certification ? 'Yes' : 'No'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Start Dates</span>
                        <div className="text-right">
                          {course.startDates.map((date, index) => (
                            <div key={index} className="font-medium text-gray-800">{date}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-brand-purple bg-opacity-5 rounded-lg p-6 border border-brand-purple border-opacity-20">
                  <h3 className="text-xl font-semibold text-brand-purple mb-4">Need Help?</h3>
                  <p className="text-gray-700 mb-4">Our student advisors are here to answer your questions about this course.</p>
                  <div className="flex flex-col space-y-3">
                    <Button className="w-full bg-brand-purple">Schedule a Call</Button>
                    <Button variant="outline" className="w-full border-brand-purple text-brand-purple">
                      <FileText className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <h2 className="text-2xl font-bold text-brand-dark mb-8">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseDataExtended
                .filter(c => c.category === course.category && c.id !== course.id)
                .slice(0, 3)
                .map(relatedCourse => (
                  <Card key={relatedCourse.id} className="h-full card-hover">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${relatedCourse.color} text-white flex items-center justify-center mb-4`}>
                        {/* Render icon based on the icon name */}
                        {relatedCourse.icon === 'Server' && <Server size={24} />}
                        {relatedCourse.icon === 'Database' && <Database size={24} />}
                        {relatedCourse.icon === 'Cloud' && <Cloud size={24} />}
                        {relatedCourse.icon === 'Code' && <Code size={24} />}
                        {relatedCourse.icon === 'Brain' && <Brain size={24} />}
                        {relatedCourse.icon === 'Users' && <Users size={24} />}
                        {relatedCourse.icon === 'MessageSquare' && <MessageSquare size={24} />}
                        {relatedCourse.icon === 'Sparkles' && <Sparkles size={24} />}
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-brand-purple bg-opacity-10 text-brand-purple text-xs font-medium px-2.5 py-0.5 rounded">
                          {relatedCourse.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {relatedCourse.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-brand-dark mb-2">{relatedCourse.title}</h3>
                      <p className="text-gray-600 mb-4">{relatedCourse.description}</p>
                      <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                        <Link to={`/courses/${relatedCourse.id}`} className="text-brand-purple font-medium hover:underline">
                          Learn More
                        </Link>
                        <span className="text-gray-500 text-sm">{relatedCourse.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/courses">
                <Button variant="outline" className="inline-flex items-center">
                  View All Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
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

export default CourseDetail;
