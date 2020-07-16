import React, { Component } from 'react'
import './haiku.css';
const axios = require('axios');


export class Haiku extends Component {
    constructor (props) {
        super(props);
        this.state = {
            haiku: [],
            userText: ""
        }
    }

    componentDidMount() {
        axios.get('/api/haiku')
        .then(response => {this.setState({haiku: response.data})})
        .catch((e) => console.error(e));
    }

    render() {
        return (
            <div>
                <h2>2haiku4u</h2>
                
                
                {this.state.haiku.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
                     
                <br></br>

            </div>
        )
    }
}

export default Haiku;
