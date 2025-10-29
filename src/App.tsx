import { useState, useEffect, useMemo } from "react";
import "./App.scss";
import GeolocationIntro from "./components/GeolocationIntro";
import LocationsSettings from "./components/LocationsSettings";
import SensorsPanel from "./components/SensorsPanel";
import GeolocationDemo from "./components/GeolocationDemo";

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
  type: "intro" | "topics" | "content";
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(() => {
    const savedSlide = localStorage.getItem("presentation-slide");
    return savedSlide ? parseInt(savedSlide, 10) : 0;
  });

  const slides: Slide[] = useMemo(
    () => [
      {
        id: 0,
        title: "Welcome to DevFest 2025",
        type: "intro",
        content: (
          <div className="intro-slide">
            <div className="intro-content">
              <div className="logo-section">
                <img
                  src="/logo.png"
                  alt="DevFest Logo"
                  className="devfest-logo"
                />
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
                      Mastering Debug &amp; Accessibility with Chrome DevTools
                      using AI Assistant and AI Console
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
        ),
      },
      {
        id: 1,
        title: "Presentation Topics",
        type: "topics",
        content: (
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
                    Automating Sensor & Geolocation Overrides in Chrome DevTools
                    for Test Environments
                  </h3>
                </div>
                <div className="topic-card">
                  <div className="topic-number">02</div>
                  <h3>AI innovations in Chrome DevTools</h3>
                </div>
                <div className="topic-card">
                  <div className="topic-number">03</div>
                  <h3>
                    Debug auto-closing elements with this dev-tool settings
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 2,
        title: "Geolocation Testing Introduction",
        type: "content",
        content: <GeolocationIntro />,
      },
      {
        id: 3,
        title: "Location Settings Setup",
        type: "content",
        content: <LocationsSettings />,
      },
      {
        id: 4,
        title: "Sensors Panel Usage",
        type: "content",
        content: <SensorsPanel />,
      },
      {
        id: 5,
        title: "Geolocation Demo",
        type: "content",
        content: <GeolocationDemo />,
      },
    ],
    []
  );

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      localStorage.setItem("presentation-slide", newSlide.toString());
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      localStorage.setItem("presentation-slide", newSlide.toString());
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    localStorage.setItem("presentation-slide", slideIndex.toString());
  };

  useEffect(() => {
    if (slides[currentSlide].type === "content") {
      document.body.classList.add("content-slide");
    } else {
      document.body.classList.remove("content-slide");
    }

    return () => {
      document.body.classList.remove("content-slide");
    };
  }, [currentSlide, slides]);

  useEffect(() => {
    localStorage.setItem("presentation-slide", currentSlide.toString());
  }, [currentSlide]);

  return (
    <div className="presentation-container">
      <div
        className={`slide-container ${
          slides[currentSlide].type === "content" ? "content-slide" : ""
        }`}
      >
        {slides[currentSlide].content}
      </div>

      <div className="navigation">
        <button
          className="nav-button prev"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          ← Previous
        </button>

        <div className="slide-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              title={`Go to slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>

        <button
          className="nav-button next"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          Next →
        </button>
      </div>

      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}

export default App;
