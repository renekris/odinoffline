import React from 'react'

const Overview = (props) => {
  const { array } = props;

  return (
    <ul className='array'>
      {
        array.map((value) => <li key={value.id}>{value.task}</li>)
      }
    </ul>
  );
}

export default Overview;
