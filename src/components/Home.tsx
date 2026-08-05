import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

interface HomeProps {
  name?: string;
  bio?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

const Home: React.FC<HomeProps> = ({
  name = "wdudafa.",
  bio = `Hey! I'm a final year CS & AI Student. I'm using this website to document and showcase all my "finished" projects.`,
  githubUrl = "https://github.com/wdudafa",
  linkedinUrl = "https://linkedin.com/in/wdudafa",
  email = "wd@wdudafa.com",
}) => {
  const iconSize = 40;
  return (
    <>
      <h1 className="portfolio-name">{name}</h1>

      <div className="portfolio-links-row">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={iconSize} color={"white"} />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={iconSize} color={"white"} />
        </a>
        <a href={`mailto:${email}`} aria-label="Email">
          <FaEnvelope size={iconSize} color={"white"} />
        </a>
      </div>

      <p className="portfolio-bio">{bio}</p>

      <div className="portfolio-projects" id="projects">
        <h2>Projects</h2>
        {projects.map((project) => (
          <div className="portfolio-project-item" key={project.url}>
            <span className="branch">&#9492;&#9472;</span>
            <Link to={`/projects/${project.url}`}>{project.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
