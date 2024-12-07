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
  setHovering,
  imageClassName,
}: Props) => {
  return (
    <DarkDiv
      className={className}
      lightRadius={lightRadius}
      setHovering={setHovering}
    >
      <img
        alt={alt}
        className={imageClassName}
        src={require("../assets/" + src)}
      />
    </DarkDiv>
  );
};

export default DarkImage;
