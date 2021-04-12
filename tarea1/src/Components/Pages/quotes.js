import React, { Component } from 'react';
const received_id = 9


class Quote extends Component {
    constructor (props){
        super(props)

        this.state = {
            id: received_id,
            quoteFetch: true,
            quotes: [],
        }
    }

    componentDidMount(){
        fetch('https://tarea-1-breaking-bad.herokuapp.com/api/quote?author=Jesse+Pinkman')
            .then(response => response.json())
            .then(quotesJson => this.setState({quotes: quotesJson, quoteFetch: false}))
    }

    render(){
        if (this.state.quoteFetch){
            return 'Loading...'
        }
        const quotes_array = this.state.quotes[this.state.id] 

        return(            
        );
    }
}

export default Quote;

       //const author = this.state.characters[this.state.id].name
        
        

