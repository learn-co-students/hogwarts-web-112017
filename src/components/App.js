import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      greased: false,
      sorted: 'none'
    }
  }

  handleGreased = () => {
    if (this.state.greased) {
      this.setState({greased: false})
    }
    else {
      this.setState({greased: true})
    }
  }

  sortFunction = (sorter) => {
    this.setState({sorted: sorter})
  }


  render() {
    return (
      <div className="App">
          < Nav greasedFunction={this.handleGreased} sortFunction={this.sortFunction}/>
        < HogContainer greased={this.state.greased} sorted={this.state.sorted}/>
      </div>
    )
  }
}

export default App;
