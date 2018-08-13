import React, { Component } from 'react';

import EvenAndOdd from '../Topics/EvenAndOdd.js';
import FilterObject from '../Topics/FilterObject.js';
import FilterString from '../Topics/FilterString.js';
import Palindrome from '../Topics/Palindrome.js';
import Sum from '../Topics/Sum.js';

// constructor camel case  (the first letter is also captalized) In React constructor camel case is required for the name of your class. If it is not constructor camel case the component will not mount or render in your application. 

export default class TopicBrowser extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum /> 
      </div>
    )
  }
}
// export default TopicBrowser; // alt:
// export default class TopicBrowser extends Component { }
