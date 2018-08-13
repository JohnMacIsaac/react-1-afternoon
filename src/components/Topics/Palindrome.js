import React, {Component} from 'react';

export default class Palindrome extends Component {
  constructor() {
    super();
    
    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }
  
  checkPalindrome(userInput) {
    var forward = userInput;
    var backward = userInput.split('').reverse().join('');
    if (forward === backward) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }
  
  render() {
    return(
      <div className="puzzleBox filterStringPB" >
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
        <button className="confirmationButton" onClick={ () => this.checkPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}

