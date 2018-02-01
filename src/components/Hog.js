import React from 'react'

class Hog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }

  }

  generateHTML = () => {
    if (this.state.expanded) {
      return (
        <ul>
          <li>Specialty: { this.props.hog.specialty}</li>
          <li>Greased: { this.props.hog.greased ? "true" : "false"}</li>
          <li>Weight: { this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
          <li>Medal: { this.props.hog[`highest medal achieved`]}</li>
        </ul>
      )
    } else {
      return <p>Click Here for More Info!</p>
    }
  }

  handleClick = () => {
    let changed = !this.state.expanded
    this.setState({
      expanded: changed
    })
  }

  findImage = () => {
    return require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/\s/g,"_")}.jpg`)
  }


  render() {
    return (
      <div className="pigTile">
        <img src={ this.findImage() }></img>
        <div>{ this.props.hog.name }</div>
        <div onClick={ this.handleClick }>{ this.generateHTML() }</div>
      </div>
    )
  }
}


export default Hog
