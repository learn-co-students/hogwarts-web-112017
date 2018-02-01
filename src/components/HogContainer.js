import React from 'react'
import Hogs from '../porkers_data'
import HogList from './HogList'
import HogFilter from './HogFilter'

class HogContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hogs: Hogs
    }
  }

  render () {
    return (
      <div>
        <HogList hogs={this.state.hogs} greased={this.props.greased}/>
      </div>
    )
  }
}

export default HogContainer
