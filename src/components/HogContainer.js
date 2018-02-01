//presentation

import React from 'react';
import Hog from './Hog'

const HogContainer = (props) => {
  return (
    <div className="hogBox">
    {props.hogs.map((h, index) => {
      return <Hog hog={h} key={index} />}
    )}
    </div>
  )
}

export default HogContainer;
