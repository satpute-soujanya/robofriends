import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './app.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        this.setState({
          robots: users,
        })
      })
  }
  onsearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  render() {
    const { robots, searchField } = this.state
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ? (
      <h1 className="tc header">Still Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="header">Robo Friends</h1>
        <SearchBox searchChange={this.onsearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App
