import React from "react";
import "./styles/Header.css";

const Header = ({ setSelectedComponent }) => {
  return (
    <header className="header">
      <nav className="nav">
        <button onClick={() => setSelectedComponent("Timer")}>Timer</button>
        <button onClick={() => setSelectedComponent("ImageZoom")}>
          Image Zoom
        </button>
        <button onClick={() => setSelectedComponent("VideoPlayer")}>
          Video Player
        </button>
      </nav>
    </header>
  );
};

export default Header;