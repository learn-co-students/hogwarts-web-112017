import React from 'react'
import hogs from '../porkers_data'

class Filter extends React.Component {


  handleGreasedFilter = () => {

  }

  handleSort = (event) => {
    console.log(this.props);
    if (event.target.value === "name") {
      this.props.changeSort('name')
      this.handleSortByName()
    } else if (event.target.value === "weight") {
      this.props.changeSort('weight')
      this.handleSortByWeight()
    } else {
      this.props.changePigs(hogs)
      this.props.changeSort('none')
    }
  }

  handleSortByName = () => {
    let newPigs = this.props.pigs.slice().sort((currentPig, nextPig) => {
      return currentPig.name < nextPig.name
    }).reverse()

    this.props.changePigs(newPigs)
  }

  handleSortByWeight = () => {
    let newPigs = this.props.pigs.slice().sort((currentPig, nextPig) => {
      return currentPig.weight < nextPig.weight
    })

    this.props.changePigs(newPigs)
  }

  handleGreased = (event) => {
    if (event.target.checked) {
      let filteredPigs = this.props.pigs.slice().filter(pig => {
        return pig.greased === true
      })
      this.props.changeFilter(true)
      this.props.changePigs(filteredPigs)
    } else {
      this.props.changeFilter(false)
      this.props.changePigs(hogs)
    }
  }

  render() {
    return(
      <div>
        show only greased pigs: <input type="checkbox" name="greased" onChange={this.handleGreased}/>
        <select onChange={this.handleSort}>
          <option value="none">-</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    )
  }
}

export default Filter
