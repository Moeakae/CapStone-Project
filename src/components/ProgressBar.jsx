import React from "react";

const ProgressBar = ({ progress, onSeek }) => (
  <div className="flex items-center mt-4">
    <div
      className="flex-grow h-1 bg-gray-600 rounded cursor-pointer"
      onClick={(e) => {
        const clickPosition = (e.clientX / e.target.offsetWidth) * 100;
        onSeek(clickPosition);
      }}
    >
      <div className="bg-green-500 h-full" style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

export default ProgressBar;
