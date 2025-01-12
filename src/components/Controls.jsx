import React from "react";
import { Button, ButtonGroup } from  "@mui/material";
function Controls({ isPlaying, onPlayPause, onNext, onPrevious, onShuffle }) {
    return (
      <div className="controls flex justify-center items-center mt-6 space-x-4">
        <ButtonGroup>
        <button
          onClick={onPrevious} variant="contained" color="primary"
          className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg"
        >
          
        </button>
        
        <button
          onClick={onPlayPause} variant="containeed" color="secondary"
          className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg"
        >
          {isPlaying ? '' : ''}
        </button>
        <button
          onClick={onNext}
          className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg"
        >
          
        </button>
        <button
          onClick={onShuffle}
          className="bg-green-600 hover:bg-green-500 text-white p-3 rounded-full shadow-lg"
        >
          
        </button>
        </ButtonGroup>
      </div>
    );
};
export default Controls;