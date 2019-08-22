import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    input1: 0,
    input2: 0,
  }

  stringToNumber(str) {
    const value = Number(str)
    return isNaN(value) ? 0 : value
  }

  handleInputChange = (e, inputName) => {
    const value = this.stringToNumber(e.target.value)
    if (value !== 0) {
      this.setState({ [inputName]: value })
    }
  }

  handleInput1Change = (e) => {
    this.handleInputChange(e, 'input1')
  }

  handleInput2Change = (e) => {
    this.handleInputChange(e, 'input2')
  }

  getResult = () => {
    return this.state.input1 + this.state.input2
  }

  render() {
    const { input1, input2 } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" name="input-1" value={input1} onChange={this.handleInput1Change} />
          <input type="text" name="input-2" value={input2} onChange={this.handleInput2Change} />
          <div>{this.getResult()}</div>
        </header>
      </div>
    );
  }
}

export default App;
