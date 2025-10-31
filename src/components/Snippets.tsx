// import { useState } from "react";
import "../styles/components/GeolocationSlides.scss";
// import SnippetExamplesSection from "./SnippetExamplesSection";

// interface DemoResults {
//   extractLinks?: {
//     count: number;
//     links: Array<{ text: string; href: string; target: string }>;
//   };
//   copyText?: { charCount: number; wordCount: number };
//   highlight?: "active" | "removed";
//   observer?: "active" | null;
//   enhancement?: "active" | null;
// }

export default function Snippets() {
  // const [demoResults, setDemoResults] = useState<DemoResults>({});
  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>Snippets: Reusable JavaScript in DevTools</h4>
        <p className="text-sm text-google-gray mb-4">
          Snippets in Chrome DevTools let you write, save, and run reusable
          JavaScript code directly inside the browser — almost like mini scripts
          or lightweight extensions. They are great for automating repetitive
          tasks, debugging, experimenting, or enhancing pages on the fly.
        </p>

        <div className="mb-4">
          <h5 className="font-medium mb-2">Why Snippets are useful</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>
              You can save commonly used scripts and run them anytime on any
              webpage.
            </li>
            <li>
              Perfect for quick automation, testing ideas, scraping content, or
              adding temporary UI helpers.
            </li>
            <li>
              They persist in the browser—so once saved, your snippets remain
              available for future use.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="font-medium mb-2">How they work</h5>
          <ol className="list-decimal pl-5 text-sm text-google-gray space-y-1">
            <li>
              Open the <strong>Sources</strong> panel in DevTools and go to the{" "}
              <strong>Snippets</strong> section.
            </li>
            <li>
              Create a new snippet, write your JavaScript, and run it with a
              single click.
            </li>
            <li>
              Snippets run in the context of the current page, just like code in
              the console, but they stay saved for reuse.
            </li>
          </ol>
        </div>

        <div className="mb-4">
          <h5 className="font-medium mb-2">
            Examples of what you can do with snippets
          </h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>Extract all links from the current page</li>
            <li>Copy all visible text in one go</li>
            <li>Highlight layout elements or spacing visually for debugging</li>
            <li>
              Auto-monitor page changes using a MutationObserver and send them
              to an API
            </li>
            <li>
              <em>
                (This can act like a mini custom extension — built for your
                personal workflow!)
              </em>
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border border-google-border bg-white p-4">
          <h5 className="font-medium mb-2">Keep in mind</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>Snippets are manual—they don't run automatically.</li>
            <li>You must open DevTools to trigger them.</li>
          </ul>
        </div>

        {/* <SnippetExamplesSection
          demoResults={demoResults}
          setDemoResults={setDemoResults}
        /> */}
      </div>

      <div className="sensors-right">
        <div className="sensors-screenshots mt-0">
          <div className="screenshot-container">
            <img
              src="/snippet.png"
              alt="Chrome DevTools Snippets panel showing how to create and run snippets"
              className="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
