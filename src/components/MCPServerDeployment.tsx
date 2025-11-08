import React from "react";
import "../styles/components/GeolocationSlides.scss";

function MCPServerDeployment(): React.ReactElement {
  return (
    <div className="slide sensors-slide">
      <div className="slide-header">
        <h2>05: ☁️ Deploy a Secure MCP Server on Cloud Run</h2>
        <p>
          Build and deploy a Model Context Protocol (MCP) server as a secure,
          production-ready service
        </p>
      </div>

      <div className="sensors-panel-section">
        <div className="sensors-layout">
          <div className="sensors-explanation">
            <h4>What is MCP?</h4>
            <p>
              Model Context Protocol (MCP) servers provide LLMs with access to
              external tools and services. They enable AI assistants to interact
              with APIs, databases, and other resources.
            </p>

            <h4 className="mt-4">Key Benefits:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-google-dark">
              <li>
                <strong>Secure Deployment</strong>: Production-ready service on
                Cloud Run with authentication
              </li>
              <li>
                <strong>Scalable</strong>: Auto-scales based on demand
              </li>
              <li>
                <strong>Cost-Effective</strong>: Pay only for what you use
              </li>
              <li>
                <strong>Easy Integration</strong>: Connect from Gemini CLI or
                other MCP clients
              </li>
            </ul>

            <h4 className="mt-4">What You'll Learn:</h4>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-google-dark">
              <li>Build an MCP server using FastMCP</li>
              <li>Deploy to Cloud Run with security best practices</li>
              <li>Configure authentication for secure access</li>
              <li>Connect from Gemini CLI to your remote server</li>
            </ol>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold mb-2">🔗 Resources:</h4>
              <a
                href="https://codelabs.developers.google.com/codelabs/cloud-run/how-to-deploy-a-secure-mcp-server-on-cloud-run?hl=en#0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Google Codelab: Deploy Secure MCP Server on Cloud Run
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MCPServerDeployment;
