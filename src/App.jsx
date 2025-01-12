import PlayerList from "./components/PlayerList";
import VolumeControl from "./components/VolumeContral";
import SongInfo from "./components/SongInfo";
import Controls from "./components/Controls";
import ProgressBar from "./components/ProgressBar";
import axios from "axios";

function App() {
  const playerName = process.env.REACT_APP_MUSIC_PLAYER_NAME || 'My Music Player';
  const theme = process.env.REACT_APP_PLAYER_THEME || 'Light';
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const shuffleEnabled = process.env.REACT_APP_SHUFFLE_ENABLED === 'true';

if (shuffleEnabled) {
  console.log('Shuffle is enabled!');
}


  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setCurrentSongIndex(randomIndex);
    setIsPlaying(false);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    audioRef.current.volume = value;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(false);
  };

  return (
    
    <Box sx={{ p: 3, maxwidth: "400px", margin: "auto", textAlign: "center" }}>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1>Welcome to {playerName}</h1>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <SongInfo song={songs[currentSongIndex]} />
        <audio
          ref={audioRef}
          src={songs[currentSongIndex].src}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleNext}
          className={'app theme-${theme}'}
        ></audio>
        <Controls
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onShuffle={handleShuffle}
        />
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
        />
        <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
        <PlayerList
          songs={songs}
          currentSongIndex={currentSongIndex}
          onSongSelect={handleSongSelect}
        />
      </div>
    </div>
    </Box>
  );
}

export default App;
