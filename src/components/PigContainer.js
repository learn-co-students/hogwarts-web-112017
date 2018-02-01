import React from "react"
import PigFilter from "./PigFilter"
import PigList from "./PigList"

class PigContainer extends React.Component {
  constructor(props){
    super(props)

  }


  render(){
    return(
      <div className="pig-container">
        <PigFilter filterHandler={this.props.filterHandler} greaseHandler={this.props.greaseHandler} filterByValue={this.props.filterBy}/>
        <PigList togglePigGrease={this.props.togglePigGrease} toggleShowGreaseBall={this.props.toggleShowGreaseBall} toggleShowBath={this.props.toggleShowBath} hidePiggy={this.props.hidePiggy} pigs={this.props.pigs} greased={this.props.greased} filterBy={this.props.filterBy}/>
      </div>
    )
  }



}

export default PigContainer
