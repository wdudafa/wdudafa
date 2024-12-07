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
  const defaultOpacity = 0.25;
  const [divOpacity, setOpacity] = useState(defaultOpacity);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (divRef.current) {
        const divRect = divRef.current.getBoundingClientRect();
        const divCenterX = divRect.left + divRect.width / 2;
        const divCenterY = divRect.top + divRect.height / 2;
        const distance = Math.sqrt(
          (event.clientX - divCenterX) ** 2 + (event.clientY - divCenterY) ** 2
        );
        const newOpacity =
          distance < lightRadius / 2
            ? defaultOpacity +
              (1 - defaultOpacity) * (1 - distance / (lightRadius / 2))
            : defaultOpacity;

        setOpacity(newOpacity);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

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
      style={{ opacity: divOpacity, transition: "opacity 0.3s ease" }}
    >
      {children}
    </div>
  );
};

export default DarkDiv;
