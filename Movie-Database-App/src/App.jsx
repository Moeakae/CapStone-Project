import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: '',
    year: '',
    genre: '',
    description: ''
  });

  
  useEffect(() => {
    axios.get('http://localhost:5000/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  
  const handleAddMovie = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/movies', newMovie)
      .then(response => {
        setMovies([...movies, response.data]);
        setNewMovie({ title: '', year: '', genre: '', description: '' });
      })
      .catch(error => {
        console.error('Error adding movie:', error);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>

      <main>
        <section className="add-movie">
          <h2>Add New Movie</h2>
          <form onSubmit={handleAddMovie}>
            <input
              type="text"
              name="title"
              value={newMovie.title}
              onChange={handleInputChange}
              placeholder="Title"
              required
            />
            <input
              type="number"
              name="year"
              value={newMovie.year}
              onChange={handleInputChange}
              placeholder="Year"
              required
            />
            <input
              type="text"
              name="genre"
              value={newMovie.genre}
              onChange={handleInputChange}
              placeholder="Genre"
              required
            />
            <textarea
              name="description"
              value={newMovie.description}
              onChange={handleInputChange}
              placeholder="Description"
              required
            />
            <button type="submit">Add Movie</button>
          </form>
        </section>

        <section className="movie-list">
          <h2>Movie List</h2>
          {movies.length === 0 ? (
            <p>No movies found.</p>
          ) : (
            <ul>
              {movies.map(movie => (
                <li key={movie._id}>
                  <h3>{movie.title} ({movie.year})</h3>
                  <p><strong>Genre:</strong> {movie.genre}</p>
                  <p><strong>Description:</strong> {movie.description}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer>
        <p>Movie Database App</p>
      </footer>
    </div>
  );
}

export default App;
