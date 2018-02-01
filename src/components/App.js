import React, { Component } from 'react';
import '../App.css';

import Nav from './Nav'
import PigsList from './PigsList'
import hogs from '../porkers_data'

class App extends Component {
  state ={
    pigs: hogs,
    filter: false,
    sort: 'none'
  }

  changePigs = (newState) => {
    this.setState({ pigs: newState })
  }
  changeSort = (newState) => {
    this.setState({ sort: newState })
  }
  changeFilter = (newState) => {
    this.setState({ filter: newState })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Nav pigs={this.state.pigs} changeSort={this.changeSort} changeFilter={this.changeFilter} changePigs={this.changePigs}/>
        <PigsList pigs={this.state.pigs}/>
      </div>
    )
  }
}

export default App;
