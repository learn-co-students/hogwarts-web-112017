import React from 'react'
import HogItem from './HogItem'
 


const showHogs = (hogs) => {
  return hogs.map( (h) => { return <HogItem hog={h} />})
}


const hogList = (props) => {
  return(
    <div>
      {showHogs(props.hogs)}
    </div>
  )
}


export default hogList
