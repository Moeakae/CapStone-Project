import React, { useState} from "react";

const AddNewMovieForm = ({ onAddMovie }) => {
    const [movie, setMovie] = useState({ title: '', director: '', releaseYear: '', genre: '', cast: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie((prevState) => ({ ...prevState, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie(movie)
        setMovie({ title: '', director: '', releaseYear: '', genre: '', cast: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={movie.title} onChange={handleChange} placeholder="Title" />
            <input type="text" name="director" value={movie.director} onChange={handleChange} placeholder="Director" />
            <input type="number" name="releaseYear" value={movie.releaseYear} onChange={handleChange} placeholder="ReleaseYear" />
            <input type="text" name="genre" value={movie.genre} onChange={handleChange} placeholder="Genre" />            
           <input type="text" name="cast" value={movie.cast} onChange={handleChange} placeholder="Cast (coma separated)" />
           <button type="submit">add Movie</button>
        </form>
    );
};
export default AddNewMovieForm;
