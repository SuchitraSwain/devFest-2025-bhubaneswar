export const TopicsSlide = () => (
  <div className="slide intro-slide">
    <div className="slide-header">
      <h2>📋 What We'll Cover Today</h2>
      <p>Overview of today's presentation topics</p>
    </div>
    <div className="intro-section">
      <div className="topics-grid">
        <div className="topic-card">
          <div className="topic-number">01</div>
          <h3>
            Automating Sensor &amp; Geolocation Overrides in Chrome DevTools for
            Test Environments
          </h3>
        </div>
        <div className="topic-card">
          <div className="topic-number">02</div>
          <h3>Debug auto-closing elements with this dev-tool settings</h3>
        </div>
        <div className="topic-card">
          <div className="topic-number">03</div>
          <h3>AI innovations in Chrome DevTools</h3>
        </div>
        <div className="topic-card">
          <div className="topic-number">04</div>
          <h3>Underrated DevTools Superpowers Most Developers Miss</h3>
        </div>
        <div className="topic-card">
          <div className="topic-number">05</div>
          <h3>How to deploy a secure MCP server on Cloud Run</h3>
        </div>
      </div>
    </div>
  </div>
);

export default TopicsSlide;
