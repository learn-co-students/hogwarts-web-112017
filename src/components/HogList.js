import React from 'react';
import HogItem from './HogItem'

const HogList = (props) => {
  return (
    <div id="HogList">
    {props.hogs.map(h => <HogItem hog={ h } key={ h.name } />) }
    </div>
  )
}


export default HogList;
