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
];
