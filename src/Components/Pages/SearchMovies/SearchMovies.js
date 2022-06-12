import React, {Component}from 'react'
import OmdbMovie from '../../../api/OmdbMovie'
import SearchBarMovie from './SearchBarMovie'
import { MOVIEKEY } from '../../../api/OmdbMovie'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

export class SearchMovies extends Component{
    state= {movies:[],selectedMovie:null}
    onTermSubmit= async (movieterm) =>{
        
        const response = await OmdbMovie.get(`/?apikey=${MOVIEKEY}` ,{
                params: {
                    s:movieterm
                }
            });
            this.setState({movies:response.data.Search,
                selectedMovie:response.data.Search[0]
            })

        }
onMovieSelect=(movie)=>{
    this.setState({selectedMovie:movie})
}
render(){
    return(
        <div className="ui container">
             <SearchBarMovie onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
            <div className="ui row">
                <div className="nine wide column">
                <MovieDetail movie={this.state.selectedMovie} />

                </div>
                <div className="seven wide column">
                <MovieList movies={this.state.movies} onMovieSelect={this.onMovieSelect}/>

                </div>
            </div>
            </div> 
        </div>
    )
}
}
export default SearchMovies