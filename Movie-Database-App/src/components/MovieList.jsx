import React from "react";

const MovieList = ({ movies }) => {
    return(
        <ul>
            {movies.map((movie) => ( 
                <li key={movie._id}>
                    <h3>{movie.title}</h3>
                    <p>Director: {movie.director}</p>
                    <p>Year: {movie.releaseYear}</p>
                    <p>Genre: {movie.genre}</p>
                    <p>Cast: {movie.cast.join(', ')}</p>
                </li>

            ))}
        </ul>
    );
};
export default MovieList;