import React, { Component } from 'react'
import './haiku.css';
import UserHaiku from './UserHaiku';
import NextHaiku from './NextHaiku';
const axios = require('axios');


export class Haiku extends Component {
    constructor (props) {
        super(props);
        this.state = {
            haiku: [],
            userText: ""
        }
    }

    //callback that is sent as a prop to children components in order for them to send data back to update the state
    myCallback = (dataFromChild) => {
        this.setState({haiku: dataFromChild});
        
    }

    componentDidMount() {
        axios.get('/api/default')
        .then(response => {this.setState({haiku: response.data})})
        .catch((e) => console.error(e));
    }

    render() {
        return (
            <div>
                <h1 className="title">2HAIKU4U</h1>
                
                
                {this.state.haiku.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
                        
                <NextHaiku callbackFromParent={this.myCallback} />
                <br></br>
                <br></br>
                <UserHaiku callbackFromParent={this.myCallback}/>

            </div>
        )
    }
}

export default Haiku;
