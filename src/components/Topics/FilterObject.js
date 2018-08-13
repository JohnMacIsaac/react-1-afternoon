import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor() {
    super();
    
    this.state = {
      unfilteredArray: [ 
        { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, 
        { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, 
        { "name": "Carly Armstrong", "title": "CEO" } 
      ],
      userInput: "",
      filteredArray: [],
    }
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }
  
  filterArr(prop) {
    var oldArr = this.state.unfilteredArray; 
    // var newArr = [];
    // for(var i = 0; i < oldArr.length; i++) {
    //   if( oldArr[i].hasOwnProperty(prop) ) {
    //     newArr.push(oldArr[i]);
    //   }
    // }
    // alt: 
    var newArr = oldArr.filter(elem => {
      return elem.hasOwnProperty(prop);
    });

    this.setState({ filteredArray: newArr });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.unfilteredArray, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterArr(this.state.userInput) }>Filter</button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
      </div>
    )
  }
}



