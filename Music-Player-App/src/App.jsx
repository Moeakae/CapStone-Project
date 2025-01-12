import React, { useState } from "react";
import SongInfo from "./components/SongInfo";
import ProgressBar from "./components/ProgressBar";
import PlayerControls from "./components/PlayerControls";
import VolumeControl from "./components/VolumeControl";
import PlayList from "./components/PlayList";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const playlist = [
    { title: "Song One", artist: "Artist One", cover: "https://via.placeholder.com/300" },
    { title: "Song Two", artist: "Artist Two", cover: "https://via.placeholder.com/300" },
    { title: "Song Three", artist: "Artist Three", cover: "https://via.placeholder.com/300" },
  ];

  
  const toggleRepeat = () => setIsRepeat(!isRepeat);
  const toggleShuffle = () => setIsShuffle(!isShuffle);
  const nextSong = () => setCurrentSong((prev) => (isShuffle ? Math.floor(Math.random() * playlist.length) : (prev + 1) % playlist.length));
  const prevSong = () => setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);
  

  const musicApiUrl = import.meta.env.VITR_MUSIC_URL;
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(`${musicApiUrl}/playlist`);
        if (!response.ok) throw new Error("Failed to fetch playlist");
        const data = await response.json();
        setPlaylist(data.songs || []);
      } catch (error) {
        console.error("Error fetching playlist:", error);
        setPlaylist([
          { title: "Fallback Song 1", artist: "Artist One", cover: "https://via.placeholder.com/300" },
          { title: "Fallback Song 2", artist: "Artist Two", cover: "https://via.placeholder.com/300" },
        ]);
      }
    };

    fetchPlaylist();
  }, [musicApiUrl]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const selectSong = (index) => setCurrentSong(index);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-900 text-white">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-sm">
        <SongInfo song={playlist[currentSong]} isPlaying={isPlaying} togglePlay={togglePlay} />
        <ProgressBar progress={50} onSeek={(progress) => console.log(progress)} />
        <PlayerControls
          toggleRepeat={toggleRepeat}
          toggleShuffle={toggleShuffle}
          prevSong={prevSong}
          nextSong={nextSong}
          isRepeat={isRepeat}
          isShuffle={isShuffle}
        />
        <VolumeControl volume={volume} setVolume={setVolume} />
        <PlayList playlist={playlist} currentSong={currentSong} selectSong={selectSong} />
      </div>
    </div>
  );
};

export default App;
