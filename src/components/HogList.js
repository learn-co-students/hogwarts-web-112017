import React from 'react'
import HogItem from './HogItem'



const sortFunctionName = (array) => {
  return array.sort( (a, b) => {
    if (a.name < b.name){
      return -1
    }
    else if (a.name > b.name){
      return 1
    }
    return 0
  })
}


const sortFunctionWeight = (array) => {
  return array.sort( (a, b) => {
    return Object.values(a)[3] - Object.values(b)[3]
  })
}


const showHogs = (props) => {
  let newHogs = []

  if(props.greased) {
    newHogs = props.hogs.filter((h) => h.greased === true)
    if(props.sorted === 'name'){
      newHogs = sortFunctionName(newHogs)
    }
    else if (props.sorted === "weight"){
      newHogs = sortFunctionWeight(newHogs)
    }
  }
  else {
    newHogs = props.hogs
    if(props.sorted === 'name'){
      newHogs = sortFunctionName(newHogs)
    }
    else if (props.sorted === "weight"){
      newHogs = sortFunctionWeight(newHogs)
    }
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
