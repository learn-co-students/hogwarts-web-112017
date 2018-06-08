import React, { Component } from 'react'
import Hog from './Hog'

 class HogList extends Component {
   render() {
    const hogList = this.props.hogs.map(hog => {
      return <Hog hog={hog}/>
    })
    return (
      <div className='HogList'>
        {hogList}
      </div>
    )
  }
 }

 export default HogList;
