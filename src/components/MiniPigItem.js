import React from "react"

// specialty: 'Airport Security',
// greased: true,
// 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 1.9,
// 'highest medal achieved': 'diamond'


class MiniPigItem extends React.Component {
  constructor(props){
    super(props)

  }

  handleClick = (e) => {
    if (e.target.className === "unscram") {
      this.props.showPiggy(this.props.pig)
    }
  }

  render(){
    return(
      <div className="mini-pig-item" onClick={this.handleClick}>
        <div className="mini-pig-image-container">
          <img className="mini-pig-image" src={require(`../hog-imgs/${this.props.pig.name.toLowerCase().replace(/ /g, "_")}.jpg`)}></img>
        </div>
        <div className="mini-hide-pig"><button className="unscram">Unscram!</button></div>
      </div>
    )
  }



}

export default MiniPigItem
