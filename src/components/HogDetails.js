import React from 'react'
import HogCard from './HogCard'

const HogDetails = (props) => {

  return (
    <div>
      <p>Specialty: {props.hogDetails.specialty}</p>
      <p>Weight: {props.hogDetails['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>Greased: {props.hogDetails['greased'].toString()}</p>
      <p>Highest Medal Acheived: {props.hogDetails['highest medal achieved']}</p>
    </div>
  )

}

export default HogDetails;
