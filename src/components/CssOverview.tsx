import "../styles/components/GeolocationSlides.scss";

export default function CssOverview() {
  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>CSS Overview: Identify Potential CSS Improvements</h4>
        <p className="text-sm text-google-gray mb-4">
          The CSS Overview panel helps you analyze and improve the consistency and quality of your website's design. It gives a clear snapshot of how CSS is being used across your page.
        </p>

        <div className="mb-4">
          <h5 className="font-medium mb-2">Key Highlights</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>
              Quickly identify inconsistencies in your design such as too many colors, fonts, or font sizes.
            </li>
            <li>
              View a breakdown of:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Colors (text, background, borders, gradients)</li>
                <li>Font families, font sizes, and line-heights used across the page</li>
                <li>Media queries and selectors</li>
              </ul>
            </li>
            <li>
              Helps you maintain a clean, consistent, and scalable design system.
            </li>
            <li>
              Easily jump to the elements using each specific style for quick fixing.
            </li>
            <li>
              Detect issues such as:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Low contrast text (accessibility concern)</li>
                <li>Unused CSS declarations that can be cleaned up to reduce CSS bloat</li>
              </ul>
            </li>
          </ul>
        </div>

        <ol className="list-decimal pl-5 text-sm text-google-gray mt-3 space-y-2">
          <li>
            Open <strong>CSS Overview</strong> from Command Menu (Ctrl/Cmd+Shift+P → "Show CSS Overview").
          </li>
          <li>
            Click <strong>Capture overview</strong> to generate a report analyzing your page's CSS.
          </li>
          <li>
            Review the breakdown:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                <strong>Overview summary</strong>: Total elements, stylesheet rules, selectors, colors, fonts, and media queries.
              </li>
              <li>
                <strong>Colors</strong>: See all background, text, border, and gradient colors with usage counts.
              </li>
              <li>
                <strong>Font info</strong>: Analyze font families, sizes, and line-heights to spot inconsistencies.
              </li>
              <li>
                <strong>Unused declarations</strong>: Identify CSS properties that can be removed.
              </li>
              <li>
                <strong>Media queries</strong>: Review responsive breakpoints used across your stylesheets.
              </li>
            </ul>
          </li>
          <li>
            Click any item to jump directly to the elements using that style for quick fixing.
          </li>
        </ol>

        <div className="mt-4 rounded-lg border border-google-border bg-white p-4">
          <h5 className="font-medium mb-2">Why it's useful</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>Improves visual consistency</li>
            <li>Reduces CSS file size</li>
            <li>Enhances accessibility and readability</li>
            <li>Helps enforce design system best practices</li>
          </ul>
        </div>
      </div>

      <div className="sensors-right">
        <div className="sensors-screenshots mt-0">
          <div className="screenshot-container">
            <img
              src="/cssOverview.png"
              alt="CSS Overview panel in Chrome DevTools showing the overview summary and color breakdown"
              className="screenshot"
            />
          </div>
          <div className="screenshot-container">
            <img
              src="/cssOverview1.png"
              alt="CSS Overview command palette showing how to open the panel"
              className="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

