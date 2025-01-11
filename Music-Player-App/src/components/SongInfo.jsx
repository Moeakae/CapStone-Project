import React, { useState, useRef } from 'react';
import 'tailwindcss/tailwind.css';

const songs = [
  {
    title: 'Song One',
    artist: 'Artist One',
    src: '/songs/song1.mp3',
    cover: '/covers/cover1.jpg',
  },
  {
    title: 'Song Two',
    artist: 'Artist Two',
    src: '/songs/song2.mp3',
    cover: '/covers/cover2.jpg',
  },
  {
    title: 'Song Three',
    artist: 'Artist Three',
    src: '/songs/song3.mp3',
    cover: '/covers/cover3.jpg',
  },
];

function SongInfo({ song }) {
  return (
    <div className="song-info text-center">
      <img
        src={song.cover}
        alt={`${song.title} cover`}
        className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
      />
      <h2 className="text-2xl font-semibold">{song.title}</h2>
      <p className="text-gray-400">{song.artist}</p>
    </div>
  );
}
export default SongInfo;