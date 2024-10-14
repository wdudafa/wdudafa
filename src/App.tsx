import { useEffect, useState, useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./index.css";

function App() {
  const lightRadius = 300;
  const followConstant = 0.1;
  const [hovering, setHovering] = useState(false);
  const [imageOpacity, setOpacity] = useState(0.1);
  const imageRef = useRef<HTMLImageElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setTargetPosition({
        x: event.clientX - lightRadius,
        y: event.clientY - lightRadius,
      });

      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const itemCenterY = rect.top + rect.height / 2;

        // Calculate the distance between the mouse and the item's center
        const dx = event.clientX - itemCenterX;
        const dy = event.clientY - itemCenterY;
        const distanceFromItem = Math.sqrt(dx * dx + dy * dy);
        const newOpacity = 1 - distanceFromItem / lightRadius;

        if (newOpacity < 0.1) {
          setOpacity(0.1);
        } else if (newOpacity > 1) {
          setOpacity(1);
        } else {
          setOpacity(newOpacity);
        }
      }
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
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 h-screen w-full flex">
      <div className="follow-mouse-container">
        <div
          className="follower bg-sky-200 blur-3xl"
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

      <div className="justify-between align-middle">
        <div className="h-screen justify-center ">
          <h1 className="text-4xl text-white text-center p-5 align-center font-bold cursor-default">
            Hi, I'm{" "}
            <span className="text-white hover:text-sky-400 transition-colors duration-500">
              Waripamo-owei
            </span>
          </h1>

          <h1 className="text-xl text-white text-center p-5 align-center font-bold cursor-default">
            I am a{" "}
            <span className="text-white hover:text-sky-400 transition-colors duration-500">
              Software Engineer & Developer
            </span>
          </h1>

          <div className="flex justify-center">
            <img
              ref={imageRef}
              src={require("./assets/me.JPG")}
              alt="Waripamo-owei Dudafa"
              className="w-60 h-60 rounded-full object-cover hover:border-8 border-sky-400 transition-all duration-500 "
              style={{ opacity: imageOpacity }}
              onMouseEnter={() => {
                setHovering(true);
              }}
              onMouseLeave={() => {
                setHovering(false);
              }}
            />
          </div>

          <p className="text-l text-white text-center pt-10 px-10 cursor-default">
            I am a software engineer and developer with a passion for building
            web applications that are user-friendly, accessible, and performant.
            I have experience working with JavaScript, TypeScript, React,
            Node.js, and other web technologies. I am always eager to learn new
            things and improve my skills. I am currently looking for new
            opportunities to work on exciting projects and grow as a developer.
          </p>
          <div className="flex justify-around px-48 pt-5">
            <a
              href="https://www.linkedin.com/in/wdudafa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} color={"white"} />
            </a>
            <a
              href="https://www.youtube.com/@waridev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={40} color={"white"} />
            </a>
            <a
              href="https://github.com/Wari-Dudafa"
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
    </div>
  );
}

export default App;
