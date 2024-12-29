import React from "react";

const MovieDetail = ({ movies }) => {
    return(
        <div>
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Year: {movie.releaseYear}</p>
            <p>Genre: {movie.genre}</p>
            <p>Cast: {movie.cast.join(', ')}</p>
            <p>Synoposis: {movie.Synoposis}</p>
        </div>
    );
};
export default MovieDetail;