import "../styles/components/GeolocationSlides.scss";

export default function RenderingTab() {
  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>Rendering: Design under Real‑world Conditions</h4>
        <p className="text-sm text-google-gray mb-4">
          Validate paint/compositing, scroll performance, color scheme prefs,
          and accessibility visuals—all without changing your code.
        </p>

        <ol className="list-decimal pl-5 text-sm text-google-gray mt-3 space-y-2">
          <li>
            Open <strong>Rendering</strong> from Command Menu (Ctrl/Cmd+Shift+P
            → "Show Rendering").
          </li>
          <li>
            Try these quick scenarios:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                <strong>Layer borders</strong>: visualize paint and compositing
                boundaries.
              </li>
              <li>
                <strong>Scroll performance</strong>: highlight potential jank
                areas.
              </li>
              <li>
                <strong>Preferred color scheme</strong>: preview Light/Dark
                mode.
              </li>
              <li>
                <strong>Emulate vision deficiencies</strong>: check
                accessibility impact.
              </li>
            </ul>
          </li>
          <li>
            Iterate on styles and layout while immediately seeing the effects.
          </li>
        </ol>

        <div className="mt-4 rounded-lg border border-google-border bg-white p-4">
          <h5 className="font-medium mb-2">Great for</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>Debugging repaint/reflow issues and compositing artifacts</li>
            <li>Ensuring smooth scrolling and responsive UI</li>
            <li>Designing for Light/Dark themes with confidence</li>
            <li>Improving accessibility for users with visual impairments</li>
          </ul>
        </div>
      </div>

      <div className="sensors-right">
        <div className="sensors-screenshots mt-0">
          <div className="screenshot-container">
            <style>{`
              .preview-card {
                --pc-bg: #ffffff;
                --pc-surface: #ffffff;
                --pc-border: #e5e7eb;
                --pc-muted: #6b7280;
                --pc-text: #111827;
                --pc-primary: #1d4ed8;
              }
              @media (prefers-color-scheme: dark) {
                .preview-card {
                  --pc-bg: #0b0f17;
                  --pc-surface: #111827;
                  --pc-border: #1f2937;
                  --pc-muted: #9ca3af;
                  --pc-text: #f9fafb;
                  --pc-primary: #2563eb;
                }
              }
            `}</style>
            <div
              className="preview-card rounded-lg border p-4"
              style={{
                backgroundColor: "var(--pc-bg)",
                borderColor: "var(--pc-border)",
                maxWidth: 420,
                margin: "0 auto",
              }}
            >
              <div
                className="rounded-md p-4 border px-12"
                style={{
                  backgroundColor: "var(--pc-surface)",
                  borderColor: "var(--pc-border)",
                }}
              >
                <div className="text-sm" style={{ color: "var(--pc-muted)" }}>
                  Card title
                </div>
                <div
                  className="mt-1 text-lg font-semibold"
                  style={{ color: "var(--pc-text)" }}
                >
                  Hello, world
                </div>
                <button
                  className="mt-3 px-3 py-1.5 rounded"
                  style={{
                    backgroundColor: "var(--pc-primary)",
                    color: "#ffffff",
                  }}
                >
                  Primary action
                </button>
              </div>
            </div>
          </div>
          <div className="screenshot-container">
            <img
              src="/rendering.png"
              alt="Chrome DevTools Rendering panel overview"
              className="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
