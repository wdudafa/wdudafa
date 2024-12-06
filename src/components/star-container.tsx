import React from "react";
import Star from "./star";

const StarContainer = () => {
  const rows = 50;
  const cols = 50;
  const starsArray = Array.from({ length: rows }, () =>
    Array.from({ length: cols })
  );

  return (
    <div className="absolute w-full h-full overflow-hidden">
      {starsArray.map((row, rowIndex) => (
        <>
          {row.map((_, colIndex) => (
            <Star
              rows={rows}
              cols={cols}
              key={`${rowIndex}-${colIndex}`}
              location={{ x: rowIndex, y: colIndex }}
            />
          ))}
        </>
      ))}
    </div>
  );
};

export default StarContainer;
