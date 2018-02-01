import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import Filter from './Filter'
import hogs from '../porkers_data.js'

const hogWeight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: "",
      greasy: false,
      currentHogs: hogs
    }
  }

  handleGreaseSelection = () => {
    let greaseStatus = !this.state.greasy
    this.setState({
      greasy: greaseStatus
    }, this.handleRenderHog)
  }

  handleRenderHog = () => {
    let hogArray = hogs
    if (this.state.filter === "weight") {
      hogArray = hogArray.sort((a,b) => a[hogWeight] - b[hogWeight])
    } else if (this.state.filter === "name") {
      hogArray = hogArray.sort((a,b) => a.name.localeCompare(b.name))
    }

    if (this.state.greasy) {
      hogArray = hogArray.filter((h) => h.greased)
    }

    this.setState({
      currentHogs: hogArray
    })
  }


  handleFilterChange = (e) => {
    let newFilter = e.target.value
    this.setState({
      filter: newFilter
    }, this.handleRenderHog)
  }

  render() {
    return (
      <div className="App">
        < Nav />
      < Filter handleGreaseSelection = {this.handleGreaseSelection} handleFilterChange={ this.handleFilterChange }/>
        < HogContainer hogs={this.state.currentHogs}/>
      </div>
    )
  }
}

export default App;
