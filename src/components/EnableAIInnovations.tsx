import "../styles/components/GeolocationSlides.scss";

export default function EnableAIInnovations() {
  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>How to Enable AI Innovations:</h4>
        <ol>
          <li>
            <strong>Open Chrome DevTools</strong> (F12 or right-click → Inspect)
          </li>
          <li>
            <strong>Go to Settings</strong> (gear icon in DevTools)
          </li>
          <li>
            <strong>Navigate to "AI innovations"</strong> in the left sidebar
          </li>
          <li>
            <strong>Toggle on the features</strong> you want to use:
            <ul>
              <li>Console Insights</li>
              <li>AI assistance</li>
              <li>Auto annotations</li>
            </ul>
          </li>
        </ol>

        <div className="pro-tip mt-6">
          <h5>⚡ AI Features Available:</h5>
          <ul className="!pl-6">
            <li>
              <strong>Console Insights:</strong> Helps you understand and fix
              console warnings and errors
            </li>
            <li>
              <strong>AI assistance:</strong> Get help with understanding CSS
              styles, network requests, performance, and files
            </li>
            <li>
              <strong>Auto annotations:</strong> Automatically generate titles
              for performance trace annotations
            </li>
          </ul>
        </div>
      </div>

      <div className="sensors-right">
        <div className="sensors-screenshots mt-0">
          <div className="screenshot-container">
            <img
              src="/ai.png"
              alt="Chrome DevTools AI Innovations settings panel"
              className="screenshot"
            />
          </div>
          <p className="image-caption">
            Chrome DevTools Settings → AI innovations panel showing available AI
            features and toggles
          </p>
        </div>
      </div>
    </div>
  );
}

