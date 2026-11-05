export interface SkillGroup {
  group: string;
  items: string[];
}

// Skills displayed in the homepage tech-stack showcase.
export const skills: SkillGroup[] = [
  {
    group: 'AI / ML & Data',
    items: ['Python', 'Scikit-Learn', 'Machine Learning', 'R', 'ADK', 'Gemini Enterprise', 'Agentic workflows'],
  },
  {
    group: 'Product',
    items: ['Figma', 'Notion', 'Qualtrics', 'User Interviews', 'Roadmapping', 'Workflow Automation'],
  },
];
