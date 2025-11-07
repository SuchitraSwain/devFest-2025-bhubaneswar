import "../styles/components/GeolocationSlides.scss";

const LocationsSettings = () => {
  return (
    <div className="slide locations-slide">
      <div className="slide-header">
        <h2>01: 📍 Setting Up Location Presets</h2>
        <p>Learn how to create custom location presets in Chrome DevTools</p>
      </div>

      <div className="locations-settings-section">
        <p>
          Before testing, you can create custom location presets in Chrome
          DevTools Settings. This makes it easy to quickly switch between
          different locations during testing.
        </p>

        <div className="locations-layout">
          <div className="settings-left">
            <div className="settings-explanation">
              <h4>How to Add Custom Locations:</h4>
              <ol>
                <li>
                  <strong>Open Chrome DevTools</strong> (F12 or right-click →
                  Inspect)
                </li>
                <li>
                  <strong>Go to Settings</strong> (gear icon in DevTools)
                </li>
                <li>
                  <strong>Navigate to "Locations"</strong> in the left sidebar
                </li>
                <li>
                  <strong>Click "Add location"</strong> to create a new preset
                </li>
                <li>
                  <strong>Fill in the details</strong>
                </li>
              </ol>
            </div>

            <div className="pro-tip">
              <h5>💡 Pro Tip:</h5>
              <p>
                To get accurate coordinates, right-click on any city in Google Maps
                and select the coordinates from the context menu. This ensures you
                have the exact latitude and longitude for your target location.
              </p>
            </div>
          </div>

          <div className="settings-right">
            <div className="settings-screenshot">
              <img
                src="/sensors.png"
                alt="Chrome DevTools Locations Settings showing custom location presets"
                className="screenshot"
              />
              <p className="image-caption">
                Chrome DevTools Settings → Locations panel showing predefined and
                custom location presets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsSettings;
