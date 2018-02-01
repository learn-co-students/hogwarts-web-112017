import React from 'react';
import HogItem from './HogItem'

const HogList = (props) => {
  return (
    <div>
    {props.hogs.map(h => <HogItem hog={ h } key={ h.name } />) }
    </div>
  )
}


export default HogList;
