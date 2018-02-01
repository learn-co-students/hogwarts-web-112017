import React from "react"

// specialty: 'Airport Security',
// greased: true,
// 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 1.9,
// 'highest medal achieved': 'diamond'


class PigItem extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      summary: false
    }
  }


  handleClick = (e) => {
    if (e.target.className === "scram") {
      this.props.hidePiggy(this.props.pig)
    } else if (e.target.className === "take-bath"){
      this.props.toggleShowBath()
      this.props.togglePigGrease(this.props.pig)
      setTimeout(this.props.toggleShowBath, 3000)
    } else if (e.target.className === "get-dirty") {
      this.props.toggleShowGreaseBall()
      this.props.togglePigGrease(this.props.pig)
      setTimeout(this.props.toggleShowGreaseBall, 3000)
    } else {
      const newSummary = !this.state.summary
      this.setState({
        summary: newSummary
      })
    }
  }

  render(){
    return(
      <div className="pig-item" onClick={this.handleClick}>
        <div className="pig-image-container">
          <img className="pig-image" src={require(`../hog-imgs/${this.props.pig.name.toLowerCase().replace(/ /g, "_")}.jpg`)}></img>
        </div>
        <div className="pig-name"><h2>{this.props.pig.name}</h2></div>
        <div className="pig-summary">
          {(this.state.summary) ? (<div className="pig-summary"><p>Specialty: {this.props.pig.specialty}</p><p>Weight: {this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p><p>Highest Medal Achieved: {this.props.pig['highest medal achieved']}</p></div>) : (<div className="pig-summary"><p>More Information</p></div>)}
        </div>
        <div className="hide-pig"><button className="scram">Scram, piggy!</button></div>
        <div className="bathe-pig">
          {(this.props.pig.greased) ? <button className="take-bath">Wash this little piggy!</button> : <button className="get-dirty">Go hog wild!</button> }
        </div>
      </div>
    )
  }



}

export default PigItem
