import "../styles/components/GeolocationSlides.scss";

const SensorsPanel = () => {
  return (
    <div className="slide sensors-slide">
      <div className="slide-header">
        <h2>🎯 Using the Sensors Panel</h2>
        <p>Learn how to use the Sensors panel to simulate locations</p>
      </div>

      <div className="sensors-panel-section">
        <p>
          The Sensors panel is where the magic happens! Here you can override
          the browser's geolocation and simulate any location you want to test.
        </p>

        <div className="sensors-layout">
          <div className="sensors-explanation">
            <h4>How to Use the Sensors Panel:</h4>
            <ol>
              <li>
                <strong>Open the Sensors panel</strong> in Chrome DevTools
              </li>
              <li>
                <strong>In the Location section:</strong>
                <ul>
                  <li>
                    Select a preset from the dropdown (or "No override" for real
                    location)
                  </li>
                  <li>
                    Or manually enter latitude, longitude, timezone, and locale
                  </li>
                  <li>Set accuracy (default is 150 meters)</li>
                </ul>
              </li>
              <li>
                <strong>Click "Manage"</strong> to access your custom location
                presets
              </li>
              <li>
                <strong>
                  Your app will now receive the simulated location
                </strong>{" "}
                instead of the real one
              </li>
            </ol>
          </div>

          <div className="sensors-right">
            <div className="sensors-screenshots">
              <div className="screenshot-container">
                <img
                  src="/sensors2.png"
                  alt="Chrome DevTools Sensors panel with location settings"
                  className="screenshot"
                />
                <p className="image-caption">
                  Sensors panel with "No override"
                </p>
              </div>

              <div className="screenshot-container">
                <img
                  src="/sensors1.png"
                  alt="Chrome DevTools Sensors panel with custom location selected"
                  className="screenshot"
                />
                <p className="image-caption">
                  Sensors panel with custom location selected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorsPanel;
