export interface Role {
  role: string;
  projectId?: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
  tools?: string[]; // shown as chips when the role is expanded
  highlight?: boolean; // surfaced in the shortened homepage list
}

// Real experience, most recent first.
export const experience: Role[] = [
  {
    role: 'AI Engineer Intern',
    org: 'Stanford University',
    location: 'Redwood City, CA',
    period: 'June 2026 – Present',
    highlight: true,
    tools: ['Gemini Enterprise', 'AI Agents', 'Technical Documentation'],
    points: [
      'Creating custom technical documentation to support the rollout of Claude, Gemini, and ChatGPT accounts across the Stanford community.',
      'Built a custom AI agent in Gemini Enterprise to automatically match researcher and college eligibility for grants, saving over 10 hours per month.',
    ],
  },
  {
    role: 'User Experience Researcher',
    projectId: 'verazoi-ux-research',
    org: 'Verazoi (PLASMA Accelerator)',
    period: 'Feb 2026 – Present',
    highlight: true,
    tools: ['Qualtrics', 'Calendly', 'User Interviews'],
    points: [
      'Conducting customer research interviews and distributing research surveys.',
      'Built a workflow automating interview scheduling with Qualtrics and Calendly.',
    ],
  },
  {
    role: 'Research Assistant',
    projectId: 'ai-impact-student-writing',
    org: 'PAIRR — Peer & AI Review + Reflection',
    period: 'Jan 2026 – Present',
    location: 'UC Davis',
    highlight: true,
    tools: ['Python', 'Qualtrics', 'Qualitative Analysis'],
    points: [
      'Processed and cleaned survey data from 500+ college students to measure AI attitude shifts.',
      'Transcribed and analyzed qualitative interviews assessing AI tools’ impact on student writing.',
    ],
  },
];
