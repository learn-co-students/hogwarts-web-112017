import React from 'react'


class HogItem extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      toggleStyle: "none"
    }
  }


  hogImgSrc = (name) => {
    let formattedName = name.replace(/ /g, "_").toLowerCase()
    return require(`../hog-imgs/${formattedName}.jpg`)
  }


  toggleStyle = () => {
    if (this.state.toggleStyle === "none"){
      this.setState({toggleStyle: "block"})
    }
    else {
      this.setState({toggleStyle: "none"})
    }
  }

  render(){
    return (
      <div className="pigTile" onClick={this.toggleStyle}>
        <img src={this.hogImgSrc(this.props.hog.name)} alt={this.props.hog.name}/>
        <p>Name: {this.props.hog.name} </p>
        <div style={{display:this.state.toggleStyle}}>
          <p>Specialty: {this.props.hog.specialty}</p>
          <p>Greased: {this.props.hog.greased.toString()}</p>
          <p>Weight: {Object.values(this.props.hog)[3]} </p>
          <p>Highest Medal Achieved: {Object.values(this.props.hog)[4]} </p>
        </div>
      </div>
    )
  }

}



export default HogItem
