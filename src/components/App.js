import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigContainer from './PigContainer'
import hogs from '../porkers_data.js'
import MiniPigItem from "./MiniPigItem"

class App extends Component {

  constructor(){
    super()

    this.state = {
      pigs: hogs,
      greased: false,
      filterBy: "name",
      hiddenPiggies: [],
      showBath: false,
      showGreaseBall: false
    }

  }

  togglePigGrease = (pig) => {
    pig.greased = !pig.greased
    const newPigs = this.state.pigs.map((p) => (p.name === pig.name) ? pig : p)
    this.setState({
      pigs: newPigs
    })
  }

  toggleShowBath = () => {
    const newBath = !this.state.showBath
    this.setState({
      showBath: newBath
    })
  }

  toggleShowGreaseBall = () => {
    const newGreaseBall = !this.state.showGreaseBall
    this.setState({
      showGreaseBall: newGreaseBall
    })
  }

  greaseHandler = (e) => {
    const newGrease = !this.state.greased
    this.setState({
      greased: newGrease
    })
  }

  filterHandler = (e) => {
    console.log(e.target.value)
    const newFilter = e.target.value
    this.setState({
      filterBy: newFilter
    })
  }

  hidePiggy = (pig) => {
    let newPigs = this.state.pigs.filter((p) => p.name !== pig.name)
    let newHiddenPiggies = [...this.state.hiddenPiggies, pig]
    this.setState({
      pigs: newPigs,
      hiddenPiggies: newHiddenPiggies
    })
    alert(`HEY! ${pig.name.toUpperCase()}, YOU'RE GOIN' IN THE PIG PEN!`)
  }

  showPiggy = (pig) => {
    let newPigs = [...this.state.pigs, pig]
    let newHiddenPiggies = this.state.hiddenPiggies.filter((p) => p.name !== pig.name)
    this.setState({
      pigs: newPigs,
      hiddenPiggies: newHiddenPiggies
    })
    alert(`${pig.name.toUpperCase()}! COME HOME!`)
  }



  render() {
    return (
      <div className="App">
        <div >
          {(this.state.showBath) ? <img id="bathing-pig" src={require("./gifs/bath.gif")}></img> : null}
        </div>
        <div >
          {(this.state.showGreaseBall) ? <img id="mudding-pig" src={require("./gifs/grease.gif")}></img> : null}
        </div>
        <div className="pig-pen">
          {this.state.hiddenPiggies.map(p => <MiniPigItem showPiggy={this.showPiggy} pig={p} />)}
        </div>
        < Nav />
      < PigContainer togglePigGrease={this.togglePigGrease} toggleShowGreaseBall={this.toggleShowGreaseBall} toggleShowBath={this.toggleShowBath} hidePiggy={this.hidePiggy} filterHandler={this.filterHandler} greaseHandler={this.greaseHandler} pigs={this.state.pigs} greased={this.state.greased} filterBy={this.state.filterBy}/>
      </div>
    )
  }
}

export default App;
