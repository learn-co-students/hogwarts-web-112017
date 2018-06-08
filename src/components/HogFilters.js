import React, { Component } from 'react'

 class HogFilters extends Component {
   render() {
     return (
       <div className='HogFilters' >
       <select onChange={this.props.onChange}>
         <option value="name">Name</option>
         <option value="weight">Weight</option>
        </select>
        <br/>
        <br/>
        Greased?
        <input id="checkBox" type="checkbox" onChange={this.props.onCheck}/>
       </div>
     )
   }
  }

 export default HogFilters;
