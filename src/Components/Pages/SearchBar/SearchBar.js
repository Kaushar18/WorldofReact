import React, { Component } from 'react'

export class SearchBar extends Component {
        state= {term:''};
        onFormSubmit =(event)=>{
            event.preventDefault();
            this.props.onSubmit(this.state.term)
        }
    render() {
        return (
            <div className="ui segment"> 
               <form className="ui form" onSubmit={this.onFormSubmit}>
                   <div className="field">
                       <label>Image Search:</label>
                     <input 
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({term:e.target.value.toUpperCase()}) }
                        placeholder="Enter serach text here...."
                     />
                   </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
