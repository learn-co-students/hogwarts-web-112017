import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import Filter from './Filter'
import hogs from '../porkers_data.js'


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
    }, this.handleRenderHog())
  }

  handleRenderHog() {
    let hogArray = hogs

    if (!this.state.greasy) {
      hogArray = hogArray.filter((h) => h.greased)
    }
    this.setState({
      currentHogs: hogArray
    })
    console.log(hogArray.length)
  }


  handleFilterChange() {

  }


  render() {
    return (
      <div className="App">
        < Nav />
        < Filter handleGreaseSelection = {this.handleGreaseSelection}/>
        < HogContainer hogs={this.state.currentHogs}/>
      </div>
    )
  }
}

export default App;
