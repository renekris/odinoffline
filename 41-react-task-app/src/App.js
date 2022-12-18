import './App.css';
import Overview from './components/Overview';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ['one'],
    }
  }

  handleAddTask(e) {
    e.preventDefault();
    const dataInput = e.target.children[0].value;
    this.setState((state) => ({
      array: [dataInput, ...state.array]
    }));
  }

  render() {
    return (
      <div>
        <Overview array={this.state.array} />
        <form onSubmit={(e) => this.handleAddTask(e)}>
          <input className='data-input'></input>
          <button type='submit'>Save to list!</button>
        </form>
      </div>
    );
  }
}
