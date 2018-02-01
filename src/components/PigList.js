import React from "react"
import PigItem from "./PigItem"


class PigList extends React.Component {
  constructor(props){
    super(props)
  }

  getPigs = () => {
    let pigs = this.props.pigs
    if (this.props.greased) {
      pigs = pigs.filter((p) => p.greased === true)
    }

    if (this.props.filterBy === "name") {
      pigs = pigs.sort((a,b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0
      })
    } else {
      pigs = pigs.sort((a,b) => b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] )
    }

    return pigs
  }



  render(){
    return(
      <div className="pig-list">
        {this.getPigs().map((p) => <PigItem toggleShowGreaseBall={this.props.toggleShowGreaseBall} togglePigGrease={this.props.togglePigGrease} toggleShowBath={this.props.toggleShowBath} key={p.name} hidePiggy={this.props.hidePiggy} pig={p} /> )}
      </div>
    )
  }



}

export default PigList
