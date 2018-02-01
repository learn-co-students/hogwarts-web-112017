import React from 'react';

class HogItem extends React.Component {

constructor (props) {
  super(props)
  this.state = {
    displayHogInfo: false
  }
}

getImage = () => {
return require(`../hog-imgs/${this.props.hog.name.split(" ").join("_").toLowerCase()}.jpg`)
}

// <div style={{display: {this.state.displayLearnMore}}
onInfoClick = () => {
  this.setState((previousState) => {
    return {displayHogInfo: !previousState.displayHogInfo}
  })
}

 render() {

  return (
    <div className="HogItem">
       <img src={ this.getImage() } alt={this.props.hog.name} className="HogImage"/>
        <h2>{this.props.hog.name}</h2>
       <div onClick={this.onInfoClick} style={this.state.displayHogInfo ? {display: "block"} : {display: "none"}} >
              <p>Specialty: {this.props.hog.specialty} <br />
              Greased: {this.props.hog.greased ? 'Yes' : 'No'} <br />
              Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} <br />
              Highest Medal: {this.props.hog['highest medal achieved'].charAt(0).toUpperCase() + this.props.hog['highest medal achieved'].slice(1)} </p>
        </div>
        <div onClick={this.onInfoClick} style={this.state.displayHogInfo ? {display: "none"} : {display: "block"}}  >
          Click to learn more about me
        </div>
    </div>
  )
}
}

export default HogItem;
