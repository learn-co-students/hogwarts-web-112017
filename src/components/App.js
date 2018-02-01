import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsContainer from './HogsContainer'
import HogsFilter from './HogsFilter'
import hogs from '../porkers_data.js'

class App extends Component {
  constructor(){
    super()

    this.state = {
      checkGreased: false,
      sortBy: "name",
      hogs: hogs
    }
  }


  handleGreasedFilter = () => {
    this.setState(previousState => {
      return {
        checkGreased: !previousState.checkGreased
      }
      console.log("this is the set state function", this.state.checkGreased)
    })
  }

  handleSortFilter = (option) => {
    this.setState(previousState => {
      return {
        sortBy: option
      }
    })

  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        < Nav />
        < HogsFilter onGreasedFilter={this.handleGreasedFilter} onSortFilter={this.handleSortFilter}/>
      < HogsContainer hogs={this.state.hogs} onGreasedFilter={this.state.checkGreased} onSortFilter={this.state.sortBy}/>
      </div>
    )
  }
}

export default App;
