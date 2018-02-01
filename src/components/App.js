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
      greasy: false
    }
  }

  handleGreaseSelection() {

  }

  handleFilterChange() {
    
  }


  render() {
    return (
      <div className="App">
        < Nav />
        < Filter />
        < HogContainer hogs={hogs}/>
      </div>
    )
  }
}

export default App;
