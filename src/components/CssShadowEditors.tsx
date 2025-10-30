export default function CssShadowEditors() {
  return (
    <>
      <div className="sensors-layout">
        <div className="sensors-explanation">
          <h4>Play with layered shadows</h4>
          <p>
            Hover the button to see multi-layer shadows. In DevTools → Styles,
            use the shadow editor to tweak each layer interactively.
          </p>

          <div className="mt-4 flex flex-col items-start gap-4">
            <button
              className="px-6 py-3 rounded-lg bg-white text-google-dark border border-google-border font-medium"
              style={{
                boxShadow:
                  "0 1px 2px rgba(0,0,0,.06), 0 4px 10px rgba(0,0,0,.08), inset 0 0 0 1px rgba(0,0,0,.02)",
                transition: "box-shadow 200ms ease, transform 120ms ease",
              }}
            >
              Shadowed Button
            </button>

            <p className="text-sm text-google-gray">
              Tip: Open DevTools → Styles → click the shadow swatch to edit
              layers live.
            </p>
          </div>
        </div>

        <div className="sensors-right">
          <div className="sensors-screenshots mt-0">
            <div className="screenshot-container">
              <img
                src="/css.png"
                alt="DevTools shadow editor 1"
                className="screenshot"
              />
            </div>
            <div className="screenshot-container">
              <img
                src="/css1.png"
                alt="DevTools shadow editor 2"
                className="screenshot"
              />
            </div>
            <div className="screenshot-container">
              <img
                src="/css2.png"
                alt="DevTools shadow editor 3"
                className="screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
