import React from 'react'

import PigCard from './PigCard'

const PigsList = (props) => {
  const displayPigs = () => {
    let pigs = props.pigs
    return pigs.map((pig) => <PigCard key={pigs.indexOf(pig)} pig={pig} />)
  }

  return(
    <div className="ui four column grid">
      <ul className="row">{displayPigs()}</ul>
    </div>
  )
}

export default PigsList;
