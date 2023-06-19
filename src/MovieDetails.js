
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetails() {
const [movie, setMovie] = useState(null);
const { id } = useParams();

useEffect(() => {
    const fetchMovie = async () => {
        try {
            const response = await axios.get(
                `http://www.omdbapi.com/${id}?apikey=4d9b894b`
            );
            setMovie(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    fetchMovie();
}, [id]);

if (!movie) {
return <div>Loading...</div>;
}

return (
    <div>
        <h1>{movie.title}</h1>
        <p>movie.overview</p>
        <img
        src={`http://img.omdbapi.com/?apikey=4d9b894b/${movie.poster_path}`}
        alt={movie.title}
        />
    </div>
);
}

export default MovieDetails;
