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
];
