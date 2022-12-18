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
    this.removeTask = this.removeTask.bind(this);
  }

  removeTask(id) {
    console.log(id);
    if (id) {
      this.setState((state) => ({
        array: [...state.array.filter((value) => value.id !== id)]
      }));
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
        <Overview array={array} removeTask={this.removeTask} />
        <form onSubmit={(e) => this.handleAddTask(e)}>
          <input className='data-input'></input>
          <button type='submit'>Save to list!</button>
        </form>
      </div>
    );
  }
}
