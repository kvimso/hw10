
import React, { useRef } from "react";
import "./styles/ImageZoom.css";

const ImageZoom = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    imageRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleMouseEnter = () => {
    imageRef.current.style.transition = "transform 0.2s ease";
    imageRef.current.style.transform = "scale(2)";
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transition = "transform 0.5s ease";
    imageRef.current.style.transform = "scale(1)";
    imageRef.current.style.transformOrigin = "center";
  };

  return (
    <div className="image-zoom-container">
      <img
        src="/assets/image.jpg"
        alt="Zoomable"
        ref={imageRef}
        className="zoomable-image"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default ImageZoom;
