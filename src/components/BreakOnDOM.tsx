import { useState, useRef } from "react";
import "../styles/components/GeolocationSlides.scss";

export default function BreakOnDOM() {
  const [showDetails, setShowDetails] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  const handleToggle = () => {
    const listElement = listRef.current;
    if (listElement) {
      if (listElement.classList.contains("row")) {
        listElement.setAttribute("class", "movies row");
      } else {
        listElement.setAttribute("class", "movies column");
      }
      setShowDetails((prev) => !prev);
    }
  };

  const movies = ["Gladiator II", "The Lion King", "Inception"];

  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>Break on: Catch DOM Changes in Action</h4>
        <p className="text-sm text-google-gray mb-4">
          Notice a script modifying the DOM—adding, removing, or changing
          elements—but have no idea why or which script is responsible? Break on
          DOM modification is your detective tool.
        </p>

        <ol className="list-decimal pl-5 text-sm text-google-gray mt-3 space-y-2">
          <li>
            Right-click on any element in the <strong>Elements</strong> panel.
          </li>
          <li>
            Select <strong>Break on</strong> → choose from:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                <strong>Attribute modifications</strong> - catches when
                attributes change
              </li>
              <li>
                <strong>Subtree modifications</strong> - catches when child
                elements are added/removed
              </li>
              <li>
                <strong>Node removal</strong> - catches when the element itself
                is removed
              </li>
            </ul>
          </li>
          <li>A breakpoint icon appears on the element in the DOM tree.</li>
          <li>
            Trigger the action that modifies the DOM—the debugger will pause
            exactly where the change happens, showing you the responsible code.
          </li>
        </ol>

        <div className="mt-4 rounded-lg border border-google-border bg-white p-4">
          <h5 className="font-medium mb-2">Use cases</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray space-y-1">
            <li>
              Debug third-party code or frameworks that modify the DOM through
              lifecycle hooks or side effects.
            </li>
            <li>Investigate flickering issues or weird UI jumps.</li>
            <li>
              Track down which script is responsible for unexpected DOM
              modifications.
            </li>
            <li>
              Understand how libraries like React, Vue, or Angular manipulate
              the DOM internally.
            </li>
          </ul>
        </div>
      </div>

      <div className="sensors-right">
        <div className="sensors-screenshots mt-0">
          <div className="screenshot-container">
            <div className="break-on-demo bg-white p-6 rounded-lg border border-google-border">
              <button
                id="toggle-view"
                onClick={handleToggle}
                className="px-4 py-2 bg-google-blue text-white rounded hover:bg-opacity-90 transition-colors font-medium mb-4"
              >
                Show/hide details
              </button>
              <ul
                ref={listRef}
                className="movies column"
                id="movies-list"
                style={{
                  display: "flex",
                  flexDirection: showDetails ? "row" : "column",
                  gap: "1rem",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {movies.map((movie, index) => (
                  <li key={index} className="movie-item">
                    {movie}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="screenshot-container">
            <img
              src="/break.png"
              alt="Break on DOM modifications in Chrome DevTools"
              className="screenshot"
            />
          </div>
          <div className="screenshot-container">
            <img
              src="/break1.png"
              alt="Break on DOM breakpoint triggered"
              className="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
