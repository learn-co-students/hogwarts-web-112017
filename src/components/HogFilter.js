import React from 'react'

const hogFilter = (props) => {

  const handleSelectOnChange = (e) => {
    props.sortFunction(e.target.value)
  }

  return (
    <div>
      Greased<input type="checkbox" onChange={props.greasedFunction}></input>
      <select onChange={handleSelectOnChange}>
          <option style={{display: "none"}} value="none">Sort By</option>
          <option value="weight">Sort By Weight</option>
          <option value="name">Sort By Name</option>
      </select>
    </div>
  )
}



export default hogFilter
