import React from 'react'

const hogFilter = (props) => {
  return (
    <div>
      Greased<input type="checkbox" onChange={props.greasedFunction}></input>
      <select>
          <option value="weight">Sort By Weight</option>
          <option value="name">Sort By Name</option>
      </select>
    </div>
  )
}

export default hogFilter
