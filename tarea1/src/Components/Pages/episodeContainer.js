import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class EpisodeContainer extends Component {
    constructor (props){
        super(props)

        this.state = {
            episodes:  [],
            isFetch: true,

        }
    }

    componentDidMount(){
        fetch('https://tarea-1-breaking-bad.herokuapp.com/api/episodes')
            .then(response => response.json())
            .then(espisodesJson => this.setState({episodes: espisodesJson, isFetch: false}))
    }

    render(){
        if (this.state.isFetch){
            return 'Loading...'
        }
        const id = 13
        const title = this.state.episodes[id].title
        const season = this.state.episodes[id].season
        const episode_number = this.state.episodes[id].episode
        const air_date = this.state.episodes[id].air_date
        const characters = this.state.episodes[id].characters
        const series = this.state.episodes[id].series


        return(
            <div className="container-fluid">      
                <h2>
                    Información del Episodio {episode_number}
                </h2>         

                    <ul>
                        <li>Nombre: {title}</li>
                        <li>Fecha: {air_date}</li>
                        <li>
                        <Link to="/Season">Temporada: {season}</Link>
                        </li>
                    </ul>
                <h3>
                    Personajes
                </h3>
                    <ul>
                        {characters.map((char, index) => {
                            return (
                            <li key={index}>
                                <Link to="/Season/Episode/Character">{char}</Link> 
                            </li>
                            )
                        })}                           
                        
                    </ul>
            </div>
            
        );
    }
}

export default EpisodeContainer;