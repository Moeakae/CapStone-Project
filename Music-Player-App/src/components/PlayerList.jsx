import React from "react";
import { Typography } from "@mui/material";

function PlayerList({ songs, currentSongIndex, onSongSelect }) {
    return (
      <div className="playlist mt-6">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="Subtitle1" color="textSecondary">{artist}</Typography>
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
        const defaultVolume = parseFloat(process.env.REACT_APP_DEFAULT_VOLUME || 0.5);
        const [volume, setVolume] = useState(defaultVolume);

  const handleVolumeChange = (e) = {
    setVolume(e.target.value)
  };

  
    <div className="music-player">
      <h2>Music Player</h2>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        aria-label="Volume"
        />
        <p>Volume: {Math.round(volume * 100)}%</p>
      </div>
    </div>
    );
  }
  export default PlayerList;