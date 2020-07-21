import React, { Component } from 'react'
import { countOfSyllables } from './validation'
import './haiku.css';
const axios = require('axios');

export class UserHaiku extends Component {
    constructor (props) {
        super(props);
        this.state = { text: "Haiku goes here" }
    };


    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    validateHaiku = () => {
        let haikuCandidate = this.state.text;
        let haikuLines = haikuCandidate.split('\n');
        let haikuForValidation = haikuLines.map ( (str) => {
            var desired = str.replace(/[^\w\s]/gi, '');
            return desired;});

        countOfSyllables(haikuForValidation).then( async (results) => {
            if (results === true) {
                this.props.callbackFromParent(haikuLines);
                this.setState({ text: "Haiku goes here" });
                //post request goes here?
                axios.post('/api/submit', {haikuLines})
                .then((response) => {
                    console.log(response.status);
                    console.log(response.statusText);
                }, (error) => {
                    console.log(error);
                });
            }
        });
    }

    render() {
        return (
            <div>
                <textarea rows={3} cols={77} value={this.state.text} maxLength={200} onChange={this.handleChange} />
                <br></br> 
                <button onClick={this.validateHaiku}>Share</button>
            </div>
        );
    }
}

export default UserHaiku;
