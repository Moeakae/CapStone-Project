import React from "react";

const VolumeControl = ({ volume, setVolume }) => (
  <div className="mt-4">
    <label htmlFor="volume" className="block text-sm text-gray-400">Volume</label>
    <input
      type="range"
      id="volume"
      min="0"
      max="100"
      value={volume}
      onChange={(e) => setVolume(e.target.value)}
      className="w-full mt-1"
    />
  </div>
);

export default VolumeControl;


