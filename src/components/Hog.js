import React from 'react'

class Hog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  togglePigInfo = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    if(this.state.clicked){
      return (
        <div onClick={this.togglePigInfo}>
          <img src={require(`../hog-imgs/${this.props.hog.name.replace(/\s+/g, '_').toLowerCase()}.jpg`)} />
          <p>Name: {this.props.hog.name}</p>
          <p>Specialty: {this.props.hog.specialty}</p>
          <p>Greased: {this.props.hog.greased.toString()}</p>
        </div>
  )} else {
      return(
        <div onClick={this.togglePigInfo}>
          <img src={require(`../hog-imgs/${this.props.hog.name.replace(/\s+/g, '_').toLowerCase()}.jpg`)} />
          <p>Name: {this.props.hog.name}</p>
        </div>
      )}
}
}

export default Hog;
