import React from 'react'
import App from './App'
import HogCard from './HogCard'

class HogsContainer extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
  }


  selectGreasedHogsOnly(){
    let hogs;

    if (this.props.onGreasedFilter === true){
      hogs = this.props.hogs.filter(hog => hog.greased === true)
      // console.log(hogs)
    } else {
      hogs = this.props.hogs.sort((a,b) => a.name.localeCompare(b.name))

    }
    return hogs
  }

  sortByWeight = (hogs) => {
    if (this.props.onSortFilter === "weight"){
      return  hogs.sort((a,b) => {
        return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]})
    } else {
      return hogs
    }

  }

  getSortedAndFilteredHogs(sortedFilteredHogs){
    return this.sortByWeight(this.selectGreasedHogsOnly())
  }



  renderHogCards = (hogs) => {
    return hogs.map(hog => <HogCard hog={hog} key={this.props.hogs.indexOf(hog)}/> )
  }


  render(){
    let hogs = this.renderHogCards(this.getSortedAndFilteredHogs());

    return (
      <div>
        {hogs}
      </div>
    )
  }
}

export default HogsContainer;
