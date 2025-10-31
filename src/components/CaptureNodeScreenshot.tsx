import "../styles/components/GeolocationSlides.scss";

export default function CaptureNodeScreenshot() {
  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>Capture Node Screenshot</h4>
        <p className="text-sm text-google-gray mb-4">
          The Capture Node Screenshot feature in Chrome DevTools allows you to take a screenshot of a specific HTML element directly—without needing any third-party tools or manually cropping images.
        </p>

        <div className="mb-4">
          <h5 className="font-medium mb-2">Why it's useful</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>Great for documentation, UI reviews, bug reporting, sharing design feedback</li>
            <li>Perfect for when you only need a part of the page instead of the full screen</li>
            <li>Zero cropping or editing required</li>
            <li>No need for external screenshot tools</li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="font-medium mb-2">How it works</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>You can capture exactly one selected element (node) as an image</li>
            <li>The screenshot includes only that node and its rendered styles—perfect for pixel-perfect UI captures</li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="font-medium mb-2">How to Capture a Node Screenshot</h5>
          
          <h6 className="font-semibold mt-3 mb-2">Method 1: Right-Click (Fastest Way)</h6>
          <ol className="list-decimal pl-5 text-sm text-google-gray space-y-1">
            <li>Open Chrome DevTools (F12 or Ctrl+Shift+I / Cmd+Opt+I)</li>
            <li>Select the element in the Elements panel</li>
            <li>Right-click the node and choose "Capture node screenshot"</li>
            <li>✔ Saves a PNG of only that selected element</li>
          </ol>

          <h6 className="font-semibold mt-3 mb-2">Method 2: Command Menu (Searchable Option)</h6>
          <ol className="list-decimal pl-5 text-sm text-google-gray space-y-1">
            <li>Open the Command Menu:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Cmd+Shift+P (Mac)</li>
                <li>Ctrl+Shift+P (Windows/Linux)</li>
              </ul>
            </li>
            <li>Type "screenshot"</li>
            <li>Select "Capture node screenshot"</li>
          </ol>
        </div>

        <div className="mb-4">
          <h5 className="font-medium mb-2">Capture Full-Page Screenshot (the fun part)</h5>
          <p className="text-sm text-google-gray mb-2">
            If the page is long and doesn't fit on your screen, normally you take multiple screenshots and stitch them together. But DevTools can do this instantly.
          </p>
          <p className="text-sm text-google-gray mb-2">To capture the full page:</p>
          <ol className="list-decimal pl-5 text-sm text-google-gray space-y-1">
            <li>Select the &lt;body&gt; element</li>
            <li>Right-click → Capture node screenshot</li>
            <li>✅ It captures the entire scrollable page in one image</li>
          </ol>
          <p className="text-sm text-google-gray mt-2">
            Alternatively, through Command Menu:
          </p>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>Open Command Menu → Type "Capture full size screenshot"</li>
            <li>Same results</li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg border border-google-border bg-white p-4">
          <h5 className="font-medium mb-2">Why You'll Love This Feature</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>No need for external screenshot tools</li>
            <li>Zero cropping or editing required</li>
            <li>Ideal for:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>UI/UX reviews</li>
                <li>Documentation & presentations</li>
                <li>Bug reporting</li>
                <li>Design comparisons</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="sensors-right">
        <div className="sensors-screenshots mt-0">
          <div className="screenshot-container">
            <img
              src="/screenshot.png"
              alt="Capture Node Screenshot feature in Chrome DevTools"
              className="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

