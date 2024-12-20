import React, { useRef, useState, useEffect } from "react";
import "./styles/VideoPlayer.css";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Update the current time on video play
  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleSkip = (seconds) => {
    videoRef.current.currentTime += seconds;
  };

  const handleTimeSliderChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    videoRef.current.currentTime = newTime;
  };

  const handleFullscreenToggle = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      videoRef.current.parentElement.requestFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div
      className={`video-player-container ${isFullscreen ? "fullscreen" : ""}`}
    >
      <video
        ref={videoRef}
        className="video-player"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlayPause}
        src="/assets/video.mp4" // Correct video path
        controls={false} // Custom controls
      />
      <div className="controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={() => handleSkip(-10)}>⏪ 10s</button>
        <button onClick={() => handleSkip(10)}>⏩ 10s</button>
        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Time Progress Slider */}
        <input
          type="range"
          className="time-slider"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleTimeSliderChange}
        />

        {/* Volume Control */}
        <input
          type="range"
          className="volume-slider"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
        <label className="volume-label">Volume</label>

        {/* Fullscreen Toggle */}
        <button onClick={handleFullscreenToggle}>
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;