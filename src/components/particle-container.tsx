import React, { useEffect, useRef } from "react";
import Box from "../particles/box";

const ParticleContainer = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const numberOfParticles = 1000;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const box = new Box(ctx);
        for (let i = 0; i < numberOfParticles; i++) {
          const x = Math.random() * screenWidth;
          const y = Math.random() * screenHeight;
          box.addParticle(x, y);
        }
        window.requestAnimationFrame(() => box.updateParticles());
      }
    }
  }, [screenWidth, screenHeight]);

  return (
    <canvas
      ref={canvasRef}
      width={screenWidth}
      height={screenHeight}
      style={{ opacity: 0.075 }}
      className="absolute w-full h-full"
    />
  );
};

export default ParticleContainer;
