import React, { Component } from 'react'

class SearchBox extends Component {
  render() {
    return (
      <div className="pa2">
        <input
          type="search"
          placeholder=" Search Robots "
          className="pa3 ba b--green bg-lightest-blue"
          onChange={this.props.searchChange}
        />
      </div>
    )
  }
}
export default SearchBox
