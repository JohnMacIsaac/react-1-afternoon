import React, {Component} from 'react';

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      num1: '',
      num2: '',
      sum: null
    }
  }

  handleChange1(value) {
    this.setState({ num1: parseInt(value, 10) })

  }
  handleChange2(value) {
    this.setState({ num2: parseInt(value, 10) })
  }

  add(x, y) {
    this.setState({ sum: x + y });
  }
  render() {
    return(
      <div className='puzzleBox sumPB' >
        <h4>Sum</h4>
        <input className='inputLine' type='number' onChange={ (e) => this.handleChange1(e.target.value) } />
        <input className='inputLine' type='number' onChange={ (e) => this.handleChange2(e.target.value) }/>
        <button className='confirmationButton' onClick={ () => this.add(this.state.num1, this.state.num2) }>Sum</button>
        <span className='resultsBox'>Sum: { this.state.sum } </span>
      </div>
    )
  }
}

