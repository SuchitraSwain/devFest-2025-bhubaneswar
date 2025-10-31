import { useState } from "react";
import "../styles/components/GeolocationSlides.scss";

const styleImages = [
  {
    src: "/style.png",
    alt: "AI Assistance in Styles panel",
  },
  {
    src: "/style1.png",
    alt: "Right-click menu with Debug with AI option",
  },
  {
    src: "/style2.png",
    alt: "AI chat prompt interface",
  },
  {
    src: "/style3.png",
    alt: "Connect with workspace option in AI suggestions",
  },
];

export default function AIAssistance() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? styleImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === styleImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>AI Assistance for Style</h4>
        <p className="mb-4">
          Get AI-powered suggestions for CSS improvements, accessibility fixes,
          and responsive design optimizations directly in the Styles panel. Debug
          and improve your styles with AI assistance.
        </p>

        <div className="p-4 bg-white rounded-lg border border-google-border">
          <h5 className="font-medium mb-3 text-google-dark">Steps to use:</h5>
          <ol className="list-decimal pl-5 text-sm text-google-gray space-y-2">
            <li>Go to the Elements tab in Chrome DevTools</li>
            <li>
              Right-click on the element you want to debug, then click{" "}
              <strong>"Debug with AI"</strong> or <strong>"Chat with AI"</strong>
            </li>
            <li>Write your prompt describing what you want to improve</li>
            <li>
              The AI will provide suggestions with an option to{" "}
              <strong>"Connect with workspace"</strong> to apply changes directly
            </li>
          </ol>
        </div>
      </div>

      <div className="sensors-right">
        <div className="carousel-container relative">
          <div className="screenshot-container">
            <img
              src={styleImages[currentIndex].src}
              alt={styleImages[currentIndex].alt}
              className="screenshot"
            />
          </div>
          <button
            onClick={goToPrevious}
            className="carousel-arrow carousel-arrow-left"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            className="carousel-arrow carousel-arrow-right"
            aria-label="Next image"
          >
            ›
          </button>
          <div className="carousel-indicator">
            {currentIndex + 1} / {styleImages.length}
          </div>
        </div>
      </div>
    </div>
  );
}

