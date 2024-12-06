import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./index.css";
import DarkImage from "./components/dark-image";
import Card from "./components/card";
import { experiences, Experience } from "./constants/experiences";
import projects from "./constants/projects";
import StarContainer from "./components/star-container";

function App() {
  const lightRadius = 300;
  const followConstant = 0.1;
  const [hovering, setHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setTargetPosition({
        x: event.clientX - lightRadius,
        y: event.clientY - lightRadius,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lightRadius]);

  useEffect(() => {
    const smoothMove = () => {
      setPosition((prevPosition) => ({
        x:
          prevPosition.x + (targetPosition.x - prevPosition.x) * followConstant,
        y:
          prevPosition.y + (targetPosition.y - prevPosition.y) * followConstant,
      }));
    };

    const intervalId = setInterval(smoothMove, 16);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetPosition]);

  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-800 h-full w-full lg:overflow-y-hidden lg:flex lg:h-screen">
     <StarContainer/>

      {/*
       <div className="follow-mouse-container">
        <div
          className="follower bg-gradient-to-r from-sky-200 to-violet-400 blur-3xl"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            width: `${lightRadius * 2}px`,
            height: `${lightRadius * 2}px`,
            borderRadius: "50%",
            position: "fixed",
            pointerEvents: "none",
            opacity: hovering ? 0.3 : 0.1,
            transition: "opacity 0.5s ease",
          }}
        ></div>
      </div>

      <div className="lg:w-1/3 justify-between align-middle">
        <div className="h-screen justify-center ">
          <h1 className="word text-4xl text-white text-center p-5 align-center font-bold cursor-default">
            Hi, I'm{" "}
            <span className="text-white hover:text-sky-200 transition-colors duration-500">
              Waripamo-owei
            </span>
          </h1>

          <h1 className="text-xl text-white text-center p-5 align-center font-bold cursor-default">
            I am a{" "}
            <span className="text-white hover:text-sky-200 transition-colors duration-500">
              Software Engineer
            </span>
          </h1>

          <div className="flex justify-center">
            <DarkImage
              lightRadius={lightRadius}
              src={"me.JPG"}
              alt="Waripamo-owei Dudafa"
              className="w-60 h-60 rounded-full object-cover hover:border-4 border-sky-200 transition-all duration-500 shadow-lg"
              setHovering={setHovering}
            />
          </div>

          <p className="text-l text-white text-center pt-10 px-10 cursor-default">
            I am a software engineer with a passion for building web
            applications that are user-friendly, accessible, and performant. I
            have experience working with Python, JavaScript, Java, and other
            technologies. I am always eager to learn new things and improve my
            skills.
          </p>
          <div className="flex justify-around px-11 pt-5">
            <a
              href="https://www.linkedin.com/in/wdudafa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} color={"white"} />
            </a>
            <a
              href="https://www.youtube.com/@wdudafa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={40} color={"white"} />
            </a>
            <a
              href="https://github.com/wdudafa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} color={"white"} />
            </a>
            <a
              href="mailto:wd@wdudafa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={40} color={"white"} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 md:mt-0 lg:w-2/3 h-full lg:overflow-y-scroll pb-24">
        <div>
          <h1 className="text-xl text-white p-5 font-bold cursor-default text-center lg:text-left">
            Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project: Experience) => (
              <Card
                lightRadius={lightRadius}
                setHovering={setHovering}
                experience={project}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-xl text-white p-5 font-bold cursor-default text-center lg:text-left">
            Experience
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experiences.map((experience: Experience) => (
              <Card
                lightRadius={lightRadius}
                setHovering={setHovering}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </div>
      */}
    </div>
  );
}

export default App;
