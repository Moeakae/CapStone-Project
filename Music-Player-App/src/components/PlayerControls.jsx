import React from "react";

const PlayerControls = ({ toggleRepeat, toggleShuffle, prevSong, nextSong, isRepeat, isShuffle }) => (
  <div className="flex items-center justify-between mt-4">
    <button onClick={toggleRepeat} className={`${isRepeat ? "text-green-500" : "text-gray-400"} hover:text-white`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-3-3m3 3l-3 3m-10 3l3-3m0 0L4 12m3 3V9" />
      </svg>
    </button>
    <button onClick={prevSong} className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 15l-3-3m0 0l3-3m-3 3h12" />
      </svg>
    </button>
    <button onClick={nextSong} className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 15l3-3m0 0l-3-3m3 3H4" />
      </svg>
    </button>
    <button onClick={toggleShuffle} className={`${isShuffle ? "text-green-500" : "text-gray-400"} hover:text-white`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h5l1.5 1.5M19 4h-5l-1.5 1.5M15 20h5l-1.5-1.5M9 20H4l1.5-1.5" />
      </svg>
    </button>
  </div>
);

export default PlayerControls;
