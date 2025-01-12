

import React, { useState, useEffect} from "react";

function VolumeControl({ volume, onVolumeChange }) {
    return (
      <div className="volume-control flex items-center justify-center mt-4">
        <label htmlFor="volume" className="text-gray-400 mr-2">
          Volume:
        </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onVolumeChange(e.target.value)}
          className="w-2/3"
        />
      </div>
    );
  }
  
export default VolumeControl  