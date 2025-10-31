import { snippetExamples } from "./snippetExamples";

interface DemoResults {
  extractLinks?: {
    count: number;
    links: Array<{ text: string; href: string; target: string }>;
  };
  copyText?: { charCount: number; wordCount: number };
  highlight?: "active" | "removed";
  observer?: "active" | null;
  enhancement?: "active" | null;
}

interface SnippetExamplesSectionProps {
  demoResults: DemoResults;
  setDemoResults: React.Dispatch<React.SetStateAction<DemoResults>>;
}

export default function SnippetExamplesSection({
  demoResults,
  setDemoResults,
}: SnippetExamplesSectionProps) {
  return (
    <div className="mt-6">
      <h5 className="font-medium mb-3">Example Snippets - Try Them Live!</h5>

      {/* Example 1: Extract All Links */}
      <div className="mb-4 rounded-lg border border-google-border bg-gray-50 p-4">
        <div className="flex justify-between items-center mb-2">
          <h6 className="font-semibold text-gray-700">1. Extract All Links</h6>
          <button
            onClick={() => {
              try {
                const links = Array.from(
                  document.querySelectorAll("a[href]")
                ) as HTMLAnchorElement[];
                const linkData = links.map((link) => ({
                  text: link.textContent?.trim() || "",
                  href: link.href,
                  target: link.target || "_self",
                }));

                const result = {
                  count: links.length,
                  links: linkData.slice(0, 10),
                }; // Show first 10
                setDemoResults({ ...demoResults, extractLinks: result });

                // Try to copy to clipboard
                const textToCopy = linkData
                  .map((l) => `${l.text}: ${l.href}`)
                  .join("\n");
                navigator.clipboard
                  .writeText(textToCopy)
                  .then(() => {
                    console.log("Links copied to clipboard!");
                    alert(
                      `Found ${links.length} links! First 10 shown below. All links copied to clipboard.`
                    );
                  })
                  .catch(() => {
                    console.table(linkData);
                    alert(
                      `Found ${links.length} links! Check console for full list.`
                    );
                  });
              } catch (error) {
                alert("Error running snippet: " + error);
              }
            }}
            className="px-3 py-1 bg-google-blue text-white rounded text-xs hover:bg-blue-600 transition"
          >
            Run Snippet
          </button>
        </div>
        {demoResults.extractLinks && (
          <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded text-xs">
            <strong>Found {demoResults.extractLinks.count} links!</strong>
            <div className="mt-1 max-h-32 overflow-y-auto">
              {demoResults.extractLinks.links.map((link, idx: number) => (
                <div key={idx} className="text-gray-700">
                  <strong>{link.text || "(empty)"}:</strong> {link.href}
                </div>
              ))}
              {demoResults.extractLinks.count > 10 && (
                <div className="text-gray-500 italic">
                  ... and {demoResults.extractLinks.count - 10} more (check
                  clipboard or console)
                </div>
              )}
            </div>
          </div>
        )}
        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          {snippetExamples.extractLinks}
        </pre>
      </div>

      {/* Example 2: Copy All Visible Text */}
      <div className="mb-4 rounded-lg border border-google-border bg-gray-50 p-4">
        <div className="flex justify-between items-center mb-2">
          <h6 className="font-semibold text-gray-700">
            2. Copy All Visible Text
          </h6>
          <button
            onClick={() => {
              try {
                function getVisibleText(element: Element): string {
                  const style = window.getComputedStyle(element);
                  if (
                    style.display === "none" ||
                    style.visibility === "hidden" ||
                    style.opacity === "0"
                  ) {
                    return "";
                  }

                  let text = "";
                  for (const node of element.childNodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                      text += (node.textContent?.trim() || "") + " ";
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                      text += getVisibleText(node as Element);
                    }
                  }
                  return text;
                }

                const allText = getVisibleText(document.body);
                const charCount = allText.trim().length;
                const wordCount = allText
                  .trim()
                  .split(/\s+/)
                  .filter((w) => w).length;

                setDemoResults({
                  ...demoResults,
                  copyText: { charCount, wordCount },
                });

                navigator.clipboard
                  .writeText(allText.trim())
                  .then(() => {
                    alert(
                      `Copied ${charCount} characters (${wordCount} words) to clipboard!`
                    );
                  })
                  .catch(() => {
                    console.log("All visible text:", allText);
                    alert(
                      `Text ready! Check console. Total: ${charCount} characters (${wordCount} words)`
                    );
                  });
              } catch (error) {
                alert("Error running snippet: " + error);
              }
            }}
            className="px-3 py-1 bg-google-blue text-white rounded text-xs hover:bg-blue-600 transition"
          >
            Run Snippet
          </button>
        </div>
        {demoResults.copyText && (
          <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded text-xs">
            <strong>Text extracted!</strong> {demoResults.copyText.charCount}{" "}
            characters ({demoResults.copyText.wordCount} words) - Check
            clipboard!
          </div>
        )}
        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          {snippetExamples.copyVisibleText}
        </pre>
      </div>

      {/* Example 3: Highlight Layout Elements */}
      <div className="mb-4 rounded-lg border border-google-border bg-gray-50 p-4">
        <div className="flex justify-between items-center mb-2">
          <h6 className="font-semibold text-gray-700">
            3. Highlight Layout Elements for Debugging
          </h6>
          <div className="flex gap-2">
            <button
              onClick={() => {
                try {
                  const allElements = document.querySelectorAll("*");
                  allElements.forEach((el) => {
                    const rect = (el as HTMLElement).getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) {
                      (el as HTMLElement).style.outline =
                        "1px solid rgba(255, 0, 0, 0.3)";
                      (el as HTMLElement).style.backgroundColor =
                        "rgba(255, 0, 0, 0.05)";
                    }
                  });
                  setDemoResults({ ...demoResults, highlight: "active" });
                  alert(
                    "All elements highlighted! Scroll to see. They will auto-remove after 10 seconds."
                  );
                  setTimeout(() => {
                    allElements.forEach((el) => {
                      (el as HTMLElement).style.outline = "";
                      (el as HTMLElement).style.backgroundColor = "";
                    });
                    setDemoResults({
                      ...demoResults,
                      highlight: "removed",
                    });
                  }, 10000);
                } catch (error) {
                  alert("Error running snippet: " + error);
                }
              }}
              className="px-3 py-1 bg-google-blue text-white rounded text-xs hover:bg-blue-600 transition"
            >
              Run Snippet
            </button>
            <button
              onClick={() => {
                const allElements = document.querySelectorAll("*");
                allElements.forEach((el) => {
                  (el as HTMLElement).style.outline = "";
                  (el as HTMLElement).style.backgroundColor = "";
                });
                setDemoResults({ ...demoResults, highlight: "removed" });
              }}
              className="px-3 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600 transition"
            >
              Remove
            </button>
          </div>
        </div>
        {demoResults.highlight && (
          <div
            className={`mb-2 p-2 border rounded text-xs ${
              demoResults.highlight === "active"
                ? "bg-yellow-50 border-yellow-200"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            {demoResults.highlight === "active"
              ? "Elements highlighted! Scroll the page to see all elements outlined."
              : "Highlights removed."}
          </div>
        )}
        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          {snippetExamples.highlightElements}
        </pre>
      </div>

      {/* Example 4: Monitor Page Changes with MutationObserver */}
      <div className="mb-4 rounded-lg border border-google-border bg-gray-50 p-4">
        <div className="flex justify-between items-center mb-2">
          <h6 className="font-semibold text-gray-700">
            4. Auto-Monitor Page Changes
          </h6>
          <div className="flex gap-2">
            {!demoResults.observer ? (
              <button
                onClick={() => {
                  try {
                    const observer = new MutationObserver((mutations) => {
                      mutations.forEach((mutation) => {
                        if (mutation.type === "childList") {
                          console.log("DOM changed:", {
                            added: mutation.addedNodes.length,
                            removed: mutation.removedNodes.length,
                            target: mutation.target.nodeName,
                            timestamp: new Date().toISOString(),
                          });

                          mutation.addedNodes.forEach((node) => {
                            if (node.nodeType === Node.ELEMENT_NODE) {
                              console.log(
                                "Added element:",
                                node.nodeName,
                                node
                              );
                            }
                          });
                        } else if (mutation.type === "attributes") {
                          console.log("Attribute changed:", {
                            element: mutation.target.nodeName,
                            attribute: mutation.attributeName,
                            oldValue: mutation.oldValue,
                            newValue: (
                              mutation.target as Element
                            ).getAttribute(mutation.attributeName || ""),
                          });
                        }
                      });
                    });

                    observer.observe(document.body, {
                      childList: true,
                      subtree: true,
                      attributes: true,
                      attributeOldValue: true,
                    });

                    (
                      window as Window & {
                        __snippetObserver?: MutationObserver;
                      }
                    ).__snippetObserver = observer;
                    setDemoResults({ ...demoResults, observer: "active" });
                    alert(
                      "MutationObserver started! Changes will be logged to console. Try clicking buttons or modifying the page."
                    );
                  } catch (error) {
                    alert("Error running snippet: " + error);
                  }
                }}
                className="px-3 py-1 bg-google-blue text-white rounded text-xs hover:bg-blue-600 transition"
              >
                Start Monitoring
              </button>
            ) : (
              <button
                onClick={() => {
                  const observer = (
                    window as Window & {
                      __snippetObserver?: MutationObserver;
                    }
                  ).__snippetObserver;
                  if (observer) {
                    observer.disconnect();
                    delete (
                      window as Window & {
                        __snippetObserver?: MutationObserver;
                      }
                    ).__snippetObserver;
                    setDemoResults({ ...demoResults, observer: null });
                    alert("Monitoring stopped.");
                  }
                }}
                className="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition"
              >
                Stop Monitoring
              </button>
            )}
          </div>
        </div>
        {demoResults.observer && (
          <div className="mb-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs">
            <strong>Monitoring active!</strong> Check the console (F12) to see
            DOM changes logged in real-time. Try interacting with the page!
          </div>
        )}
        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          {snippetExamples.monitorChanges}
        </pre>
      </div>

      {/* Example 5: Quick DOM Manipulation Helper */}
      <div className="mb-4 rounded-lg border border-google-border bg-gray-50 p-4">
        <div className="flex justify-between items-center mb-2">
          <h6 className="font-semibold text-gray-700">
            5. Quick Page Enhancement Helper
          </h6>
          <div className="flex gap-2">
            <button
              onClick={() => {
                try {
                  // Check if already added
                  if (document.getElementById("snippet-scroll-btn")) {
                    alert("Enhancements already added!");
                    return;
                  }

                  // Add a "Scroll to Top" button
                  const scrollBtn = document.createElement("button");
                  scrollBtn.id = "snippet-scroll-btn";
                  scrollBtn.textContent = "↑ Top";
                  scrollBtn.style.cssText = `
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        z-index: 9999;
                        padding: 10px 15px;
                        background: #4285f4;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 14px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                      `;
                  scrollBtn.onclick = () =>
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  document.body.appendChild(scrollBtn);

                  // Add word count overlay
                  const wordCount = document.body.innerText
                    .split(/\s+/)
                    .filter((w) => w).length;
                  const countDiv = document.createElement("div");
                  countDiv.id = "snippet-word-count";
                  countDiv.textContent = `Words: ${wordCount}`;
                  countDiv.style.cssText = `
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        z-index: 9999;
                        padding: 8px 12px;
                        background: rgba(0,0,0,0.7);
                        color: white;
                        border-radius: 5px;
                        font-size: 12px;
                      `;
                  document.body.appendChild(countDiv);

                  setDemoResults({ ...demoResults, enhancement: "active" });
                  alert(
                    `Page enhanced! Added scroll-to-top button and word count (${wordCount} words).`
                  );
                } catch (error) {
                  alert("Error running snippet: " + error);
                }
              }}
              className="px-3 py-1 bg-google-blue text-white rounded text-xs hover:bg-blue-600 transition"
            >
              Run Snippet
            </button>
            <button
              onClick={() => {
                const btn = document.getElementById("snippet-scroll-btn");
                const count = document.getElementById("snippet-word-count");
                if (btn) btn.remove();
                if (count) count.remove();
                setDemoResults({ ...demoResults, enhancement: null });
              }}
              className="px-3 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600 transition"
            >
              Remove
            </button>
          </div>
        </div>
        {demoResults.enhancement && (
          <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded text-xs">
            <strong>Enhancements added!</strong> Look for the "↑ Top" button in
            the bottom-right corner and word count in the top-right!
          </div>
        )}
        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          {snippetExamples.pageEnhancement}
        </pre>
      </div>
    </div>
  );
}

