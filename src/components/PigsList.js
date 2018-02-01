import React from 'react'

import PigCard from './PigCard'

const PigsList = (props) => {
  const displayPigs = () => {
    let pigs = props.pigs
    return pigs.map((pig) => <PigCard key={pigs.indexOf(pig)} pig={pig} />)
  }

  return(
    <ul>{displayPigs()}</ul>
  )
}

export default PigsList;
