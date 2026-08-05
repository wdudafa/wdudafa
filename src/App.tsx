import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";

const App: React.FC = () => {
  return (
    <>
      <style>{`
        .portfolio-wrapper {
          --bg: darkslategrey;
          --text: #f4f2ee;
          --muted: #cfd3d0;
          --link: tomato;
          background: var(--bg);
          color: var(--text);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 24px;
          box-sizing: border-box;
        }

        .portfolio-wrapper * {
          box-sizing: border-box;
        }

        .portfolio-main {
          text-align: center;
          max-width: 640px;
          width: 100%;
        }

        .portfolio-name {
          font-size: clamp(2.75rem, 7vw, 4.25rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 18px 0;
          color: tomato;
        }

        .portfolio-links-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 36px;
        }

        .portfolio-links-row a {
          color: var(--link);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s ease;
        }

        .portfolio-links-row a:hover {
          opacity: 0.7;
        }

        .portfolio-text-link {
          font-size: 1.1rem;
          text-decoration: underline;
          text-underline-offset: 3px;
          display: inline-block;
        }

        .portfolio-bio {
          color: var(--muted);
          font-size: clamp(1rem, 2.2vw, 1.15rem);
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .portfolio-projects {
          text-align: left;
          display: inline-block;
        }

        .portfolio-projects h2 {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0 0 10px 0;
        }

        .portfolio-project-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: "SF Mono", Menlo, Consolas, monospace;
        }

        .portfolio-project-item .branch {
          color: var(--muted);
        }

        .portfolio-project-item a {
          color: var(--link);
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: opacity 0.2s ease;
        }

        .portfolio-project-item a:hover {
          opacity: 0.75;
        }

        .project-page {
          text-align: center;
        }

        .back-link {
          display: inline-block;
          color: var(--muted);
          text-decoration: underline;
          text-underline-offset: 3px;
          margin-bottom: 32px;
          font-size: 0.95rem;
          transition: opacity 0.2s ease;
        }

        .back-link:hover {
          opacity: 0.75;
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-links-row a,
          .portfolio-project-item a,
          .back-link {
            transition: none;
          }
        }
      `}</style>

      <div className="portfolio-wrapper">
        <main className="portfolio-main">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:url" element={<ProjectPage />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </>
  );
};

export default App;
