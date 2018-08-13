import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }
  
  handleChange (val) {
    this.setState({ userInput: val });
  }

  assignEvenAndOdds(userInput) {
    var arrOfStr = userInput.split(',');
    var arrOfNum = arrOfStr.map( elem => parseInt(elem, 10)); 
    var arrOfEvens = [];
    var arrOfOdds = [];
    arrOfNum.forEach( elem => {
      if(elem % 2 === 0) {
        arrOfEvens.push(elem)
      } else {
        arrOfOdds.push(elem)
      }
    });
    this.setState({ evenArray: arrOfEvens, oddArray: arrOfOdds });
  }
  
  render() {
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () =>  { this.assignEvenAndOdds(this.state.userInput) }} > Split </button>
        <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
        <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
      </div>
    )
  }
}

// export default EvenAndOdd; // alt


// Question: e.target.value 
// in EvenAndOdd.js, what is target? a method, object, key, keyword? 
// (Also asked in questions.txt)

