import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectPage: React.FC = () => {
  const { url } = useParams<{ url: string }>();
  const project = projects.find((p) => p.url === url);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="project-page">
      <Link className="back-link" to="/">
        &larr; back
      </Link>
      <h1 className="portfolio-name">{project.name}</h1>
      <p className="portfolio-bio">{project.description}</p>
      {project.image && (
        <img
          src={`${process.env.PUBLIC_URL}/assets/${project.image}`}
          className="portfolio-image"
          alt={project.imageAlt}
          style={{
            maxHeight: 300,
            display: "block",
            margin: "0 auto",
          }}
        />
      )}
      {project.externalUrl && (
        <a
          className="portfolio-text-link"
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          repo link
        </a>
      )}
    </div>
  );
};

export default ProjectPage;
