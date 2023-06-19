import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MovieSearch() {
const [searchTerm, setSearchTerm] = useState("");
const [movies, setMovies] = useState([]);
const navigate = useNavigate();

const handleChange = (event) => {
    setSearchTerm(event.target.value);
};

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=4d9b894b&query=${searchTerm}`
        )
        setMovies(response.data.results);
    } catch (error) {
        console.error(error);
    }
};

const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
};

return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchTerm">Search for a movie:</label>
            <input
            type="text"
            id="searchTerm"
            value={searchTerm}
            onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
        <ul>
            {movies?.map((movie)=> (
                <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                    {movie.title}
                </li>
            ))}
        </ul>
    </div>
);
}

export default MovieSearch;