import React, { Component } from 'react'

export default class Overview extends Component {
  render() {
    return (
      <ol className='array'>
        {
          this.props.array.map((value, index, array) => <li key={index}>{value}</li>)
        }
      </ol>
    )
  }
}
