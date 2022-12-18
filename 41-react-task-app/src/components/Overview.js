import React from 'react'

const Overview = ({ array, removeTask, editTask }) => {
  return (
    <ul className='array'>
      {
        array.map((value) => {
          return (
            <div key={value.id}>
              <li >
                {value.task}
              </li>
              <button onClick={() => removeTask(value.id)}>X</button>
              <button onClick={() => editTask(value.id)}>EDIT</button>
            </div>
          )
        })
      }
    </ul>
  );
}

export default Overview;
