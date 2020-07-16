import React, { Component } from 'react'
import { countOfSyllables } from './validation'
import './haiku.css';

export class UserHaiku extends Component {
    state = { text: "Haiku goes here" };

    //this sets the state equal to the entered text
    //needs a button that takes the state and splits it by \n and then " ", then calls function
    //function should changes state value for Validated, and if true should call the function that adds it to the DB
    
    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    // printHaiku = () => {
    //     console.log(this.state.text);
    // } 

    validateHaiku = () => {
        let haikuCandidate = this.state.text;
        let haikuLines = haikuCandidate.split('\n');
        let haikuForValidation = haikuLines.map ( (str) => {
            var desired = str.replace(/[^\w\s]/gi, '');
            return desired;
        });
        countOfSyllables(haikuForValidation).then( async (results) => {
            console.log(`This is a valid haiku ${results}`)
            //results === true ? something that changes haiku state : console.log('test: false');
        });
        
        


    }

    //FUNCTION that is called upon state.valid = true. This will post request the server to add the haiku

    //FUNCTION called after the one above, will set state to equal the newly validated function


    render() {
        return (
            <div>
                <textarea rows={3} cols={77} value={this.state.text} maxLength={200} onChange={this.handleChange} />
                {/*<button onClick={this.printHaiku}>Print to Console</button>*/}
                <br></br> 
                <button onClick={this.validateHaiku}>Share</button>
            </div>
        );
    }
}


export default UserHaiku
