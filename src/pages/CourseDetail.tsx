import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Clock, Award, Users, BookOpen, CheckCircle,
  Calendar, ArrowLeft, GraduationCap, FileText, ArrowRight,
  Server, Database, Cloud, Code, Brain
} from 'lucide-react';

const courseDataExtended = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    description: 'Build intelligent applications with modern AI frameworks.',
    longDescription: 'This course provides a comprehensive introduction to artificial intelligence and machine learning concepts, algorithms, and applications. You\'ll learn to build predictive models, natural language processing systems, and computer vision applications using industry-standard frameworks like TensorFlow and PyTorch.',
    icon: 'Brain',
    category: 'AI',
    level: 'Intermediate',
    duration: '16 weeks',
    certification: true,
    price: '$1,899',
    instructor: 'Dr. Priya Sharma',
    startDates: ['June 25, 2025', 'September 20, 2025'],
    color: 'from-red-500 to-pink-600',
    modules: [
      'Foundations of Machine Learning',
      'Supervised Learning Algorithms',
      'Unsupervised Learning and Clustering',
      'Deep Learning Fundamentals',
      'Natural Language Processing',
      'Computer Vision',
      'Reinforcement Learning',
      'AI Ethics and Responsible AI'
    ],
    skills: [
      'Data Preprocessing',
      'Model Training and Evaluation',
      'Neural Network Design',
      'TensorFlow and PyTorch',
      'Model Deployment',
      'MLOps Fundamentals'
    ],
    prerequisites: [
      'Programming experience in Python',
      'Understanding of statistics and probability',
      'Basic linear algebra knowledge',
      'Data analysis experience'
    ]
  },
  {
    id: 2,
    title: 'Python for Data Science',
    description: 'Learn Python programming specifically for data analysis, visualization, and machine learning.',
    longDescription: 'Master Python programming for data science and machine learning applications. This course covers essential libraries like NumPy, Pandas, Matplotlib, and Scikit-learn, along with practical projects in data analysis and visualization.',
    icon: 'Brain',
    category: 'AI',
    level: 'Beginner',
    duration: '8 weeks',
    certification: true,
    price: '$999',
    instructor: 'Dr. Michael Chen',
    startDates: ['July 10, 2025', 'October 5, 2025'],
    color: 'from-yellow-500 to-yellow-600',
    modules: [
      'Python Programming Fundamentals',
      'Data Structures and Algorithms',
      'NumPy and Pandas for Data Manipulation',
      'Data Visualization with Matplotlib and Seaborn',
      'Statistical Analysis with Python',
      'Introduction to Machine Learning with Scikit-learn',
      'Data Cleaning and Preprocessing',
      'Real-world Data Science Projects'
    ],
    skills: [
      'Python Programming',
      'Data Analysis',
      'Data Visualization',
      'Statistical Analysis',
      'Machine Learning Basics',
      'Data Preprocessing'
    ],
    prerequisites: [
      'Basic programming concepts',
      'High school level mathematics',
      'No prior Python experience required'
    ]
  },
  {
    id: 3,
    title: 'Deep Learning & Neural Networks',
    description: 'Master deep learning concepts, neural network architectures, and advanced AI model development.',
    longDescription: 'Dive deep into neural networks and advanced deep learning techniques. Learn to build and train complex neural network architectures, implement state-of-the-art models, and deploy them in production environments.',
    icon: 'Brain',
    category: 'AI',
    level: 'Advanced',
    duration: '12 weeks',
    certification: true,
    price: '$1,799',
    instructor: 'Dr. Sarah Johnson',
    startDates: ['August 1, 2025', 'November 5, 2025'],
    color: 'from-purple-500 to-indigo-600',
    modules: [
      'Neural Network Fundamentals',
      'Convolutional Neural Networks (CNNs)',
      'Recurrent Neural Networks (RNNs)',
      'Transformer Architecture',
      'Generative Adversarial Networks (GANs)',
      'Transfer Learning and Fine-tuning',
      'Model Optimization and Deployment',
      'Advanced Research Topics'
    ],
    skills: [
      'Deep Learning Architecture Design',
      'CNN and RNN Implementation',
      'Transformer Models',
      'GAN Development',
      'Model Optimization',
      'Production Deployment'
    ],
    prerequisites: [
      'Strong Python programming skills',
      'Understanding of machine learning fundamentals',
      'Experience with PyTorch or TensorFlow',
      'Basic calculus and linear algebra'
    ]
  },
  {
    id: 4,
    title: 'Natural Language Processing',
    description: 'Learn to build AI systems that understand and process human language using modern NLP techniques.',
    longDescription: 'Explore the fascinating world of Natural Language Processing (NLP) and learn to build systems that can understand, interpret, and generate human language. Master modern NLP techniques and transformer-based models.',
    icon: 'Brain',
    category: 'AI',
    level: 'Intermediate',
    duration: '10 weeks',
    certification: true,
    price: '$1,499',
    instructor: 'Dr. Alex Wong',
    startDates: ['July 15, 2025', 'October 10, 2025'],
    color: 'from-blue-500 to-cyan-600',
    modules: [
      'NLP Fundamentals and Text Processing',
      'Word Embeddings and Vector Representations',
      'Sequence Models and RNNs for NLP',
      'Transformer Architecture and BERT',
      'Text Classification and Sentiment Analysis',
      'Named Entity Recognition',
      'Text Generation and Summarization',
      'NLP Applications and Projects'
    ],
    skills: [
      'Text Processing',
      'Word Embeddings',
      'Transformer Models',
      'Text Classification',
      'Named Entity Recognition',
      'Text Generation'
    ],
    prerequisites: [
      'Python programming experience',
      'Basic machine learning knowledge',
      'Understanding of deep learning concepts',
      'Familiarity with PyTorch or TensorFlow'
    ]
  },
  {
    id: 5,
    title: 'Computer Vision & Image Processing',
    description: 'Develop AI systems that can analyze and understand visual data using computer vision techniques.',
    longDescription: 'Learn to build AI systems that can see and understand visual data. This course covers computer vision fundamentals, image processing techniques, and deep learning approaches for visual recognition tasks.',
    icon: 'Brain',
    category: 'AI',
    level: 'Advanced',
    duration: '14 weeks',
    certification: true,
    price: '$1,699',
    instructor: 'Dr. Maria Rodriguez',
    startDates: ['August 15, 2025', 'November 10, 2025'],
    color: 'from-green-500 to-emerald-600',
    modules: [
      'Computer Vision Fundamentals',
      'Image Processing Techniques',
      'Feature Detection and Matching',
      'Convolutional Neural Networks',
      'Object Detection and Recognition',
      'Image Segmentation',
      'Video Analysis',
      'Real-time Computer Vision Applications'
    ],
    skills: [
      'Image Processing',
      'Feature Detection',
      'CNN Implementation',
      'Object Detection',
      'Image Segmentation',
      'Video Analysis'
    ],
    prerequisites: [
      'Python programming experience',
      'Understanding of deep learning',
      'Basic linear algebra',
      'Familiarity with PyTorch or TensorFlow'
    ]
  },
  {
    id: 6,
    title: 'AI Ethics & Responsible AI',
    description: 'Learn about ethical considerations, bias mitigation, and responsible development of AI systems.',
    longDescription: 'Explore the ethical implications of AI and learn to develop responsible AI systems. This course covers bias detection and mitigation, fairness in AI, transparency, and ethical decision-making in AI development.',
    icon: 'Brain',
    category: 'AI',
    level: 'Intermediate',
    duration: '6 weeks',
    certification: true,
    price: '$899',
    instructor: 'Dr. James Wilson',
    startDates: ['September 1, 2025', 'December 1, 2025'],
    color: 'from-orange-500 to-yellow-600',
    modules: [
      'AI Ethics Fundamentals',
      'Bias Detection and Mitigation',
      'Fairness in Machine Learning',
      'Transparency and Explainability',
      'Privacy and Security in AI',
      'Ethical Decision Making',
      'AI Governance and Policy',
      'Responsible AI Development'
    ],
    skills: [
      'Bias Detection',
      'Fairness Assessment',
      'Model Explainability',
      'Privacy Protection',
      'Ethical Decision Making',
      'AI Governance'
    ],
    prerequisites: [
      'Basic understanding of AI/ML concepts',
      'No technical prerequisites required',
      'Interest in ethical considerations',
      'Critical thinking skills'
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
