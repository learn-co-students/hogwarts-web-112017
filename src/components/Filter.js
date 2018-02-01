import React from 'react'

class Filter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <label for="greasy">Greasy?
          <input type="checkbox" value="greasy" id="greasy" onChange={this.props.handleGreaseSelection}></input>
        </label>
        <select onChange={ this.props.handleFilterChange }>
          <option value="">All</option>
          <option value="name">Alphabetical</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    )
  }

}

export default Filter
