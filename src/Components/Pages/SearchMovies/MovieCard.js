import React from 'react'
import "./MovieCard.css"

const MovieCard=({movie,onMovieSelect}) =>{

    return (
        <div className="movie-item item" onClick={() =>onMovieSelect(movie)}>
                <img src={movie.Poster} className="ui image"/>
                <h4>{movie.Title}</h4>
            
        </div>
    )
}

export default MovieCard
