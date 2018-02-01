import React from 'react'
import Hogs from '../porkers_data'

class HogContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hogs: Hogs
    }
  }

  render () {
    return (
      <div>hi there hog container here</div>
    )
  }
}

export default HogContainer
