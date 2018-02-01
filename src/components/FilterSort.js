import React from 'react';

class FilterSort extends React.Component{

constructor (props) {
  super(props)
  this.state = {
    checkedGreasedOnly: false,
    selectSortedBy: 'name'
  }
}


handleGreasedOnly = (e) => {
    this.props.setGreasedOnly()
    this.setState((previousState) => {
      return {checkedGreasedOnly: !previousState.checkedGreasedOnly}
    })
 }

handleSortedBy = (e) => {
    let newSortedBy = e.target.value
    this.props.setSortedBy(newSortedBy)
    this.setState((previousState) => {
      return {selectSortedBy: newSortedBy}
    })
 }


render () {
  return (
    <div>
     <label>Greased Hogs Only: </label>
    <input
        type="checkbox"
        checked={this.state.checkedGreasedOnly}
        onChange={this.handleGreasedOnly}
      />
     <br/>
     <label>Sort By: </label>
      <select onChange={this.handleSortedBy}>
         <option value="name">Name</option>
         <option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">Weight</option>
      </select>
    </div>
  )
}

}


export default FilterSort;
