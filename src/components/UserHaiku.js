import React, { Component } from 'react'
import {getSyllableCount, countOfSyllables} from './validation'

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
        let haikuPieces = [];
        let haikuLines = haikuCandidate.split('\n');
        // for (let i = 0; i < haikuLines.length; i++){
        //     let haikuWords = haikuLines[i].split(' ');
        //     haikuPieces.push(haikuWords);
        // }
        // console.log(haikuPieces); 

        countOfSyllables(haikuLines).then( async (results) => {
            console.log(results)
        });
        

    }

    render() {
        return (
            <div>
                <textarea rows={3} cols={50} value={this.state.text} onChange={this.handleChange} />
                {/*<button onClick={this.printHaiku}>Print to Console</button>*/}
                <br></br>
                <button onClick={this.validateHaiku}>Share</button>
            </div>
        );
    }
}


export default UserHaiku
