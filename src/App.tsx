import { useState, useEffect, useMemo } from "react";
import "./styles/App.scss";
import GeolocationIntro from "./components/GeolocationIntro";
import LocationsSettings from "./components/LocationsSettings";
import SensorsPanel from "./components/SensorsPanel";
import GeolocationDemo from "./components/GeolocationDemo";
import AutoClosingDebug from "./components/AutoClosingDebug";
import DevToolsSuperpowers from "./components/DevToolsSuperpowers";
import { DEVTOOLS_FEATURES } from "./components/devtoolsFeatures";
import IntroSlide from "./components/IntroSlide";
import TopicsSlide from "./components/TopicsSlide";

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
        content: <IntroSlide />,
      },
      {
        id: 1,
        title: "Presentation Topics",
        type: "topics",
        content: <TopicsSlide />,
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
      {
        id: 6,
        title: "Debugging Auto‑Closing Elements",
        type: "content",
        content: <AutoClosingDebug />,
      },
      ...DEVTOOLS_FEATURES.map((f, idx) => ({
        id: 7 + idx,
        title: `DevTools Superpower ${f.id}`,
        type: "content" as const,
        content: <DevToolsSuperpowers itemIndex={idx} />,
      })),
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

  // Keyboard navigation for the main presentation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        if (currentSlide < slides.length - 1) {
          const newSlide = currentSlide + 1;
          setCurrentSlide(newSlide);
          localStorage.setItem("presentation-slide", newSlide.toString());
        }
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (currentSlide > 0) {
          const newSlide = currentSlide - 1;
          setCurrentSlide(newSlide);
          localStorage.setItem("presentation-slide", newSlide.toString());
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide, slides.length]);

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
