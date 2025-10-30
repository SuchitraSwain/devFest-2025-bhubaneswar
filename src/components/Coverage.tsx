export default function Coverage() {
  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>Coverage: Find unused JavaScript and CSS</h4>
        <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
          <li>
            Large chunks of your biggest JavaScript file can be unused on
            initial load.
          </li>
          <li>Updates live as you interact—see usage change in real time.</li>
          <li>
            Easily spot code or third‑party libraries to lazy‑load or remove to
            cut website size.
          </li>
        </ul>

        <ol className="list-decimal pl-5 text-sm text-google-gray mt-3 space-y-1">
          <li>Open Command Menu (Cmd/Ctrl+Shift+P) → type "coverage".</li>
          <li>
            Select <strong>Show Coverage</strong> to open the panel.
          </li>
          <li>
            Click <strong>Start instrumenting coverage and reload page</strong>.
          </li>
          <li>
            Click a row to jump to <strong>Sources</strong> with unused ranges
            highlighted in red.
          </li>
        </ol>

        <div className="mt-4 rounded-lg border border-google-border bg-white p-4">
          <h5 className="font-medium mb-2">Pro tips</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>Use the filter to focus on CSS or JavaScript only.</li>
            <li>
              Click the column headers to sort by <em>Unused Bytes</em> to spot
              the heaviest wins first.
            </li>
          </ul>
        </div>
      </div>

      <div className="sensors-right">
        <div className="sensors-screenshots mt-0">
          <div className="screenshot-container">
            <img
              src="/coverage.png"
              alt="Coverage panel in Chrome DevTools"
              className="screenshot"
            />
          </div>
          <div className="screenshot-container">
            <img
              src="/coverage1.png"
              alt="Coverage table with unused bytes"
              className="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
