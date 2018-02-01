import React from "react"

class PigFilter extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="pig-filter">
        <label for="checkbox">Grease me!</label>
        <input type="checkbox" className="grease-ums" onChange={this.props.greaseHandler}/>
        <select className="pig-filter" value={this.props.filterByValue} onChange={this.props.filterHandler}>
          <option value="name">Alphabetical (by name)</option>
          <option value="weight"> By Weight (heaviest to lightest)</option>
        </select>
      </div>
    )
  }



}

export default PigFilter
