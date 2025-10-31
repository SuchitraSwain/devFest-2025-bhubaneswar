import "../styles/components/GeolocationSlides.scss";

export default function AIAssistance() {
  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>AI Assistance for Style</h4>
        <p className="mb-4">
          Get AI-powered suggestions for CSS improvements, accessibility fixes,
          and responsive design optimizations directly in the Styles panel. Debug
          and improve your styles with AI assistance.
        </p>

        <div className="p-4 bg-white rounded-lg border border-google-border">
          <h5 className="font-medium mb-3 text-google-dark">Steps to use:</h5>
          <ol className="list-decimal pl-5 text-sm text-google-gray space-y-2">
            <li>Go to the Elements tab in Chrome DevTools</li>
            <li>
              Right-click on the element you want to debug, then click{" "}
              <strong>"Debug with AI"</strong> or <strong>"Chat with AI"</strong>
            </li>
            <li>Write your prompt describing what you want to improve</li>
            <li>
              The AI will provide suggestions with an option to{" "}
              <strong>"Connect with workspace"</strong> to apply changes directly
            </li>
          </ol>
        </div>
      </div>

      <div className="sensors-right">
        <div className="sensors-screenshots mt-0">
          <div className="screenshot-container">
            <img
              src="/style.png"
              alt="AI Assistance in Styles panel"
              className="screenshot"
            />
          </div>
          <div className="screenshot-container">
            <img
              src="/style1.png"
              alt="Right-click menu with Debug with AI option"
              className="screenshot"
            />
          </div>
          <div className="screenshot-container">
            <img
              src="/style2.png"
              alt="AI chat prompt interface"
              className="screenshot"
            />
          </div>
          <div className="screenshot-container">
            <img
              src="/style3.png"
              alt="Connect with workspace option in AI suggestions"
              className="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

