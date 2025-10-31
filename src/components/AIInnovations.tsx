import { AI_INNOVATIONS } from "./aiInnovationsData";
import EnableAIInnovations from "./EnableAIInnovations";
import ConsoleInsights from "./ConsoleInsights";
import AIAssistance from "./AIAssistance";
import AutoLabelsPerformance from "./AutoLabelsPerformance";

interface Props {
  itemIndex: number;
}

export default function AIInnovations(props: Props) {
  const item = AI_INNOVATIONS[props.itemIndex];

  return (
    <div className="slide sensors-slide">
      <div className="slide-header">
        <h2>AI Innovations in Chrome DevTools</h2>
        <p>Unlock the power of AI-assisted debugging and development</p>
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

        {item.id === 1 && <EnableAIInnovations />}
        {item.id === 2 && <ConsoleInsights />}
        {item.id === 3 && <AIAssistance />}
        {item.id === 4 && <AutoLabelsPerformance />}
      </div>
    </div>
  );
}
