import { useEffect, useState, useRef } from "react";

interface Props {
  lightRadius: number;
  setHovering?: (hovering: boolean) => void;
  className: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const DarkDiv = ({
  lightRadius,
  className,
  children,
  setHovering = (hovering: boolean) => {},
  onClick = () => {},
}: Props) => {
  const [imageOpacity, setOpacity] = useState(0.1);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const itemCenterY = rect.top + rect.height / 2;

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
  });

  return (
    <div
      ref={divRef}
      className={className}
      style={{ opacity: imageOpacity }}
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
    >
      {children}
    </div>
  );
};

export default DarkDiv;
