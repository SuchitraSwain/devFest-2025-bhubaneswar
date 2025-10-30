import { useState } from "react";

export default function Logpoint() {
  const [sum, setSum] = useState<number | null>(null);

  function addNumbers() {
    const numbers = [1, 2, 3, 4, 5];
    let runningTotal = 0;

    for (const n of numbers) {
      runningTotal += n;
    }

    setSum(runningTotal);
  }

  return (
    <div className="sensors-layout mt-6">
      <div className="sensors-explanation">
        <h4>Logpoints: Console logs without code changes</h4>
        <p>
          Insert temporary logs directly from DevTools on any line. They print
          to the Console at runtime without adding <code>console.log()</code> or
          pausing execution.
        </p>

        <ul className="list-disc pl-5 text-sm text-google-gray mt-2">
          <li>Right‑click gutter → Add logpoint…</li>
          <li>
            Use variables in scope, e.g.{" "}
            <code>{"`Total: ${runningTotal}`"}</code>
          </li>
          <li>
            Make it conditional, e.g. <code>n === 3</code>
          </li>
        </ul>

        <div className="mt-4 rounded-lg border border-google-border bg-white p-4">
          <h5 className="font-medium mb-2">Quick differences</h5>
          <ul className="list-disc pl-5 text-sm text-google-gray">
            <li>Breakpoint: pauses execution.</li>
            <li>Logpoint: logs without code changes; no pause.</li>
            <li>Conditional BP: pauses only when condition is true.</li>
          </ul>
        </div>

        <div className="mt-4 flex flex-col items-start gap-3">
          <button
            onClick={addNumbers}
            className="px-6 py-3 rounded-lg bg-white text-google-dark border border-google-border font-medium"
          >
            Run Logpoint Demo
          </button>
          {sum !== null && (
            <p className="text-sm text-google-gray">Total: {sum}</p>
          )}
        </div>
      </div>

      <div className="sensors-right">
        <div className="sensors-screenshots mt-0">
          <div className="screenshot-container">
            <img
              src="/logpoint.png"
              alt="Logpoints in Chrome DevTools"
              className="screenshot"
            />
          </div>
          <div className="screenshot-container">
            <img
              src="/logpoint1.png"
              alt="Logpoints in Chrome DevTools"
              className="screenshot"
            />
          </div>
          <div className="screenshot-container">
            <img
              src="/logpoint2.png"
              alt="Logpoints in Chrome DevTools"
              className="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
