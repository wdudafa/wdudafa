import { useEffect, useState } from "react";
import React from "react";

interface props {
  rows: number;
  cols: number;
  location: { x: number; y: number };
}

const Star = ({ location, rows, cols }: props) => {
  const screenWidth = window.innerWidth * 1.3;
  const screenHeight = window.innerHeight;
  const starWidth = screenWidth / cols;
  const starHeight = screenHeight / rows;
  const animationSpeed = 16;
  const xOffSet = Math.random() * starWidth;
  const [xPosition, setXPosition] = useState(location.x * starWidth + xOffSet);

  const getIncrementValue = () => {
    const maxIncrement = 0.8;
    const minIncrement = 0.2;
    const yFactor = location.y / rows;
    return yFactor * (maxIncrement - minIncrement) + minIncrement;
  };

  const getNextXPosition = (prevX: number) => {
    let newX = prevX + getIncrementValue();
    if (newX > screenWidth) {
      newX = -starWidth;
    }
    return newX;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setXPosition((prevX) => getNextXPosition(prevX));
    }, animationSpeed);
    return () => clearInterval(interval);
  }, [screenWidth]);

  const starStyle = {
    left: `${xPosition}px`,
    top: `${location.y * starHeight}px`,
  };

  return (
    <div
      className="rounded-full bg-white absolute w-1 h-1 opacity-10"
      style={starStyle}
    />
  );
};

export default Star;
