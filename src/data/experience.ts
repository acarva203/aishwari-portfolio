export interface Role {
  role: string;
  projectId?: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
  poster?: { src: string; title: string; alt: string };
  tools?: string[]; // shown as chips when the role is expanded
}

// Real experience, most recent first.
export const experience: Role[] = [
  {
    role: 'AI Engineer Intern',
    org: 'Stanford University',
    location: 'Redwood City, CA',
    period: 'June 2026 – Present',
    tools: ['Gemini Enterprise', 'AI Agents', 'Technical Documentation'],
    points: [
      'Assisting in AI account (Claude, Gemini, ChatGPT) rollout to entire Stanford community by creating custom technical documentation',
      'Built a custom AI agent in Gemini Enterprise that will automatically match researcher and college eligibility for grants saving over 10 hours/month',
    ],
  },
  {
    role: 'User Experience Researcher',
    projectId: 'verazoi-ux-research',
    org: 'Verazoi (PLASMA Accelerator)',
    period: 'Feb 2026 – Present',
    tools: ['Qualtrics', 'Calendly', 'User Interviews'],
    points: [
      'Design and distribute customer research surveys in Qualtrics and conduct in-depth user interviews to surface actionable insights, shaping product direction and messaging.',
      'Built an automated interview scheduling workflow that integrates Qualtrics and Calendly, reducing manual coordination overhead by 2+ hours/week',
    ],
  },
  {
    role: 'Research Assistant',
    poster: {
      src: '/pairr-conference-poster.png',
      title: 'PAIRR: Building AI Literacy through Writing Courses',
      alt: 'PAIRR conference poster showing the study method, AI literacy results, and conclusions about peer and AI feedback in writing courses.',
    },
    projectId: 'ai-impact-student-writing',
    org: 'PAIRR — Peer & AI Review + Reflection',
    period: 'Jan 2026 – Present',
    location: 'UC Davis',
    tools: ['Python', 'Qualtrics', 'Qualitative Analysis'],
    points: [
      'Processed and cleaned survey data from 500+ college students to measure AI attitude shifts before and after English course completion, revealing perception changes driven by specialized AI interventions.',
      'Transcribed and analyzed 20+ qualitative interviews to assess how AI tools impacted student writing ability and course performance, quantifying impact on academic outcomes.',
      'Presented research poster at Undergraduate Research Conference on correlation between AI usage and AI literacy by analyzing pre- and post-intervention survey in R',
    ],
  },
];
