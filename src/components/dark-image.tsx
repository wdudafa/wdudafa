import { useEffect, useState, useRef } from "react";

interface Props {
  src: string;
  lightRadius: number;
  setHovering?: (hovering: boolean) => void;
  className: string;
  alt: string;
}

const DarkImage = ({
  src,
  lightRadius,
  className,
  alt,
  setHovering = (hovering: boolean) => {},
}: Props) => {
  const [imageOpacity, setOpacity] = useState(0.1);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
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
    <img
      ref={imageRef}
      src={require("../assets/" + src)}
      alt={alt}
      className={className}
      style={{ opacity: imageOpacity }}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    />
  );
};

export default DarkImage;
