export const IntroSlide = () => (
  <div className="intro-slide">
    <div className="intro-content">
      <div className="logo-section">
        <img src="/logo.png" alt="DevFest Logo" className="devfest-logo" />
      </div>
      <div className="presenter-info">
        <h1 className="main-title">DevFest Bhubaneswar 2025</h1>
        <div className="speaker-card">
          <h2 className="presenter-name">Suchitra Swain</h2>
          <p className="speaker-role">
            Sr Software Engineer &amp; Sr Full Stack Web Developer
          </p>
          <div className="topic-section">
            <h3 className="topic-title">🎯 Topic</h3>
            <p className="topic-description">
              Mastering Debug &amp; Accessibility with Chrome DevTools using AI
              Assistant and AI Console
            </p>
          </div>
          <div className="event-details">
            <p className="event-date">📅 9th November 2025</p>
            <p className="event-venue">
              📍 Pipul Pamaja Premium Hotel and Convention
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IntroSlide;
