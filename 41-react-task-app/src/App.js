import './App.css';
import Overview from './components/Overview';
import React, { Component } from 'react';
import iniqid from 'uniqid';


function Submit(props) {
  return (
    <form onSubmit={e => props.handleAddTask(e)}>
      <input className='data-input'></input>
      <button type='submit'>Save to list!</button>
    </form>
  );
}

function Edit(props) {
  return (
    <form onSubmit={e => props.handleUpdateTask(e)}>
      <input className='data-input'></input>
      <button type='submit'>Save edit!</button>
    </form>
  )
}


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
      isEditing: false,
      editId: null,
    }
    // this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  removeTask = (id) => {
    console.log(id);
    if (id) {
      this.setState((state) => ({
        array: [...state.array.filter((value) => value.id !== id)],
      }));
    }
  }

  editTask = (id) => {
    this.setState(() => ({ isEditing: true, editId: id }));

    setTimeout(() => {
      const inputField = document.getElementsByClassName('data-input')[0];
      inputField.value = this.state.array.filter((value) => value.id === id)[0].task;
    }, 0);
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

  handleUpdateTask(e) {
    e.preventDefault();
    const inputData = e.target.children[0].value;
    const id = this.state.editId;
    if (id) {
      this.setState((state) => ({
        array: [{ id, task: inputData }, ...state.array.filter((value) => value.id !== id)]
      }));
    }
    this.setState(() => ({ isEditing: false, editId: null }));
  }

  render() {
    const { array, isEditing } = this.state;

    return (
      <div>
        <Overview array={array} removeTask={this.removeTask} editTask={this.editTask} />
        {isEditing
          ? <Edit handleUpdateTask={(e) => this.handleUpdateTask(e)} />
          : <Submit handleAddTask={(e) => this.handleAddTask(e)} />}
      </div>
    );
  }
}
