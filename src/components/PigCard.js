import React from 'react'

export default class PigCard extends React.Component {
  state = {
    active: false
  }

  render() {
    return(
      <li className="column" onClick={this.toggleState}>
        <div className="ui card">
          <div className="image">
            <img src={this.handleImage()}></img>
          </div>
          <div className="content">
            <p onClick={this.hidePig}>X</p>
            <h1>{this.props.pig.name}</h1>
            {this.displayInfo()}
          </div>
        </div>
      </li>
    )
  }

  hidePig(e) {
    e.target.parentNode.parentNode.parentNode.style.display = 'none'
  }

  handleImage() {
    let name = this.props.pig.name.toLowerCase().split(" ").join("_")
    return require(`../hog-imgs/${name}.jpg`)
  }

  toggleState = () => {
    this.setState({ active: !this.state.active })
  }

  displayInfo = () => {
    if (this.state.active) {
      return(
        <div>
          <p>{this.props.pig.specialty}</p>
          <p>{this.props.pig.greased ? "Greased hog" : "Ungreased hog"}</p>
          <p>{`weight: ${this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}`}</p>
          <p>{this.props.pig['highest medal achieved']}</p>
        </div>
      )
    } else {
      return ""
    }
  }
}
