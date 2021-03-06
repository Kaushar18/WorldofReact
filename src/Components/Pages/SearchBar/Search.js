import React, { Component } from 'react'
import SearchBar from './SearchBar'
import unsplash from '../../../api/unsplash';
import ImageList from '../../ImageList/ImageList';
export class Search extends Component {
    state={images:[]};
    onSearchSubmit= async (term) => {
      const response =   await unsplash.get('/search/photos',{
            params:{query:term}
         });
         this.setState({images:response.data.results});
    }
    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default Search
