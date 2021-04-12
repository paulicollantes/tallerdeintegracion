import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';


class BetterCallSaul extends Component {
    render(){
        return(
            <div className="container-fluid">
                <h1>
                    Better Call Saul Content
                </h1>
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

export default BetterCallSaul;