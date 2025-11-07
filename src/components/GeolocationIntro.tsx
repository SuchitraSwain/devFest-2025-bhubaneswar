import "../styles/components/GeolocationSlides.scss";

const GeolocationIntro = () => {
  return (
    <div className="slide intro-slide">
      <div className="slide-header">
        <h2>01: 🌍 What is Geolocation Testing?</h2>
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
    </div>
  );
};

export default GeolocationIntro;
