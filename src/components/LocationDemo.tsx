import { useState, useEffect } from "react";
import "./LocationDemo.css";

interface GeolocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
  cityName?: string;
  countryName?: string;
  timezoneId?: string;
}

const LocationDemo = () => {
  const [currentSlide, setCurrentSlide] = useState<"intro" | "locations" | "sensors" | "demo">(
    "intro"
  );
  const [currentPosition, setCurrentPosition] =
    useState<GeolocationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        if (currentSlide === "intro") {
          setCurrentSlide("locations");
        } else if (currentSlide === "locations") {
          setCurrentSlide("sensors");
        } else if (currentSlide === "sensors") {
          setCurrentSlide("demo");
        }
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (currentSlide === "locations") {
          setCurrentSlide("intro");
        } else if (currentSlide === "sensors") {
          setCurrentSlide("locations");
        } else if (currentSlide === "demo") {
          setCurrentSlide("sensors");
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  const getCityName = async (
    latitude: number,
    longitude: number
  ): Promise<{ city: string; country: string; timezone: string }> => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      const data = await response.json();
      return {
        city: data.city || data.locality || "Unknown City",
        country: data.countryName || "Unknown Country",
        timezone:
          data.localityInfo?.administrative?.[0]?.timezoneId ||
          Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
    } catch {
      return {
        city: "Unknown City",
        country: "Unknown Country",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
    }
  };

  const getCurrentLocation = async () => {
    setIsLoading(true);
    setError(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationInfo = await getCityName(latitude, longitude);

          setCurrentPosition({
            latitude,
            longitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp,
            cityName: locationInfo.city,
            countryName: locationInfo.country,
            timezoneId: locationInfo.timezone,
          });
          setIsLoading(false);
        },
        (error) => {
          let errorMessage = "Unknown error occurred";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location access denied by user";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information is unavailable";
              break;
            case error.TIMEOUT:
              errorMessage = "Location request timed out";
              break;
          }
          setError(errorMessage);
          setIsLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
      setIsLoading(false);
    }
  };

  return (
    <div className="location-demo">
      {/* Slide Navigation */}
      <div className="slide-navigation">
        <button
          className={`nav-btn ${currentSlide === "intro" ? "active" : ""}`}
          onClick={() => setCurrentSlide("intro")}
        >
          🌍 Intro
        </button>
        <button
          className={`nav-btn ${currentSlide === "locations" ? "active" : ""}`}
          onClick={() => setCurrentSlide("locations")}
        >
          📍 Locations
        </button>
        <button
          className={`nav-btn ${currentSlide === "sensors" ? "active" : ""}`}
          onClick={() => setCurrentSlide("sensors")}
        >
          🎯 Sensors
        </button>
        <button
          className={`nav-btn ${currentSlide === "demo" ? "active" : ""}`}
          onClick={() => setCurrentSlide("demo")}
        >
          🚀 Demo
        </button>
        
        {/* Slide Counter */}
        <div className="slide-counter">
          {currentSlide === "intro" && "1/4"}
          {currentSlide === "locations" && "2/4"}
          {currentSlide === "sensors" && "3/4"}
          {currentSlide === "demo" && "4/4"}
        </div>
      </div>

      {/* Introduction Slide */}
      {currentSlide === "intro" && (
        <div className="slide intro-slide">
          <div className="slide-header">
            <h2>🌍 What is Geolocation Testing?</h2>
            <p>
              Learn how to test geolocation functionality using Chrome DevTools
            </p>
          </div>

          <div className="intro-section">
            <p>
              Geolocation testing allows developers to simulate different
              geographic locations without physically moving. This is crucial
              for testing location-based features, timezone handling, and
              region-specific functionality in web applications.
            </p>

            <div className="chrome-devtools-intro">
              <h4>🛠️ Chrome DevTools: Your Testing Companion</h4>
              <p>
                Chrome DevTools provides powerful built-in tools for geolocation
                testing through the <strong>Sensors</strong> panel. You can
                simulate any location worldwide and test how your application
                responds to different geographic contexts.
              </p>
            </div>
          </div>

          {/* Keyboard Hint */}
          <div className="keyboard-hint-section">
            <p className="keyboard-hint">Press → or Space to continue</p>
          </div>
        </div>
      )}

      {/* Locations Settings Slide */}
      {currentSlide === "locations" && (
        <div className="slide locations-slide">
          <div className="slide-header">
            <h2>📍 Setting Up Location Presets</h2>
            <p>
              Learn how to create custom location presets in Chrome DevTools
            </p>
          </div>

          <div className="locations-settings-section">
            <p>
              Before testing, you can create custom location presets in Chrome
              DevTools Settings. This makes it easy to quickly switch between
              different locations during testing.
            </p>

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
                  <strong>Fill in the details:</strong>
                  <ul>
                    <li>Location name (e.g., "New York")</li>
                    <li>Latitude and Longitude coordinates</li>
                    <li>Timezone ID (e.g., "America/New_York")</li>
                    <li>Locale (e.g., "en-US")</li>
                  </ul>
                </li>
              </ol>
            </div>

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

            <div className="pro-tip">
              <h5>💡 Pro Tip:</h5>
              <p>
                To get accurate coordinates, right-click on any city in Google Maps
                and select the coordinates from the context menu. This ensures you
                have the exact latitude and longitude for your target location.
              </p>
            </div>
          </div>

          {/* Keyboard Hint */}
          <div className="keyboard-hint-section">
            <p className="keyboard-hint">Press ← or → to navigate</p>
          </div>
        </div>
      )}

      {/* Sensors Panel Slide */}
      {currentSlide === "sensors" && (
        <div className="slide sensors-slide">
          <div className="slide-header">
            <h2>🎯 Using the Sensors Panel</h2>
            <p>
              Learn how to use the Sensors panel to simulate locations
            </p>
          </div>

          <div className="sensors-panel-section">
            <p>
              The Sensors panel is where the magic happens! Here you can override
              the browser's geolocation and simulate any location you want to test.
            </p>

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
                  <strong>Your app will now receive the simulated location</strong>{" "}
                  instead of the real one
                </li>
              </ol>
            </div>

            <div className="sensors-screenshots">
              <div className="screenshot-container">
                <img
                  src="/sensors1.png"
                  alt="Chrome DevTools Sensors panel with location settings"
                  className="screenshot"
                />
                <p className="image-caption">
                  Sensors panel with "No override" selected - using real device
                  location
                </p>
              </div>

              <div className="screenshot-container">
                <img
                  src="/sensors2.png"
                  alt="Chrome DevTools Sensors panel with custom location selected"
                  className="screenshot"
                />
                <p className="image-caption">
                  Sensors panel with custom location selected - simulating a
                  different location
                </p>
              </div>
            </div>
          </div>

          {/* Keyboard Hint */}
          <div className="keyboard-hint-section">
            <p className="keyboard-hint">Press ← or → to navigate</p>
          </div>
        </div>
      )}

      {/* Demo Slide */}
      {currentSlide === "demo" && (
        <div className="slide demo-slide">
          <div className="slide-header">
            <h2>🚀 Geolocation Demo</h2>
            <p>Test how your app responds to different locations using Chrome DevTools Sensors</p>
          </div>

          <div className="demo-instructions">
            <div className="instruction-box">
              <h4>📋 Instructions:</h4>
              <ol>
                <li>Open Chrome DevTools (F12)</li>
                <li>Go to the <strong>Sensors</strong> panel</li>
                <li>Set a custom location or select a preset</li>
                <li>Click the button below to see the simulated location</li>
              </ol>
            </div>
          </div>

          <div className="demo-content">
            <div className="geolocation-section">
              <h3>📍 Current Geolocation</h3>
              <div className="location-display">
                <button
                  className="get-location-btn"
                  onClick={getCurrentLocation}
                  disabled={isLoading}
                >
                  {isLoading ? "Getting Location..." : "Get Current Location"}
                </button>

                {currentPosition && (
                  <div className="location-data">
                    <div className="data-item location-name-item">
                      <label>📍 Location:</label>
                      <span>
                        {currentPosition.cityName},{" "}
                        {currentPosition.countryName}
                      </span>
                    </div>
                    <div className="data-item">
                      <label>Latitude:</label>
                      <span>{currentPosition.latitude.toFixed(6)}</span>
                    </div>
                    <div className="data-item">
                      <label>Longitude:</label>
                      <span>{currentPosition.longitude.toFixed(6)}</span>
                    </div>
                    <div className="data-item">
                      <label>Timezone ID:</label>
                      <span>{currentPosition.timezoneId}</span>
                    </div>
                    <div className="data-item">
                      <label>Accuracy:</label>
                      <span>{currentPosition.accuracy.toFixed(2)} meters</span>
                    </div>
                    <div className="data-item">
                      <label>Timestamp:</label>
                      <span>
                        {new Date(currentPosition.timestamp).toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="error-message">
                    <strong>Error:</strong> {error}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Keyboard Hint */}
          <div className="keyboard-hint-section">
            <p className="keyboard-hint">Press ← to go back</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDemo;