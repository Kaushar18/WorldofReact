import React, { Component } from 'react'

export class SearchBarMovie extends Component {
    state = {movieterm:''}
    onInputChange = (event) =>{
        this.setState({movieterm:event.target.value})
    }
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.movieterm)

    }


    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit}className="ui form">
                    <div className="field">
                    <label>
                        Search Movie
                    </label>
                    <input 
                        type="text" 
                        value={this.state.movieterm} 
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBarMovie
