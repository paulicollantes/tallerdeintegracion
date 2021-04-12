import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import Search from './search';
import {getCharactersBySearch} from '../../services/episodes'



class Header extends Component {
    handleSearch = async (search) => {
        const responseJson = await getCharactersBySearch(search)
        console.log(responseJson)
    
    }
    render(){
        return(
            <header>

                <Search handleSearch={this.handleSearch}/>

                <nav>
                    <ul>
                        <li className='First'>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/BreakingBad">Breaking Bad</Link>
                        </li>
                        <li className='Last'>
                        <Link to="/BetterCallSoul">Better Call Saul</Link>
                        </li>
                    </ul>
                </nav>

            </header>
        );
    }
}

export default Header;