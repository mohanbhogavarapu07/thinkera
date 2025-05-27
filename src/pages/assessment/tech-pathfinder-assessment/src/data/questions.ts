
import { Brain, Rocket, Cog, Users, UserRound, Briefcase, HandHelping, Award, Heart, Medal, TrendingUp } from 'lucide-react';

export interface Choice {
  id: string;
  text: string;
  value: {
    ai: number;
    servicenow: number;
    salesforce: number;
  };
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'likert-scale' | 'scenario' | 'tradeoff';
  category: 'interests' | 'work-styles' | 'values' | 'traits';
  question: string;
  description?: string;
  icon?: any;
  choices: Choice[];
}

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'multiple-choice',
    category: 'interests',
    question: 'Which of these activities would you enjoy doing most?',
    icon: Brain,
    choices: [
      {
        id: 'q1-c1',
        text: 'Analyzing data patterns and building predictive models',
        value: { ai: 3, servicenow: 1, salesforce: 0 }
      },
      {
        id: 'q1-c2',
        text: 'Designing digital workflows that make organizations more efficient',
        value: { ai: 0, servicenow: 3, salesforce: 1 }
      },
      {
        id: 'q1-c3',
        text: 'Managing customer relationships and improving sales processes',
        value: { ai: 0, servicenow: 1, salesforce: 3 }
      },
      {
        id: 'q1-c4',
        text: 'Creating innovative solutions to complex problems',
        value: { ai: 2, servicenow: 2, salesforce: 1 }
      }
    ]
  },
  {
    id: 'q2',
    type: 'multiple-choice',
    category: 'interests',
    question: 'What aspect of technology excites you the most?',
    icon: Rocket,
    choices: [
      {
        id: 'q2-c1',
        text: 'Teaching machines to think and learn like humans',
        value: { ai: 3, servicenow: 0, salesforce: 0 }
      },
      {
        id: 'q2-c2',
        text: 'Creating systems that automate repetitive business processes',
        value: { ai: 1, servicenow: 3, salesforce: 1 }
      },
      {
        id: 'q2-c3',
        text: 'Building tools that help people connect and collaborate better',
        value: { ai: 1, servicenow: 1, salesforce: 3 }
      },
      {
        id: 'q2-c4',
        text: 'Solving real-world problems with innovative tech solutions',
        value: { ai: 2, servicenow: 2, salesforce: 2 }
      }
    ]
  },
  {
    id: 'q3',
    type: 'scenario',
    category: 'work-styles',
    question: "Imagine you're given a complex project at work. How would you approach it?",
    icon: Cog,
    choices: [
      {
        id: 'q3-c1',
        text: 'Research thoroughly, analyze all available data, and develop an innovative solution based on patterns and insights',
        value: { ai: 3, servicenow: 1, salesforce: 0 }
      },
      {
        id: 'q3-c2',
        text: 'Map out the existing processes, identify bottlenecks, and design a more efficient workflow system',
        value: { ai: 0, servicenow: 3, salesforce: 1 }
      },
      {
        id: 'q3-c3',
        text: 'Focus on stakeholder needs, build relationships with key decision-makers, and develop a solution with their input',
        value: { ai: 0, servicenow: 1, salesforce: 3 }
      },
      {
        id: 'q3-c4',
        text: 'Collaborate with team members, combining technical expertise with practical implementation strategies',
        value: { ai: 1, servicenow: 2, salesforce: 2 }
      }
    ]
  },
  {
    id: 'q4',
    type: 'multiple-choice',
    category: 'work-styles',
    question: 'In a team setting, which role do you naturally gravitate toward?',
    icon: Users,
    choices: [
      {
        id: 'q4-c1',
        text: 'The analytical problem-solver who dives deep into data and technical challenges',
        value: { ai: 3, servicenow: 1, salesforce: 0 }
      },
      {
        id: 'q4-c2',
        text: 'The systems thinker who organizes and improves how work gets done',
        value: { ai: 1, servicenow: 3, salesforce: 0 }
      },
      {
        id: 'q4-c3',
        text: 'The relationship builder who connects people and communicates effectively',
        value: { ai: 0, servicenow: 1, salesforce: 3 }
      },
      {
        id: 'q4-c4',
        text: 'The strategic visionary who sees the big picture and future possibilities',
        value: { ai: 2, servicenow: 1, salesforce: 2 }
      }
    ]
  },
  {
    id: 'q5',
    type: 'likert-scale',
    category: 'work-styles',
    question: 'I prefer working on projects that have:',
    icon: Briefcase,
    choices: [
      {
        id: 'q5-c1',
        text: 'Complex technical challenges requiring deep analysis',
        value: { ai: 3, servicenow: 1, salesforce: 0 }
      },
      {
        id: 'q5-c2',
        text: 'Clear processes and systems that can be optimized',
        value: { ai: 0, servicenow: 3, salesforce: 1 }
      },
      {
        id: 'q5-c3',
        text: 'Direct impact on customer satisfaction and business growth',
        value: { ai: 0, servicenow: 1, salesforce: 3 }
      },
      {
        id: 'q5-c4',
        text: 'Innovative applications of cutting-edge technologies',
        value: { ai: 2, servicenow: 1, salesforce: 1 }
      }
    ]
  },
  {
    id: 'q6',
    type: 'tradeoff',
    category: 'values',
    question: 'Which of these work values is most important to you?',
    icon: Heart,
    choices: [
      {
        id: 'q6-c1',
        text: "Pushing the boundaries of what's technically possible",
        value: { ai: 3, servicenow: 1, salesforce: 0 }
      },
      {
        id: 'q6-c2',
        text: 'Creating order and efficiency in complex environments',
        value: { ai: 0, servicenow: 3, salesforce: 1 }
      },
      {
        id: 'q6-c3',
        text: 'Building relationships and helping others succeed',
        value: { ai: 0, servicenow: 1, salesforce: 3 }
      },
      {
        id: 'q6-c4',
        text: 'Continuous learning and professional growth',
        value: { ai: 1, servicenow: 1, salesforce: 1 }
      }
    ]
  },
  {
    id: 'q7',
    type: 'multiple-choice',
    category: 'traits',
    question: 'How would others describe your thinking style?',
    icon: Brain,
    choices: [
      {
        id: 'q7-c1',
        text: 'Analytical and logical, focused on data and patterns',
        value: { ai: 3, servicenow: 1, salesforce: 0 }
      },
      {
        id: 'q7-c2',
        text: 'Systematic and organized, focused on process and structure',
        value: { ai: 0, servicenow: 3, salesforce: 1 }
      },
      {
        id: 'q7-c3',
        text: 'People-oriented and intuitive, focused on relationships',
        value: { ai: 0, servicenow: 1, salesforce: 3 }
      },
      {
        id: 'q7-c4',
        text: 'Creative and visionary, focused on possibilities',
        value: { ai: 2, servicenow: 0, salesforce: 2 }
      }
    ]
  },
  {
    id: 'q8',
    type: 'scenario',
    category: 'interests',
    question: 'If you could solve one of these challenges with technology, which would you choose?',
    icon: HandHelping,
    choices: [
      {
        id: 'q8-c1',
        text: 'Teaching computers to understand and generate human language',
        value: { ai: 3, servicenow: 0, salesforce: 0 }
      },
      {
        id: 'q8-c2',
        text: 'Streamlining IT operations across a large organization',
        value: { ai: 0, servicenow: 3, salesforce: 0 }
      },
      {
        id: 'q8-c3',
        text: 'Helping businesses better understand and serve their customers',
        value: { ai: 0, servicenow: 1, salesforce: 3 }
      },
      {
        id: 'q8-c4',
        text: 'Using technology to make everyday tasks more efficient',
        value: { ai: 1, servicenow: 2, salesforce: 1 }
      }
    ]
  },
  {
    id: 'q9',
    type: 'multiple-choice',
    category: 'values',
    question: 'Which of these achievements would make you most proud?',
    icon: Award,
    choices: [
      {
        id: 'q9-c1',
        text: 'Developing an algorithm that makes breakthrough predictions',
        value: { ai: 3, servicenow: 0, salesforce: 0 }
      },
      {
        id: 'q9-c2',
        text: 'Implementing a system that saves thousands of work hours',
        value: { ai: 0, servicenow: 3, salesforce: 1 }
      },
      {
        id: 'q9-c3',
        text: 'Building client relationships that drive business growth',
        value: { ai: 0, servicenow: 0, salesforce: 3 }
      },
      {
        id: 'q9-c4',
        text: 'Leading a team that delivers an innovative solution',
        value: { ai: 1, servicenow: 1, salesforce: 2 }
      }
    ]
  },
  {
    id: 'q10',
    type: 'tradeoff',
    category: 'values',
    question: 'In your career, which is most important to you?',
    icon: Medal,
    choices: [
      {
        id: 'q10-c1',
        text: 'Being at the forefront of technological innovation',
        value: { ai: 3, servicenow: 1, salesforce: 0 }
      },
      {
        id: 'q10-c2',
        text: 'Creating systems that make organizations more efficient',
        value: { ai: 0, servicenow: 3, salesforce: 0 }
      },
      {
        id: 'q10-c3',
        text: 'Helping businesses build stronger customer relationships',
        value: { ai: 0, servicenow: 0, salesforce: 3 }
      },
      {
        id: 'q10-c4',
        text: 'Continuously learning and mastering new skills',
        value: { ai: 1, servicenow: 1, salesforce: 1 }
      }
    ]
  },
  {
    id: 'q11',
    type: 'likert-scale',
    category: 'traits',
    question: 'Rate how well this statement describes you: "I enjoy diving deep into technical concepts and theoretical ideas."',
    icon: Brain,
    choices: [
      {
        id: 'q11-c1',
        text: 'Strongly Agree',
        value: { ai: 3, servicenow: 1, salesforce: 0 }
      },
      {
        id: 'q11-c2',
        text: 'Agree',
        value: { ai: 2, servicenow: 1, salesforce: 0 }
      },
      {
        id: 'q11-c3',
        text: 'Neutral',
        value: { ai: 1, servicenow: 1, salesforce: 1 }
      },
      {
        id: 'q11-c4',
        text: 'Disagree',
        value: { ai: 0, servicenow: 1, salesforce: 2 }
      },
      {
        id: 'q11-c5',
        text: 'Strongly Disagree',
        value: { ai: 0, servicenow: 1, salesforce: 3 }
      }
    ]
  },
  {
    id: 'q12',
    type: 'likert-scale',
    category: 'traits',
    question: 'Rate how well this statement describes you: "I prefer structured environments with clear processes and guidelines."',
    icon: Cog,
    choices: [
      {
        id: 'q12-c1',
        text: 'Strongly Agree',
        value: { ai: 0, servicenow: 3, salesforce: 2 }
      },
      {
        id: 'q12-c2',
        text: 'Agree',
        value: { ai: 0, servicenow: 2, salesforce: 1 }
      },
      {
        id: 'q12-c3',
        text: 'Neutral',
        value: { ai: 1, servicenow: 1, salesforce: 1 }
      },
      {
        id: 'q12-c4',
        text: 'Disagree',
        value: { ai: 2, servicenow: 0, salesforce: 0 }
      },
      {
        id: 'q12-c5',
        text: 'Strongly Disagree',
        value: { ai: 3, servicenow: 0, salesforce: 0 }
      }
    ]
  },
  {
    id: 'q13',
    type: 'likert-scale',
    category: 'traits',
    question: 'Rate how well this statement describes you: "I get energy from interacting with people and building relationships."',
    icon: UserRound,
    choices: [
      {
        id: 'q13-c1',
        text: 'Strongly Agree',
        value: { ai: 0, servicenow: 1, salesforce: 3 }
      },
      {
        id: 'q13-c2',
        text: 'Agree',
        value: { ai: 0, servicenow: 1, salesforce: 2 }
      },
      {
        id: 'q13-c3',
        text: 'Neutral',
        value: { ai: 1, servicenow: 1, salesforce: 1 }
      },
      {
        id: 'q13-c4',
        text: 'Disagree',
        value: { ai: 2, servicenow: 1, salesforce: 0 }
      },
      {
        id: 'q13-c5',
        text: 'Strongly Disagree',
        value: { ai: 3, servicenow: 0, salesforce: 0 }
      }
    ]
  },
  {
    id: 'q14',
    type: 'scenario',
    category: 'work-styles',
    question: 'When learning a new technology, what approach do you typically take?',
    icon: TrendingUp,
    choices: [
      {
        id: 'q14-c1',
        text: 'Study the underlying principles and theories first, then experiment',
        value: { ai: 3, servicenow: 1, salesforce: 0 }
      },
      {
        id: 'q14-c2',
        text: 'Follow tutorials and best practices to understand the standard approaches',
        value: { ai: 0, servicenow: 3, salesforce: 1 }
      },
      {
        id: 'q14-c3',
        text: 'Focus on practical applications and how it can solve real-world problems',
        value: { ai: 1, servicenow: 1, salesforce: 3 }
      },
      {
        id: 'q14-c4',
        text: 'Join communities and learn collaboratively with others',
        value: { ai: 1, servicenow: 1, salesforce: 2 }
      }
    ]
  },
  {
    id: 'q15',
    type: 'multiple-choice',
    category: 'interests',
    question: 'Which of these technology trends most excites you?',
    icon: Rocket,
    choices: [
      {
        id: 'q15-c1',
        text: 'Machine learning and neural networks',
        value: { ai: 3, servicenow: 0, salesforce: 0 }
      },
      {
        id: 'q15-c2',
        text: 'Enterprise digital transformation and process automation',
        value: { ai: 0, servicenow: 3, salesforce: 1 }
      },
      {
        id: 'q15-c3',
        text: 'Customer experience platforms and relationship management',
        value: { ai: 0, servicenow: 0, salesforce: 3 }
      },
      {
        id: 'q15-c4',
        text: 'Cloud computing and software-as-a-service',
        value: { ai: 1, servicenow: 1, salesforce: 1 }
      }
    ]
  }
];
