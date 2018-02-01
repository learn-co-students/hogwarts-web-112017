import React from 'react'
import HogsContainer from './HogsContainer'
import HogDetails from './HogDetails'

class HogCard extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      detailsDisplayed: false
    }
  }

  formatName(){
    let img_name = this.props.hog.name.split(" ").join("_").toLowerCase()
    let img_url =  `/hog-imgs/${img_name}.jpg`
    return img_url
  }


  handleDisplayDetails = (e) => {
    e.preventDefault();
    this.setState(previousState => {
      return {
        detailsDisplayed: !previousState.detailsDisplayed
      }
    })
  }


  render(){

    let showDetails;
    if (this.state.detailsDisplayed === true) {
      showDetails = <HogDetails hogDetails={this.props.hog}/>
    } else {
      showDetails = <p>Click here for details about me!</p>
    }

    return(
      <div className="pigTile">
        <h3>{this.props.hog.name}</h3>
        <img src={this.formatName()}/>
        <div onClick={this.handleDisplayDetails}>
          {showDetails}
        </div>
      </div>
    )
  }
}

export default HogCard;
