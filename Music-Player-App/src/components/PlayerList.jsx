import React from "react";

function Playlist({ songs, currentSongIndex, onSongSelect }) {
    return (
      <div className="playlist mt-6">
        <h3 className="text-xl font-semibold mb-4">Playlist</h3>
        <ul className="space-y-2">
          {songs.map((song, index) => (
            <li
              key={index}
              onClick={() => onSongSelect(index)}
              className={`cursor-pointer p-2 rounded-lg ${
                currentSongIndex === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {song.title} - {song.artist}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default PlayList;