import React, { Component } from 'react'
import apiUrl from '../config.js';
const axios = require('axios');

export class NextHaiku extends Component {
   
    queryNextHaiku = () => {
        let randomHaiku = [];

        //production version
        // axios.get(`${apiUrl}/api/random`)
        // .then(response => {
        //     console.log(`Random haiku: ${response.data.rowOne}, ${response.data.rowTwo}, ${response.data.rowThree}`);
        //     randomHaiku = [response.data.rowOne, response.data.rowTwo, response.data.rowThree];
        //     this.props.callbackFromParent(randomHaiku);
        // })
        // .catch((e) => console.error(e));

        //workaround version:
        axios.get(`${apiUrl}/api/random`)
        .then(response => {
            randomHaiku = [response.data[0], response.data[1], response.data[2]];
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