import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
const received_id = 9


class Character extends Component {
    constructor (props){
        super(props)

        this.state = {
            id: received_id,
            characters:  [],
            isFetch: true,
            quotes: [],
        }
    }

    componentDidMount(){
        fetch('https://tarea-1-breaking-bad.herokuapp.com/api/characters')
            .then(response => response.json())
            .then(charactersJson => this.setState({characters: charactersJson, isFetch: false}))
    }

    render(){
        if (this.state.isFetch){
            return 'Loading...'
        }
        const name = this.state.characters[this.state.id].name
        const occupation = this.state.characters[this.state.id].occupation
        const status = this.state.characters[this.state.id].status
        const nickname = this.state.characters[this.state.id].nickname
        const bb_appearance = this.state.characters[this.state.id].appearance
        const bcs_appearance = this.state.characters[this.state.id].better_call_saul_appearance
        const portrayed = this.state.characters[this.state.id].portrayed
        const series = this.state.characters[this.state.id].category
        const imagen = this.state.characters[this.state.id].img

        return(
            <div className="container-fluid">
                <h2>
                    Información de {name}
                </h2>
                <section className='foto'>
                    <img src={imagen}/>
                </section>
                <h2>
                    Información Personaje
                </h2>
                    <ul>
                        <li>Ocupación: {occupation}</li>
                        <li>Status: {status}</li>
                        <li>Sobrenombre: {nickname}</li>
                        <li>Actor/Actriz: {portrayed}</li>
                        <li>Serie: {series}</li>
                    </ul>
                <h3>
                    Temporadas Breaking Bad
                </h3>
                <ul>
                    {bb_appearance.map((s_bb, index) => {
                            return (
                            <li key={index}>
                                <Link to="/Season">Temporada {s_bb}</Link> 
                            </li>
                            )
                        })}  
                    </ul>
                <h3>
                    Temporadas Better Call Saul
                </h3>
                    <ul>
                        {bcs_appearance.map((s_bcs, index) => {
                            return (
                            <li key={index}>
                                <Link to="/Season"> Temporada {s_bcs}</Link> 
                            </li>
                            )
                        })}
                    </ul>
                <h3>
                    Citas
                </h3>
                <ul> 
                    {this.state.quotes.map((quo, index) => {
                            return (
                            <li key={index}>
                                <Link to="/Season">{quo}</Link> 
                            </li>
                            )
                        })}
                </ul>

            </div>
            
        );
    }
}

export default Character;