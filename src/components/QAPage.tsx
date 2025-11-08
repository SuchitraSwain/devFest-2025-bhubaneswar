import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/QAPage.scss";

interface QAItem {
  question: string;
  answer: string;
}

interface QASection {
  title: string;
  subsections: {
    subtitle: string;
    items: QAItem[];
  }[];
}

// Import the Q&A data - we'll parse the markdown file
// For now, let's create a component that will load and display the Q&A
const QAPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  // Enable scrolling for Q&A page
  useEffect(() => {
    // Remove overflow-hidden from body when Q&A page mounts
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyHeight = document.body.style.height;
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    document.body.classList.remove("content-slide");
 
    // Update root to allow scrolling and sticky positioning
    const root = document.getElementById("root");
    let originalRootHeight = "";
    let originalRootOverflow = "";
    let originalRootDisplay = "";
    
    if (root) {
      originalRootHeight = root.style.height;
      originalRootOverflow = root.style.overflow;
      originalRootDisplay = root.style.display;
      root.style.height = "auto";
      root.style.overflow = "visible";
      root.style.display = "block";
      root.style.alignItems = "flex-start";
    }

    // Cleanup: restore original styles when component unmounts
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.height = originalBodyHeight;
      if (root) {
        root.style.height = originalRootHeight;
        root.style.overflow = originalRootOverflow;
        root.style.display = originalRootDisplay;
        root.style.alignItems = "";
      }
    };
  }, []);

  // Parse the markdown content (simplified version)
  // In a real implementation, you might want to use a markdown parser
  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  // Load Q&A content from the markdown file
  // We'll use fetch to load it, or we can create a structured data file
  const [qaContent, setQaContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Q&A_Questions.md")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load Q&A content");
        }
        return res.text();
      })
      .then((text) => {
        setQaContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading Q&A content:", err);
        setLoading(false);
      });
  }, []);

  // Parse markdown into sections
  const parseMarkdown = (content: string) => {
    const sections: QASection[] = [];
    const lines = content.split("\n");
    let currentSection: QASection | null = null;
    let currentSubsection: { subtitle: string; items: QAItem[] } | null = null;
    let currentQuestion = "";
    let currentAnswer = "";
    let inAnswer = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Main topic (##)
      if (line.startsWith("## ") && !line.startsWith("###")) {
        if (currentSection) {
          if (currentSubsection) {
            if (currentQuestion && currentAnswer) {
              currentSubsection.items.push({
                question: currentQuestion,
                answer: currentAnswer,
              });
            }
            currentSection.subsections.push(currentSubsection);
          }
          sections.push(currentSection);
        }
        currentSection = {
          title: line.replace("## ", ""),
          subsections: [],
        };
        currentSubsection = null;
        currentQuestion = "";
        currentAnswer = "";
        inAnswer = false;
      }
      // Subsection (###)
      else if (line.startsWith("### ")) {
        if (currentSubsection && currentQuestion && currentAnswer) {
          currentSubsection.items.push({
            question: currentQuestion,
            answer: currentAnswer,
          });
          currentQuestion = "";
          currentAnswer = "";
        }
        if (currentSubsection && currentSection) {
          currentSection.subsections.push(currentSubsection);
        }
        currentSubsection = {
          subtitle: line.replace("### ", ""),
          items: [],
        };
        inAnswer = false;
      }
      // Question (numbered **)
      else if (line.match(/^\d+\.\s+\*\*/)) {
        if (currentSubsection && currentQuestion && currentAnswer) {
          currentSubsection.items.push({
            question: currentQuestion,
            answer: currentAnswer,
          });
        }
        currentQuestion = line
          .replace(/^\d+\.\s+\*\*/, "")
          .replace(/\*\*$/, "")
          .trim();
        currentAnswer = "";
        inAnswer = false;
      }
      // Answer (**Answer:**)
      else if (line.startsWith("**Answer:**")) {
        inAnswer = true;
        currentAnswer = line.replace("**Answer:**", "").trim();
      }
      // Continue answer
      else if (
        inAnswer &&
        line &&
        !line.startsWith("#") &&
        !line.match(/^\d+\./)
      ) {
        currentAnswer += (currentAnswer ? "\n" : "") + line;
      }
    }

    // Push last items
    if (currentSubsection && currentQuestion && currentAnswer) {
      currentSubsection.items.push({
        question: currentQuestion,
        answer: currentAnswer,
      });
    }
    if (currentSubsection && currentSection) {
      currentSection.subsections.push(currentSubsection);
    }
    if (currentSection) {
      sections.push(currentSection);
    }

    return sections;
  };

  const sections = qaContent ? parseMarkdown(qaContent) : [];

  // Filter sections based on search
  const filteredSections = sections.map((section) => ({
    ...section,
    subsections: section.subsections.map((subsection) => ({
      ...subsection,
      items: subsection.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })),
  }));

  if (loading) {
    return (
      <div className="qa-page">
        <div className="qa-loading">Loading Q&A content...</div>
      </div>
    );
  }

  return (
    <div className="qa-page">
      <div className="qa-header">
        <div className="qa-header-content">
          <Link to="/" className="back-link">
            ← Back to Presentation
          </Link>
          <h1>Q&A: Potential Questions & Answers</h1>
          <p className="qa-subtitle">
            DevFest 2025 Presentation - Chrome DevTools
          </p>
        </div>
      </div>

      <div className="qa-container">
        <div className="qa-sidebar">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="qa-nav">
            <h3>Topics</h3>
            <ul>
              {filteredSections.map((section, idx) => (
                <li key={idx}>
                  <a
                    href={`#section-${idx}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSection(`section-${idx}`);
                      document
                        .getElementById(`section-${idx}`)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="qa-content">
          {filteredSections.map((section, sectionIdx) => (
            <div
              key={sectionIdx}
              id={`section-${sectionIdx}`}
              className="qa-section"
            >
              <h2>{section.title}</h2>

              {section.subsections.map((subsection, subIdx) => {
                if (subsection.items.length === 0) return null;

                return (
                  <div key={subIdx} className="qa-subsection">
                    <h3>{subsection.subtitle}</h3>

                    {subsection.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="qa-item">
                        <div className="qa-question">
                          <strong>{item.question}</strong>
                        </div>
                        <div className="qa-answer">
                          {item.answer.split("\n").map((para, paraIdx) => (
                            <p key={paraIdx}>{para}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}

          {filteredSections.every((s) =>
            s.subsections.every((sub) => sub.items.length === 0)
          ) && (
            <div className="qa-no-results">
              <p>No questions found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QAPage;
