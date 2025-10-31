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
import AIInnovations from "./components/AIInnovations";
import { AI_INNOVATIONS } from "./components/aiInnovationsData";


interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
  type: "intro" | "topics" | "content";
}

function App() {
  const [imagePreviewSrc, setImagePreviewSrc] = useState<string | null>(null);
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
      ...AI_INNOVATIONS.map((ai, idx) => ({
        id: 7 + idx,
        title: `AI Innovations: ${ai.title}`,
        type: "content" as const,
        content: <AIInnovations itemIndex={idx} />,
      })),
      ...DEVTOOLS_FEATURES.map((f, idx) => ({
        id: 7 + AI_INNOVATIONS.length + idx,
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
      // When preview is open, block navigation; allow only Escape to close
      if (imagePreviewSrc) {
        if (event.key === "Escape") {
          setImagePreviewSrc(null);
        }
        event.preventDefault();
        return;
      }
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
  }, [currentSlide, slides.length, imagePreviewSrc]);

  // Global click-to-preview for all images except ones explicitly excluded
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target || target.tagName !== "IMG") return;
      const img = target as HTMLImageElement;
      const isExcluded =
        img.classList.contains("devfest-logo") ||
        img.dataset.noPreview === "true";
      if (isExcluded) return;
      setImagePreviewSrc(img.src);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

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
          disabled={currentSlide === 0 || imagePreviewSrc !== null}
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
          disabled={
            currentSlide === slides.length - 1 || imagePreviewSrc !== null
          }
        >
          Next →
        </button>
      </div>

      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>

      {slides[currentSlide].type !== "intro" && (
        <div className="brand-image">
          <img
            src="/icon2.png"
            alt="DevFest Brand"
            className="brand-logo"
            data-no-preview="true"
          />
        </div>
      )}

      {imagePreviewSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setImagePreviewSrc(null)}
        >
          <img
            src={imagePreviewSrc}
            alt="Preview"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export default App;
