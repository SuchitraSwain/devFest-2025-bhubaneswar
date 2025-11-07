export interface AIInnovation {
  id: number;
  title: string;
  description?: string;
}

export const AI_INNOVATIONS: AIInnovation[] = [
  {
    id: 1,
    title: "Enable AI Innovations",
    description:
      "Chrome DevTools now integrates AI capabilities to help you debug faster, understand code better, and improve performance insights.",
  },
  {
    id: 2,
    title: "Console Insights",
    description:
      "AI analyzes console errors and provides actionable suggestions, context-aware explanations, and recommendations for fixing common issues.",
  },
  {
    id: 3,
    title: "AI Assistance for styling",
    description:
      "AI-powered assistance across DevTools panels including Styling, Performance, Network, and Sources for improved debugging and optimization.",
  },
];

