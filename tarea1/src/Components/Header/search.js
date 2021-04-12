import React, { Component } from 'react';

class Search extends Component {
    constructor (props){
        super(props)

        this.state = { search: ''}
    }

    handleChange = (e) =>{
        this.setState({ search: e.target.value})
    }

    render(){
        const {handleSearch} = this.props
        return(
            <div className='searchbar'>
                <input
                value={this.state.search}
                    onChange ={this.handleChange} 
                    className='search-input'
                    type='text'
                />
                <button className='search-btn' onClick={() => handleSearch(this.state.search)}>Buscar</button>
            </div>
        );
    }
}

export default Search;