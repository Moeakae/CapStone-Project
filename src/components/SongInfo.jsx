import React from "react";

const SongInfo = ({ song, isPlaying, togglePlay }) => (
  <div>
    <div className="relative">
      <img src={song.cover} alt="Album Cover" className="rounded-lg w-full" />
      <button
        onClick={togglePlay}
        className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg focus:outline-none"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m5 3a9 9 0 10-18 0 9 9 0 0018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.336-3.69A1 1 0 007 8.309v7.382a1 1 0 001.416.91l6.336-3.69a1 1 0 000-1.732z" />
          </svg>
        )}
      </button>
    </div>
    <div className="mt-4 text-center">
      <h2 className="text-lg font-semibold">{song.title}</h2>
      <p className="text-gray-400">{song.artist}</p>
    </div>
  </div>
);

export default SongInfo;
