import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super();
    
    this.state = {
      unfilteredArray: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
      userInput: "",
      filteredArray: [],
    }
  }
  
  handleChange(value) {
    this.setState({ userInput: value })
  }
  
  filterString(string) {
    var oldArr = this.state.unfilteredArray;
    var newArr = oldArr.filter( (elem) => elem.includes(string));

    // ALT 
    // var newArr = [];
    // for ( var i = 0; i < oldArr.length; i++ ) {
    //   if ( oldArr[i].includes(string) ) {
    //     newArr.push(oldArr[i]);
    //   }
    // }

    this.setState({ filteredArray: newArr });
  }
  
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: { JSON.stringify(this.state.unfilteredArray, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
        <button className="confirmationButton" onClick={ () => this.filterString(this.state.userInput) } >Filter String</button>
        <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
      </div>
    )
  }
}
