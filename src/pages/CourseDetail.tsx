import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Clock, Award, Users, BookOpen, CheckCircle,
  Calendar, ArrowLeft, GraduationCap, FileText, ArrowRight,
  Server, Database, Cloud, Code, Brain, MessageSquare, Sparkles
} from 'lucide-react';
import { allCourses } from './Courses';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  
  useEffect(() => {
    const id = parseInt(courseId || '0');
    const foundCourse = allCourses.find(c => c.id === id);
    
    if (!foundCourse) {
      navigate('/courses');
      return;
    }
    
    setCourse(foundCourse);
  }, [courseId, navigate]);
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Loading...</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Define course-specific details based on the course ID
  const courseDetails = {
    price: course.id === 1 ? '$1,499' : 
           course.id === 2 ? '$999' :
           course.id === 3 ? '₹2,499' :
           course.id === 4 ? '₹999' :
           course.id === 5 ? '₹24,999' :
           '₹39,999',
    instructor: course.id === 1 ? 'Mr. Alex Chen' :
                course.id === 2 ? 'Ms. Sarah Chen' :
                course.id === 3 ? 'Dr. Arjun Rao' :
                course.id === 4 ? 'Ms. Diya Sharma' :
                course.id === 5 ? 'Mr. Rohan Kulkarni' :
                'Ms. Ananya Sharma & Mr. Vijay Kumar',
    startDates: course.id === 1 ? ['July 15, 2025', 'October 10, 2025'] :
                course.id === 2 ? ['August 5, 2025', 'November 12, 2025'] :
                course.id === 3 ? ['June 28, 2025'] :
                course.id === 4 ? ['July 12, 2025'] :
                course.id === 5 ? ['July 20, 2025', 'September 7, 2025'] :
                ['August 3, 2025', 'October 12, 2025'],
    modules: course.id === 1 ? [
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
    ] : course.id === 2 ? [
      'Introduction to LLMs and Generative AI',
      'Fundamentals of Prompt Engineering',
      'Core Prompting Techniques',
      'Advanced Prompting Strategies',
      'Prompting for Creative Text Generation',
      'Prompting for Analytical Tasks',
      'Iterative Prompt Development',
      'Ethical AI: Responsible Prompting',
      'Tools and Platforms for Prompt Engineers',
      'Future of Prompt Engineering'
    ] : course.id === 3 ? [
      'Introduction to LLMs & Prompt Engineering',
      'Foundations of Effective Prompting',
      'Prompting for Engineering Tasks',
      'Advanced Considerations & Future Scope'
    ] : course.id === 4 ? [
      'Welcome to the World of AI!',
      'The Magic of Prompts',
      'AI for Creativity & School',
      'Explore Cool AI Tools & Be a Smart User'
    ] : course.id === 5 ? [
      'Foundations of Agile & Scrum',
      'Scrum Roles & Accountabilities',
      'Scrum Events In-Depth',
      'Scrum Artifacts & Commitments',
      'The Definition of Done',
      'Product Backlog Management',
      'Facilitation & Coaching',
      'Managing Impediments',
      'Scrum in Practice',
      'Certification Preparation'
    ] : [
      'Introduction to Business Analysis',
      'Business Analysis Core Concepts',
      'Stakeholder Management',
      'Requirements Elicitation',
      'Requirements Analysis',
      'Process and Data Modeling',
      'Solution Evaluation',
      'Agile & Scrum Integration',
      'JIRA for Business Analysis',
      'BA Toolkit & Soft Skills'
    ],
    skills: course.id === 1 ? [
      'ServiceNow Platform Navigation',
      'User and Group Management',
      'Data Import and Management',
      'UI Configuration',
      'Workflow Design',
      'Service Catalog Management',
      'Incident Management',
      'Report Creation',
      'Instance Security',
      'CSA Exam Preparation'
    ] : course.id === 2 ? [
      'Effective Prompt Design',
      'Multi-faceted Prompting',
      'LLM Response Evaluation',
      'Prompt Optimization',
      'Application-Specific Prompting',
      'Ethical LLM Interaction',
      'API Usage for LLMs',
      'Creative Problem Solving'
    ] : course.id === 3 ? [
      'Understanding LLMs',
      'Core Prompt Engineering Principles',
      'Technical Q&A with AI',
      'Engineering Documentation',
      'Problem Definition',
      'Ethical AI Use',
      'Research Enhancement',
      'Project Management with AI'
    ] : course.id === 4 ? [
      'Basic AI Understanding',
      'Simple Prompt Writing',
      'Creative Writing with AI',
      'Study Assistance',
      'Ethical AI Use',
      'Future AI Impact',
      'Critical Thinking',
      'Digital Literacy'
    ] : course.id === 5 ? [
      'Scrum Framework Expertise',
      'Agile Mindset',
      'Event Facilitation',
      'Team Coaching',
      'Servant Leadership',
      'Impediment Removal',
      'Backlog Management',
      'Conflict Resolution'
    ] : [
      'Requirements Engineering',
      'Stakeholder Management',
      'Process Modeling',
      'Data Analysis',
      'Agile Methodologies',
      'User Story Writing',
      'JIRA Proficiency',
      'Documentation'
    ],
    prerequisites: course.id === 1 ? [
      'Basic ITIL concepts',
      'Database knowledge',
      'IT experience',
      'Problem-solving skills'
    ] : course.id === 2 ? [
      'Basic AI understanding',
      'Strong English skills',
      'Web application familiarity',
      'Analytical mindset'
    ] : course.id === 3 ? [
      'Engineering student status',
      'Basic technical aptitude',
      'Curiosity about AI',
      'No prior AI experience needed'
    ] : course.id === 4 ? [
      '12th-grade student',
      'Curiosity about technology',
      'No prior AI knowledge needed',
      'Basic computer skills'
    ] : course.id === 5 ? [
      'Project environment understanding',
      'Team-based work experience',
      'Active participation',
      'Scrum Guide familiarity'
    ] : [
      'Bachelor\'s degree or experience',
      'Analytical thinking',
      'Communication skills',
      'Computer literacy',
      'Business process interest'
    ]
  };

  // For color rendering
  const IconComponent = course.icon;

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
                    {React.createElement(IconComponent, { size: 32 })}
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm">
                    {course.category}
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-white text-opacity-90 mb-6 max-w-2xl">
                  {course.description}
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
                  <p className="text-3xl font-bold text-brand-dark">{courseDetails.price}</p>
                  <p className="text-gray-500">Complete Course</p>
                </div>
                <Button className="w-full bg-brand-purple mb-4">Enroll Now</Button>
                <Button variant="outline" className="w-full mb-6">Download Syllabus</Button>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="text-brand-purple mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-brand-dark">Next Batch Starts</p>
                      <p className="text-gray-500 text-sm">{courseDetails.startDates[0]}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <GraduationCap className="text-brand-purple mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-brand-dark">Instructor</p>
                      <p className="text-gray-500 text-sm">{courseDetails.instructor}</p>
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
                  {courseDetails.modules.map((module, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{module}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-brand-dark mb-6">Course Modules</h2>
                <div className="space-y-4 mb-8">
                  {courseDetails.modules.map((module, index) => (
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
                  {courseDetails.prerequisites.map((prereq, index) => (
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
                  {courseDetails.skills.map((skill, index) => (
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
                          {courseDetails.startDates.map((date, index) => (
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
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-brand-dark mb-8">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allCourses
                .filter(c => c.category === course.category && c.id !== course.id)
                .slice(0, 3)
                .map(relatedCourse => (
                  <Card key={relatedCourse.id} className="h-full card-hover">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${relatedCourse.color} text-white flex items-center justify-center mb-4`}>
                        {React.createElement(relatedCourse.icon, { size: 24 })}
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
