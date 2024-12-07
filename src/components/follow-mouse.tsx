import { useEffect, useState } from "react";

interface Props {
  hovering: boolean;
  lightRadius: number;
}

const FollowMouse = ({ lightRadius, hovering }: Props) => {
  const followConstant = 0.1;
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
    <div>
      <div
        style={{
          position: "fixed",
          borderRadius: "50%",
          pointerEvents: "none",
          width: `${lightRadius * 2}px`,
          opacity: hovering ? 0.3 : 0.1,
          height: `${lightRadius * 2}px`,
          transition: "opacity 0.5s ease",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="bg-gradient-to-r from-sky-200 to-violet-400 blur-3xl"
      />
    </div>
  );
};

export default FollowMouse;
