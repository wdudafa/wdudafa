import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "darkslategrey",
      }}
    >
      <div
        style={{
          backgroundColor: "darkorange",
          borderRadius: "100%",
          width: 500,
          height: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          ref={(element: HTMLHeadingElement) => {
            if (!element) return;

            const rect = element.getBoundingClientRect();

            let x = offset.x + 1;
            let y = offset.y + 1;

            // setOffset((o) => {
            //   return { x: o.x + 1, y: o.y + 1 };
            // });

            console.log(rect.x, rect.y);
          }}
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        >
          wdudafa.com
        </h1>
        <p
          style={{
            fontSize: 25,
            color: "white",
            textAlign: "center",
          }}
        >
          Software Engineer
        </p>
        <p
          style={{
            fontSize: 15,
            color: "white",
            textAlign: "center",
          }}
        >
          ({position.x}, {position.y})
        </p>
      </div>
    </div>
  );
}
