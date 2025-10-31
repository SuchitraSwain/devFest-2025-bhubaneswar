export default function AutoLabelsPerformance() {
  return (
    <div className="mt-6 space-y-4">
      <div className="p-6 bg-google-light-blue rounded-lg border-l-4 border-google-blue">
        <h4 className="font-semibold text-google-dark mb-2 !text-left">
          Automatic Annotation
        </h4>
        <p className="text-sm text-google-gray !text-left">
          Performance traces are automatically labeled with descriptive names
          and context
        </p>
      </div>
      <div className="p-6 bg-google-light-blue rounded-lg border-l-4 border-google-blue">
        <h4 className="font-semibold text-google-dark mb-2 !text-left">
          Smart Grouping
        </h4>
        <p className="text-sm text-google-gray !text-left">
          Related operations are grouped together with AI-generated categories
        </p>
      </div>
      <div className="p-6 bg-google-light-blue rounded-lg border-l-4 border-google-blue">
        <h4 className="font-semibold text-google-dark mb-2 !text-left">
          Performance Insights
        </h4>
        <p className="text-sm text-google-gray !text-left">
          Get AI-powered recommendations for improving specific performance
          metrics
        </p>
      </div>
    </div>
  );
}
