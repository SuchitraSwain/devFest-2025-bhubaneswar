import React from "react";
import "../styles/components/GeolocationSlides.scss";

function AutoClosingDebug(): React.ReactElement {
  return (
    <div className="slide sensors-slide">
      <div className="slide-header">
        <h2>02: 🧰 Debugging Auto‑Closing Elements</h2>
        <p>Keep menus/tooltips open or pause the page to inspect safely.</p>
      </div>

      <div className="sensors-panel-section">
        <p>
          The techniques below help you freeze or retain transient UI
          (dropdowns, menus, tooltips) so you can inspect DOM and styles without
          the element disappearing.
        </p>

        <div className="sensors-layout">
          <div className="sensors-explanation">
            <h4>Quick playbook:</h4>
            <ol>
              <li>
                <strong>Emulate Focus Mode</strong>: Cmd/Ctrl+Shift+P → "emulate
                focus" → Emulate a focused page
              </li>
              <li>
                <strong>Pause script execution</strong>: Open the UI and press
                F8 (or Ctrl+/)
              </li>
              <li>
                <strong>Event listener breakpoints</strong>: Sources → Event
                Listener Breakpoints → enable mouseleave or blur
              </li>
              <li>
                <strong>Time‑boxed debugger()</strong> in Console:
                <ul>
                  <li className="mt-2">
                    <code>{"setTimeout(() => { debugger; }, 3000);"}</code>
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="sensors-right">
            <div className="sensors-screenshots">
              <div className="screenshot-container">
                <img
                  src="/autoClosing.png"
                  alt="DevTools command menu showing Emulate a focused page"
                  className="screenshot"
                />
              </div>
              <div className="screenshot-container">
                <video
                  src="/autoClosing.mp4"
                  className="screenshot"
                  controls
                  playsInline
                  muted
                  loop
                />
              </div>
              <p className="image-caption">
                Tip: Use Rendering panel or performance throttling to slow UI
                changes when reproducing.
              </p>
            </div>
          </div>
        </div>

        {/* Hidden detailed cards retained for parity in structure if needed later */}
        <div className="bg-white border border-google-border rounded-lg p-5 shadow-sm hidden">
          <h3 className="text-lg font-semibold mb-3">
            Method 1: Emulate Focus Mode
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-google-dark">
            <li>
              Open Command Menu: Cmd+Shift+P (Mac) or Ctrl+Shift+P (Win/Linux)
            </li>
            <li>Type “emulate focus” → select “Emulate a focused page”.</li>
            <li>Now menus stay open when DevTools is focused.</li>
          </ul>
        </div>

        <div className="bg-white border border-google-border rounded-lg p-5 shadow-sm hidden">
          <h3 className="text-lg font-semibold mb-3">
            Method 2: Pause Script Execution
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-google-dark">
            <li>Go to the Sources tab.</li>
            <li>Trigger the UI (e.g., open the dropdown).</li>
            <li>Press F8 (or Ctrl+/) to pause and freeze the DOM.</li>
          </ul>
        </div>

        <div className="bg-white border border-google-border rounded-lg p-5 shadow-sm hidden">
          <h3 className="text-lg font-semibold mb-3">
            Method 3: Event Listener Breakpoints
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-google-dark">
            <li>In Sources → expand “Event Listener Breakpoints”.</li>
            <li>
              Under Mouse/Control, check the event that closes it
              (mouseleave/blur).
            </li>
            <li>DevTools pauses when the event fires.</li>
          </ul>
        </div>

        <div className="bg-white border border-google-border rounded-lg p-5 shadow-sm hidden">
          <h3 className="text-lg font-semibold mb-3">
            Method 4: Time‑boxed debugger()
          </h3>
          <p className="text-sm text-google-dark mb-2">
            Run this in Console, then open the element before it hits:
          </p>
          <pre className="bg-google-light-gray text-xs p-3 rounded overflow-auto">{`setTimeout(() => { debugger; }, 3000);`}</pre>
        </div>
      </div>
    </div>
  );
}

export default AutoClosingDebug;
