import React from 'react'

function MovieDetail({movie}) {
    if(!movie){
        return <div>Loading....</div>
    }
    return (
        <div>
        <div className="ui segment">
            <img alt="Video Player" src={movie.Poster} />
        </div>
        <div className="ui segment">
            <h4 className="ui header">
                {movie.Title}
            </h4>
            <p>
                {movie.Year}
            </p>

        </div>
        </div>

    )
}

export default MovieDetail
