import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies,onMovieSelect}) {
    const renderedMovies = movies.map((movie) =>{
        return <MovieCard key= {movie.imdbID} movie={movie} onMovieSelect={onMovieSelect}/>
    })
    return (
        <div className="ui list">
                {renderedMovies}
        </div>
    )
}

export default MovieList
