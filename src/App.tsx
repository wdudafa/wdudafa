import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App bg-gray-900 text-white">
      <header className="bg-blue-700 py-8 px-8 ">
        <div>
          <h1 className="text-4xl font-bold">Waripamo-owei Dudafa</h1>
          <p className="text-lg">Software Engineer & Developer</p>
        </div>
        <nav className="mt-4">
          <a
            href="#about"
            className="mx-2 hover:underline hover:text-blue-300 transition-colors duration-300"
          >
            About Me
          </a>
          <a
            href="#experience"
            className="mx-2 hover:underline hover:text-blue-300 transition-colors duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="mx-2 hover:underline hover:text-blue-300 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="mx-2 hover:underline hover:text-blue-300 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </header>

      <section id="about" className="py-10 px-8">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="mb-2">
          I'm a Computer Science and Artificial Intelligence student at the
          University of Sussex with a strong foundation in software development.
          I have experience in web and mobile app development, particularly
          using React, JavaScript, TypeScript, and Python.
        </p>
        <p>
          My journey includes developing a gym app, winning multiple hackathons,
          and contributing to various open-source projects.
        </p>
      </section>

      <section id="experience" className="py-10 px-8">
        <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">
              Academic Student Mentor
            </h3>
            <p className="text-gray-400">
              University of Sussex | Sep 2024 - Present
            </p>
            <p>
              Assisting students with modules and workshops, improving
              engagement by 30%.
            </p>
          </div>
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
            <p className="text-gray-400">Hack Sussex | Jun 2024 - Present</p>
            <p>
              Developed and maintained the society's website using React,
              increasing traffic by 25%.
            </p>
          </div>
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">
              Computer Science Tutor
            </h3>
            <p className="text-gray-400">Self-employed | Apr 2024 - Present</p>
            <p>
              Tutored students, contributing to an average 10% improvement in
              exam results.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-gray-800 py-10 px-8">
        <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Gojim Mobile App</h3>
            <p>A gym app that tracks workouts, food intake, and body weight.</p>
          </div>
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">
              Goof-Script Programming Language
            </h3>
            <p>
              A custom programming language developed in 24 hours at a
              hackathon.
            </p>
          </div>
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Rick's Ranch Game</h3>
            <p>
              A game developed in 24 hours, winning awards for creativity and
              gameplay.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-10 px-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:wd@wdudafa.com"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            wd@wdudafa.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/wdudafa"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            My LinkedIn
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Wari-Dudafa"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            My GitHub
          </a>
        </p>
      </section>

      <footer className="bg-blue-700 py-8 px-8">
        <p>© 2024 Waripamo-owei Dudafa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
