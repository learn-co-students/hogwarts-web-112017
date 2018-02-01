import React from 'react'

const hogImgSrc = (name) => {
  let formattedName = name.replace(/ /g, "_").toLowerCase()
  return require(`../hog-imgs/${formattedName}.jpg`)
}

const hogItem = (props) => {
  console.log(props)
  return (
    <div className="pigTile">
      <img src={hogImgSrc(props.hog.name)} alt={props.hog.name}/>
      <p>{props.hog.name} </p>
      <p>{props.hog.specialty} </p>
    </div>
  )
}

export default hogItem
