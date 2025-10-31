import "../styles/components/GeolocationSlides.scss";
import "./CssAnimations.scss";

export default function CssAnimations() {
  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>CSS Animations Inspector</h4>
        <p className="text-sm text-google-gray mb-4">
          CSS animations can be a real headache, but Chrome's got it back here, too. Under more tools you'll find the animations tab. Here you can take a closer look at CSS animations and a few transitions.
        </p>
        <p className="text-sm text-google-gray mb-4">
          Whether you want to improve your own animations or reverse engineer someone else's, as long as the animation tab is open, it records every animation happening on the page. You can replay them, adjust the speed, scrub through the timeline manually, and of course, jump straight to the animated element to inspect the code. Try playing around with delays and durations and grab any code you want to tweak or reuse. It really makes working with CSS animation a lot more manageable.
        </p>

        <div className="mb-4">
          <h5 className="font-medium mb-2">Key Features</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>
              <strong>Recording and Playback:</strong> Records all animations and transitions on the page, including hover effects and infinite animations. You can play back, pause, and scrub through the animation timeline.
            </li>
            <li>
              <strong>Timeline Visualization:</strong> Visual timeline showing duration, delay, and keyframes to understand the animation sequence and timing.
            </li>
            <li>
              <strong>Modification:</strong> Adjust animation delay, duration, and easing curves in real-time with immediate visual feedback.
            </li>
            <li>
              <strong>Easing Curve Editor:</strong> Visual editor for modifying easing curves, enabling precise control over acceleration and deceleration.
            </li>
            <li>
              <strong>Performance Analysis:</strong> Slow down animations to observe individual frames and identify performance bottlenecks.
            </li>
            <li>
              <strong>Synchronization:</strong> View multiple animations side-by-side on the timeline to coordinate complex animation sequences.
            </li>
          </ul>
        </div>

        <ol className="list-decimal pl-5 text-sm text-google-gray mt-3 space-y-2">
          <li>
            Open Chrome DevTools (right-click → Inspect, or press F12).
          </li>
          <li>
            Open the Command Menu using <strong>Ctrl+Shift+P</strong> (Windows/Linux) or <strong>Cmd+Shift+P</strong> (macOS).
          </li>
          <li>
            Type <strong>"Animations"</strong> and select <strong>"Show Animations"</strong> from the results.
          </li>
          <li>
            The Animations tab will appear at the bottom of DevTools. As long as this tab is open, it will automatically record all animations on the page.
          </li>
          <li>
            Interact with the demo below to trigger animations, then inspect them in the Animations tab.
          </li>
          <li>
            Use the timeline controls to:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Play/pause the animation</li>
              <li>Scrub through the timeline manually</li>
              <li>Adjust playback speed (10%, 25%, 50%, 100%, 200%, etc.)</li>
              <li>Click on the animation block to jump to the CSS code</li>
              <li>Modify delay, duration, and easing directly in the inspector</li>
            </ul>
          </li>
        </ol>

        <div className="mt-4 rounded-lg border border-google-border bg-white p-4">
          <h5 className="font-medium mb-2">Why it's useful</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>Debug timing issues and animation glitches</li>
            <li>Reverse engineer complex animations from other websites</li>
            <li>Fine-tune animation timing and easing for better UX</li>
            <li>Identify performance bottlenecks in animations</li>
            <li>Coordinate multiple animations for smooth sequences</li>
          </ul>
        </div>
      </div>

      <div className="sensors-right">
        <div className="sensors-screenshots mt-0">
          <div className="screenshot-container">
            <img
              src="/cssAnimation.png"
              alt="Chrome DevTools Animations tab showing recorded animations with timeline controls"
              className="screenshot"
            />
          </div>
          <div className="screenshot-container">
            <div className="css-animations-demo bg-white p-6 rounded-lg border border-google-border">
              <h5 className="font-medium mb-4 text-center text-gray-700">
                Animation Demo - Inspect in Animations Tab
              </h5>
              
              <div className="animation-container">
                {/* Bouncing Ball */}
                <div className="demo-item">
                  <div className="bouncing-ball"></div>
                  <p className="demo-label">Bounce Animation</p>
                </div>

                {/* Rotating Box */}
                <div className="demo-item">
                  <div className="rotating-box"></div>
                  <p className="demo-label">Rotation</p>
                </div>

                {/* Pulsing Circle */}
                <div className="demo-item">
                  <div className="pulsing-circle"></div>
                  <p className="demo-label">Scale Pulse</p>
                </div>

                {/* Sliding Element */}
                <div className="demo-item">
                  <div className="sliding-element"></div>
                  <p className="demo-label">Translate</p>
                </div>

                {/* Color Transition (hover to trigger) */}
                <div className="demo-item">
                  <div className="color-transition">
                    Hover Me
                  </div>
                  <p className="demo-label">Color Transition</p>
                </div>

                {/* Complex Animation */}
                <div className="demo-item">
                  <div className="complex-animation"></div>
                  <p className="demo-label">Multi-Property</p>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500 text-center">
                <p>💡 Tip: Open the Animations tab in DevTools to see all these animations recorded and inspectable!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

