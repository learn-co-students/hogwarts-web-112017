import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      greased: false,
      sorted: 'name'
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


  render() {
    console.log(this.state.greased)
    return (
      <div className="App">
          < Nav greasedFunction={this.handleGreased}/>
        < HogContainer greased={this.state.greased}/>
      </div>
    )
  }
}

export default App;
