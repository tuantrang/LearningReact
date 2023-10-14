import React, { Component } from 'react'

class EventBind extends Component {
  constructor(){
      super()
      this.state = {
          message: 'Hello'
      }
      this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
      this.setState({
          message: "Welcome"
      })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
