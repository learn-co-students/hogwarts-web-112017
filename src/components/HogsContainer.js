import React, { Component } from 'react'
import hogs from '../porkers_data.js'
import HogList from './HogList'
import HogFilters from './HogFilters.js'

 class HogsContainer extends Component {
  constructor(props) {
     super(props);
     this.state = {
       hogs: hogs
     };
   }

  compareWeight = (a,b) => {
    if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
      return -1;
    if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
      return 1;
    return 0;
  }
  compareName = (a,b) => {
    return a.name.localeCompare(b.name)

   // if (a.name < b.name)
   //   return -1;
   // if (a.name > b.name)
   //   return 1;
   // return 0;
  }
  sortPigsByWeight = (piggies) => {
     return piggies.sort(this.compareWeight)
   }
  sortPigsByName = (piggies) => {
     return piggies.sort(this.compareName)
   }
  sortPigs = (e) => {
     let sortedPigs = this.state.hogs;
     if(e.target.value == "weight"){
       sortedPigs = this.sortPigsByWeight(sortedPigs)
     } else if (e.target.value == "name") {
       sortedPigs = this.sortPigsByName(sortedPigs)
     }

     this.setState({
       hogs: sortedPigs
     })
   }
  filterPigs = (e) =>{
    if (e.target.checked) {
      let filteredHogs = this.state.hogs.filter(hog => hog.greased)
      this.setState({
        hogs: filteredHogs
      })
    } else {
      this.setState({
        hogs: hogs
      })
    }

  }

  render() {
    return (
      <div className='HogsContainer'>
        <HogFilters onChange={this.sortPigs}
        onCheck={this.filterPigs}/>
        <HogList hogs={this.state.hogs}/>
      </div>
    )
  }
 }

 export default HogsContainer;
