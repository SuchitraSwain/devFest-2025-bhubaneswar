export default function ConsoleInsights() {
  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>Console Insights: AI-powered error analysis</h4>
        <p className="mb-4">
          AI analyzes console errors and provides actionable suggestions,
          context-aware explanations, and recommendations for fixing common
          issues.
        </p>

        <ul className="list-disc pl-5 text-sm text-google-gray space-y-1 mb-6">
          <li>Get context-aware explanations for error messages</li>
          <li>Receive recommendations for fixing common issues</li>
          <li>Smart error grouping and pattern detection</li>
        </ul>

        <div className="p-4 bg-white rounded-lg border border-google-border">
          <h5 className="font-medium mb-3 text-google-dark">Steps to use:</h5>
          <ol className="list-decimal pl-5 text-sm text-google-gray space-y-2">
            <li>Enable AI innovations in DevTools Settings</li>
            <li>Click buttons above to generate errors</li>
            <li>Open Console tab (F12 or Cmd/Ctrl+Shift+I)</li>
            <li>Look for AI insights icon next to errors</li>
            <li>Click the icon to see AI explanations</li>
          </ol>
        </div>
      </div>

      <div className="sensors-right">
        <div className="sensors-screenshots mt-0">
          <div className="screenshot-container">
            <img
              src="/consoleAI.png"
              alt="Console Insights in Chrome DevTools"
              className="screenshot"
            />
          </div>
          <div className="screenshot-container">
            <img
              src="/consoleAI1.png"
              alt="Console Insights in Chrome DevTools"
              className="screenshot"
            />
          </div>
          <div className="screenshot-container">
            <img
              src="/consoleAI2.png"
              alt="Console Insights in Chrome DevTools"
              className="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
