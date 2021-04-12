import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//components
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import HomePage from './Components/Pages/homePage'
import BetterCallSoul from './Components/Pages/betterCallSaul'
import BreakingBad from './Components/Pages/breakingBad'
import Season from './Components/Pages/season'
import Episode from './Components/Pages/episodeContainer'
import Character from './Components/Pages/character'

//style
import './App.scss'

class App extends Component {
    render(){
        return(
            <Router>
                <div className = 'App'>
                <Header />
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/BreakingBad' component={BreakingBad} />
                    <Route exact path='/BetterCallSoul' component={BetterCallSoul} />
                    <Route exact path='/Season' component={Season} />
                    <Route exact path='/Season/Episode' component={Episode} />
                    <Route exact path='/Season/Episode/Character' component={Character} />
                <Footer />
                </div>

            </Router>
        );
    }
}

export default App;