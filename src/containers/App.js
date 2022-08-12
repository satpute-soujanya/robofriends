import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './app.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
function App() {
  const [robots, setRobots] = useState([])
  const [searchField, setsearchField] = useState('')
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        setRobots(users)
      })
  }, [])

  const onsearchChange = (event) => {
    setsearchField(event.target.value)
  }
  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return !robots.length ? (
    <h1 className="tc header">Still Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="header">Robo Friends</h1>
      <SearchBox searchChange={onsearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filterRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}

export default App
