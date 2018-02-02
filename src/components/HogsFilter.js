import React from 'react'
import App from './App'

class HogsFilter extends React.Component{


  handleGreasedCheck = (e) => {
    this.props.onGreasedFilter(e.target.checked)
  }

  handleSortChange = (e) => {
   return this.props.onSortFilter(e.target.value)
  }

  render(){

    return (

      <div>
        <label name="greased_pigs">Greased Pigs Only </label>
        <input type="checkbox" name="greased_pigs" onClick={this.handleGreasedCheck}/>
        <label name="sort_weight">  Sort By: </label>
        <select name="sort_weight" size="1" onChange={this.handleSortChange}>
          <option value="name"> Name </option>
          <option value="weight"> Weight </option>
        </select>
      </div>
    )


  }
}


export default HogsFilter;
