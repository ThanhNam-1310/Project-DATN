import React from "react";

const IconCustom = ({ src, width = "16", height = "16", className = " " }) => {
  return (
    <img
      src={src}
      alt="icon"
      className={`inline-block ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default IconCustom;
