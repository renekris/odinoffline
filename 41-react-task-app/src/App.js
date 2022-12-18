import './App.css';
import Overview from './components/Overview';
import React, { Component } from 'react';
import iniqid from 'uniqid';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          id: iniqid(),
          task: 'Sleep',
        },
        {
          id: iniqid(),
          task: 'Work',
        },
      ],
    }
  }

  handleAddTask(e) {
    e.preventDefault();
    const inputData = e.target.children[0].value;
    const data = {
      id: iniqid(),
      task: inputData,
    }
    this.setState((state) => ({
      array: [data, ...state.array]
    }));
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        <Overview array={array} />
        <form onSubmit={(e) => this.handleAddTask(e)}>
          <input className='data-input'></input>
          <button type='submit'>Save to list!</button>
        </form>
      </div>
    );
  }
}
