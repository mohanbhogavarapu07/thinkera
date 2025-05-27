
export interface ResultProfile {
  id: string;
  title: string;
  badge: string;
  description: string;
  strengths: string[];
  roles: string[];
  traits: string[];
}

export const results: Record<string, ResultProfile> = {
  ai: {
    id: 'ai',
    title: 'AI Pathfinder',
    badge: 'AI Pathfinder',
    description: 'You show a strong affinity for artificial intelligence and machine learning. Your analytical mindset, love for complex problem-solving, and interest in pushing technological boundaries align perfectly with a career in AI.',
    strengths: [
      'Deep analytical thinking',
      'Pattern recognition',
      'Curiosity about cutting-edge technology',
      'Comfort with mathematical concepts',
      'Innovative problem-solving'
    ],
    roles: [
      'Machine Learning Engineer',
      'AI Research Scientist',
      'Data Scientist',
      'NLP Engineer',
      'Computer Vision Specialist'
    ],
    traits: [
      'You enjoy exploring complex technical problems',
      'You have a natural curiosity about how things work',
      "You're comfortable with ambiguity and theoretical concepts",
      "You're driven by innovation and breakthroughs"
    ]
  },
  servicenow: {
    id: 'servicenow',
    title: 'ServiceNow Architect',
    badge: 'ServiceNow Architect',
    description: 'You have a natural talent for systems thinking and process optimization. Your structured approach to problem-solving and desire to create efficient workflows make you an excellent fit for a career in ServiceNow.',
    strengths: [
      'Systems and process thinking',
      'Organizational skills',
      'Attention to detail',
      'Practical problem-solving',
      'Implementation focus'
    ],
    roles: [
      'ServiceNow Developer',
      'Platform Administrator',
      'Implementation Specialist',
      'Solution Architect',
      'ITSM Consultant'
    ],
    traits: [
      'You thrive in structured environments with clear guidelines',
      'You enjoy creating order from complexity',
      "You're focused on practical, efficient solutions",
      'You excel at understanding and improving business processes'
    ]
  },
  salesforce: {
    id: 'salesforce',
    title: 'Salesforce Navigator',
    badge: 'Salesforce Navigator',
    description: 'Your people-oriented approach and business focus make you naturally suited for a career in Salesforce. Your strengths in relationship building, communication, and customer-focused solutions align perfectly with this dynamic field.',
    strengths: [
      'Relationship building',
      'Business acumen',
      'Customer focus',
      'Communication skills',
      'Solution orientation'
    ],
    roles: [
      'Salesforce Administrator',
      'Salesforce Developer',
      'Sales Operations Specialist',
      'CRM Consultant',
      'Solutions Architect'
    ],
    traits: [
      "You're naturally people-oriented and collaborative",
      'You understand business needs and customer perspectives',
      'You communicate effectively across technical and non-technical teams',
      "You're focused on delivering value and improving experiences"
    ]
  }
};

export const calculateResults = (answers: Record<string, string>) => {
  // Initialize scores
  const scores = {
    ai: 0,
    servicenow: 0,
    salesforce: 0
  };

  // Calculate total score for each path based on answers
  Object.entries(answers).forEach(([questionId, choiceId]) => {
    // Find the question
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    // Find the choice
    const choice = question.choices.find(c => c.id === choiceId);
    if (!choice) return;

    // Add values to scores
    scores.ai += choice.value.ai;
    scores.servicenow += choice.value.servicenow;
    scores.salesforce += choice.value.salesforce;
  });

  // Determine primary and secondary matches
  const sortedPaths = Object.entries(scores)
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
    .map(([path]) => path);

  const primaryMatch = sortedPaths[0];
  const secondaryMatch = sortedPaths[1];
  
  // Calculate match percentages (simplified)
  const total = scores.ai + scores.servicenow + scores.salesforce;
  const percentages = {
    ai: Math.round((scores.ai / total) * 100),
    servicenow: Math.round((scores.servicenow / total) * 100),
    salesforce: Math.round((scores.salesforce / total) * 100)
  };

  return {
    primaryMatch,
    secondaryMatch,
    scores,
    percentages
  };
};

// Import questions for the calculate function
import { questions } from './questions';
