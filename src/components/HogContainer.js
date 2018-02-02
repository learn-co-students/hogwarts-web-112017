import React from 'react';
import HogList from './HogList'
import FilterSort from './FilterSort'

class HogContainer extends React.Component {

constructor (props){
  super(props)
  this.state = {
      greasedOnly: false,
      sortedBy: 'name'
  }
}

setGreasedOnly = () => {
    this.setState((previousState) => {
      return {greasedOnly: !previousState.greasedOnly}
    })
 }


 setSortedBy = (newSortedBy) => {
     this.setState((previousState) => {
       return {sortedBy: newSortedBy}
     })
  }

  sortHogList = () => {
    if (this.state.sortedBy === "name") {
    return this.props.hogs.sort(this.compare)
  } else {
    return this.props.hogs.sort(this.compare).reverse()
  }
  }

 compare = (a, b) => {
    const valueA = a[this.state.sortedBy];
    const valueB = b[this.state.sortedBy];

    let comparison = 0;
    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }
    return comparison;
  }

filterHogsByGreased = (v, sortedHogList) => {
   if (v) {
     return sortedHogList.filter((h) => h.greased)
   } else {
     return sortedHogList
   }
}


render (){
  return (
    <div id="HogContainer">
    <FilterSort setGreasedOnly={this.setGreasedOnly} setSortedBy={this.setSortedBy}/>
    <HogList hogs={ this.filterHogsByGreased(this.state.greasedOnly, this.sortHogList()) }  />
    </div>
  )
}

}

export default HogContainer
