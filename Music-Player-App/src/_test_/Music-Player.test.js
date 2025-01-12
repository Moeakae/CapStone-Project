import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlayerList from "./components/PlayerList";

describe('PlayerList Component', () => {
  test('renders the initial UI', () => {
    render(<PlayerList />);
    expect(screen.getByText('Song One')).toBeInTheDocument();
    expect(screen.getByText('Artist One')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '▶️' })).toBeInTheDocument();
  });

  test('play/pause functionality works', () => {
    render(<PlayerList />);
    const playButton = screen.getByRole('button', { name: '▶️' });

    fireEvent.click(playButton);
    expect(playButton).toHaveTextContent('⏸️'); // Should switch to pause
    fireEvent.click(playButton);
    expect(playButton).toHaveTextContent('▶️'); // Should switch back to play
  });

  test('next and previous buttons work', () => {
    render(<PlayerList />);
    const nextButton = screen.getByRole('button', { name: '⏭️' });
    const prevButton = screen.getByRole('button', { name: '⏮️' });

    fireEvent.click(nextButton);
    expect(screen.getByText('Song Two')).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(screen.getByText('Song One')).toBeInTheDocument();
  });

  test('shuffle button works', () => {
    render(<PlayerList />);
    const shuffleButton = screen.getByRole('button', { name: '🔀' });

    fireEvent.click(shuffleButton);
    // Since shuffle is random, just check that the song changes
    const currentSongTitle = screen.getByText(/Song/).textContent;
    expect(currentSongTitle).not.toEqual('Song One');
  });

  test('volume control works', () => {
    render(<PlayerList />);
    const volumeSlider = screen.getByLabelText('Volume:');

    fireEvent.change(volumeSlider, { target: { value: 0.8 } });
    expect(volumeSlider.value).toBe('0.8');
  });

  test('progress bar updates correctly', () => {
    render(<PlayerList />);
    const progressBar = screen.getByRole('slider');

    fireEvent.change(progressBar, { target: { value: 30 } });
    expect(progressBar.value).toBe('30');
  });
});
