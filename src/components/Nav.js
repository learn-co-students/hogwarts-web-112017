import piggy from '../porco.png';
import React from 'react';
import HogFilter from './HogFilter'

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <HogFilter greasedFunction={props.greasedFunction} sortFunction={props.sortFunction}/>
    </div>
  )
}

export default Nav
