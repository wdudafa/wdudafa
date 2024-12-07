import { useEffect, useState, useRef } from "react";

interface Props {
  className: string;
  lightRadius: number;
  onClick?: () => void;
  children?: React.ReactNode;
  setHovering?: (hovering: boolean) => void;
}

const DarkDiv = ({
  children,
  className,
  lightRadius,
  onClick = () => {},
  setHovering = (hovering: boolean) => {},
}: Props) => {
  const defaultOpacity = 0.1;
  const divRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(defaultOpacity);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const handleMouseMove = (event: MouseEvent) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const itemCenterY = rect.top + rect.height / 2;

      const dx = event.clientX - itemCenterX;
      const dy = event.clientY - itemCenterY;
      const distanceFromItem = Math.sqrt(dx * dx + dy * dy);
      const newOpacity = 1 - distanceFromItem / lightRadius;

      setOpacity(Math.max(defaultOpacity, Math.min(newOpacity, 1)));
    }
  };

  return (
    <div
      ref={divRef}
      className={className}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      style={{ opacity: opacity, transition: "opacity 0.2s ease-out" }}
    >
      {children}
    </div>
  );
};

export default DarkDiv;
