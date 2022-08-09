import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
  render() {
    const { robots } = this.props
    return (
      <div className="flex flex-wrap justify-center ma3">
        {robots.map((robot) => {
          return (
            <Card
              name={robot.name}
              email={robot.email}
              id={robot.id}
              key={robot.id}
            />
          )
        })}
      </div>
    )
  }
}
export default CardList
