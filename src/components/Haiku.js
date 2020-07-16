import React, { Component } from 'react'
import './haiku.css';
import UserHaiku from './UserHaiku';
const axios = require('axios');


export class Haiku extends Component {
    constructor (props) {
        super(props);
        this.state = {
            haiku: [],
            userText: ""
        }
    }

    myCallback = (dataFromChild) => {
        this.setState({haiku: dataFromChild});
        
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
                
                <UserHaiku callbackFromParent={this.myCallback}/>

            </div>
        )
    }
}

export default Haiku;
