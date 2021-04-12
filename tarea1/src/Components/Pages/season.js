import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import Episode from './Episode'
import {getEpisodes} from '../../services/episodes'
const season_received_id = 1


class Season extends Component {
    constructor (props){
        super(props)

        this.state = {
            id:  season_received_id,
            episodes: [],
            isFetch: true,
        }
    }

    async componentDidMount (){
        const responseJson = await getEpisodes()
        this.setState({episodes: responseJson, isFetch: false})
        

    }
    
    render(){
        if (this.state.isFetch){
            return 'Loading...'
        }
        const season = this.state.id
       
        return(
            <div className="container-fluid">
                <h2>
                   Episodios Temporada {season}
                </h2>
                <ul>
                        {this.state.episodes.map((episodio) => {
                        return(
                        <li>
                            <Link to="/Season/Episode"><Episode episode={episodio.episode} title={episodio.title} key={episodio.episode_id}/></Link> 
                            
                        </li>
                        )
                        })}
                    
                </ul>              
       
            
            </div>
            
        );
    }
}

export default Season;