import React from 'react'
import HogItem from './HogItem'



const showHogs = (props) => {
  let newHogs = []
  if(props.greased) {
    newHogs = props.hogs.filter((h) => h.greased === true)
  }
  else {
    newHogs = props.hogs
  }
  return newHogs.map( (h) => { return <HogItem hog={h} />})
}




const hogList = (props) => {
  return(
    <div>
      {showHogs(props)}
    </div>
  )
}


export default hogList
