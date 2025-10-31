export interface DevtoolFeature {
  id: number;
  title: string;
  description?: string;
}

export const DEVTOOLS_FEATURES: DevtoolFeature[] = [
  {
    id: 1,
    title: "CSS Shadow Editors",
    description:
      "Tweak multiple layered drop-shadows with live previews in the Styles pane.",
  },
  {
    id: 2,
    title: "Logpoints: Console Logs Without Changing Your Code",
    description:
      "Logpoints let you log values in the Console during runtime without modifying your source code or stopping execution.",
  },

  {
    id: 3,
    title: "Coverage: Find unused JavaScript and CSS",
    description:
      "The Coverage panel helps you find unused JavaScript and CSS code. Removing unused code can speed up your page load and save the mobile data of your users.",
  },

  {
    id: 4,
    title: "Break on DOM Modification",
    description:
      "Debug mysterious DOM changes by breaking exactly when elements are modified, added, or removed. Perfect for tracking down flickering issues and unexpected UI jumps in third-party code.",
  },
  {
    id: 5,
    title: "Rendering: Visualize Paint & Accessibility States",
    description:
      "The Rendering panel helps you debug compositing, scroll performance, color schemes (Light/Dark), and simulate visual impairments to improve accessibility and UX.",
  },
  {
    id: 6,
    title: "CSS Overview: Identify potential CSS improvements",
    description:
      "The CSS Overview panel helps you analyze and improve the consistency and quality of your website's design. It gives a clear snapshot of how CSS is being used across your page, helping you identify inconsistencies, unused declarations, and accessibility issues.",
  },
  {
    id: 7,
    title: "Capture Node Screenshot",
    description:
      "Take a screenshot of a specific HTML element directly without needing any third-party tools. Perfect for documentation, UI reviews, bug reporting, or capturing the entire scrollable page in one image.",
  },
];
