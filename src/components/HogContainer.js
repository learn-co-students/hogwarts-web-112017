import React from 'react'
import Hogs from '../porkers_data'
import HogList from './HogList'

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
        <HogList hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default HogContainer
