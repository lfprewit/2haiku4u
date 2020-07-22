import React, { Component } from 'react'
import apiUrl from '../config.js';
const axios = require('axios');

export class NextHaiku extends Component {
   
    queryNextHaiku = () => {
        let randomHaiku = [];

        axios.get(`${apiUrl}/api/random`)
        .then(response => {
            console.log(`Random haiku: ${response.data.rowOne}, ${response.data.rowTwo}, ${response.data.rowThree}`);
            randomHaiku = [response.data.rowOne, response.data.rowTwo, response.data.rowThree];
            this.props.callbackFromParent(randomHaiku);
        })
        .catch((e) => console.error(e));
    }

    render() {
        return (
            <div>
                <button onClick={this.queryNextHaiku}>Next</button>
            </div>
        );
    }
}

export default NextHaiku;