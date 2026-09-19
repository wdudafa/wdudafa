import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";

const App: React.FC = () => {
  return (
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
  );
};

export default App;
