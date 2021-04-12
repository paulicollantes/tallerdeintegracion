import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';


class HomePage extends Component {
    render(){
        return(
            <div className="container-fluid">
                <h1>
                    Home Page Content
                </h1>

                <h2>Breaking Bad</h2>
                    <ul>
                        <li>
                            <Link to="/Season">Temporada 1</Link>
                        </li>
                        <li>
                            <Link to="/Season">Temporada 2</Link>
                        </li>
                        <li>
                            <Link to="/Season">Temporada 3</Link>
                        </li>
                        <li>
                            <Link to="/Season">Temporada 4</Link>
                        </li>
                        <li>
                            <Link to="/Season">Temporada 5</Link>
                        </li>
                    </ul>

                <h2>Better Call Saul</h2>
                    <ul>
                        <li>
                            <Link to="/Season">Temporada 1</Link>
                        </li>
                        <li>
                            <Link to="/Season">Temporada 2</Link>
                        </li>
                        <li>
                            <Link to="/Season">Temporada 3</Link>
                        </li>
                        <li>
                            <Link to="/Season">Temporada 4</Link>
                        </li>
                        <li>
                            <Link to="/Season">Temporada 5</Link>
                        </li>
                    </ul>
                
            </div>
            
        );
    }
}

export default HomePage;