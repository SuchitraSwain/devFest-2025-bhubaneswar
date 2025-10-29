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
            <div className="logo-container">
              <img
                src="/logo.webp"
                alt="DevFest Logo"
                className="devfest-logo"
              />
            </div>
            <div className="presenter-info">
              <p className="presenter-name">Presented by: Suchitra Swain</p>
              <p className="event-date">9th November 2025</p>
            </div>
          </div>
        ),
      },
      {
        id: 1,
        title: "Presentation Topics",
        type: "topics",
        content: (
          <div className="topics-slide">
            <h2 className="topics-title">What We'll Cover Today</h2>
            <div className="topics-grid">
              <div className="topic-card">
                <div className="topic-number">01</div>
                <h3>Introduction to Modern Web Development</h3>
                <p>Overview of current trends and technologies</p>
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
