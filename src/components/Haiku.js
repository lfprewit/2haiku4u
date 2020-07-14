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
    //refacter this with Axios??
    // componentDidMount() {
    //     fetch('./api/haiku')
    //     .then(res => res.json())
    //     .then(haiku => this.setState({haiku}, () => console.log('Haiku fetched.', haiku))
    //     );
    // }

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
