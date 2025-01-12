import React from "react";

const Playlist = ({ playlist, currentSong, selectSong }) => (
  <div className="mt-4">
    <h3 className="text-lg font-semibold">Playlist</h3>
    <ul className="mt-2 space-y-2">
      {playlist.map((song, index) => (
        <li
          key={index}
          onClick={() => selectSong(index)}
          className={`p-2 rounded cursor-pointer ${index === currentSong ? "bg-green-500" : "bg-gray-700 hover:bg-gray-600"}`}
        >
          {song.title} - <span className="text-gray-400">{song.artist}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Playlist;
