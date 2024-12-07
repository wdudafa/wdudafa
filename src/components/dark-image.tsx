import React from "react";
import DarkDiv from "./dark-div";

interface Props {
  src: string;
  alt: string;
  className: string;
  lightRadius: number;
  imageClassName: string;
  setHovering?: (hovering: boolean) => void;
}

const DarkImage = ({
  src,
  alt,
  className,
  lightRadius,
  imageClassName,
  setHovering = (hovering: boolean) => {},
}: Props) => {
  return (
    <DarkDiv
      lightRadius={lightRadius}
      setHovering={setHovering}
      className={className}
    >
      <img
        alt={alt}
        src={require("../assets/" + src)}
        className={imageClassName}
      />
    </DarkDiv>
  );
};

export default DarkImage;
