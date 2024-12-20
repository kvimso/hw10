import React, { useState } from "react";
import Timer from "./components/Timer";
import ImageZoom from "./components/ImageZoom";
import VideoPlayer from "./components/VideoPlayer";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("Timer");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Timer":
        return <Timer />;
      case "ImageZoom":
        return <ImageZoom />;
      case "VideoPlayer":
        return <VideoPlayer />;
      default:
        return <Timer />;
    }
  };

  return (
    <div className="App">
      <Header setSelectedComponent={setSelectedComponent} />
      <div className="content">{renderComponent()}</div>
    </div>
  );
};

export default App;