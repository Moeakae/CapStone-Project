import React, { useState, useEffect} from "react";
import Slider from "rc-slider"
import "rc-slider/assets/index.css";
function ProgressBar({ currentTime, duration, onSeek }) {
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    };
  
    return (
      <div style={{margin: "20px 0", display: "flex", justifyContent: "space-between" }} 
      className="progress-bar flex items-center justify-between mt-4"  >
        
        <span className="text-gray-400 text-sm">{formatTime(currentTime)}</span>
        <Slider
        
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={(e) => onSeek(Number(e.target.value))}
          className="w-full mx-4"
          
        />
        <span className="text-gray-400 text-sm">{formatTime(duration)}</span>
      </div>
    );
  }
export default ProgressBar;