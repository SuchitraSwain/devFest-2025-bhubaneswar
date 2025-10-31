import { DEVTOOLS_FEATURES } from "./devtoolsFeatures";
import CssShadowEditors from "./CssShadowEditors";
import Logpoint from "./Logpoint";
import Coverage from "./Coverage";
import BreakOnDOM from "./BreakOnDOM";
import RenderingTab from "./RenderingTab";
import CssOverview from "./CssOverview";
import CaptureNodeScreenshot from "./CaptureNodeScreenshot";
import CssAnimations from "./CssAnimations";
import Snippets from "./Snippets";

interface Props {
  itemIndex: number;
}

export default function DevToolsSuperpowers(props: Props) {
  const item = DEVTOOLS_FEATURES[props.itemIndex];

  return (
    <div className="slide sensors-slide">
      <div className="slide-header">
        <h2>Underrated DevTools Superpowers Most Developers Miss</h2>
        <p>Unlock faster debugging, smarter testing, and cleaner workflows.</p>
      </div>

      <div className="sensors-panel-section">
        <div className="w-full">
          <h3
            className="font-bold text-4xl bg-gradient-to-r from-google-blue to-brand-purple bg-clip-text text-transparent !text-left"
            style={{
              textShadow:
                "0 1px 2px rgba(0,0,0,0.12), 0 3px 8px rgba(0,0,0,0.08)",
            }}
          >
            {item.id.toString().padStart(2, "0")}: {item.title}
          </h3>
          {item.description && (
            <p className="mt-1 text-base text-google-gray font-normal !text-left">
              {item.description}
            </p>
          )}
        </div>

        {item.id === 1 && <CssShadowEditors />}
        {item.id === 2 && <Logpoint />}
        {item.id === 3 && <Coverage />}
        {item.id === 4 && <BreakOnDOM />}
        {item.id === 5 && <RenderingTab />}
        {item.id === 6 && <CssOverview />}
        {item.id === 7 && <CaptureNodeScreenshot />}
        {item.id === 8 && <CssAnimations />}
        {item.id === 9 && <Snippets />}
      </div>
    </div>
  );
}
