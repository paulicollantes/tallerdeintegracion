import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import Search from './search';



class Header extends Component {
    render(){
        return(
            <header>

                <Search />

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