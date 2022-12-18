import React from 'react'

const Overview = ({ array, removeTask }) => {
  return (
    <ul className='array'>
      {
        array.map((value) => {
          return (
            <div key={value.id}>
              <li >
                {value.task}
              </li>
              <button dataset-id={value.id} onClick={() => removeTask(value.id)}>X</button>
            </div>
          )
        })
      }
    </ul>
  );
}

export default Overview;
