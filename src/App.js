// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      spacePeople: []
    }
  }

  renderSpacePeople = () => {
    return this.state.spacePeople.map((spacePerson) => {return <p>{`${spacePerson.name} is currently in space!`}</p>})
  }

  render() {
    return(
      <div>
        {this.renderSpacePeople()}
      </div>
    )
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then((res)=>{return res.json()})
      .then(data => {
        this.setState({
          spacePeople: data.people
        })
      })
  }

}
