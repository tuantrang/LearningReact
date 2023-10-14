import React, {Component} from 'react'

class ClassClick extends Component {
  clickHandler() {
    alert("Button clicked in Class")
  }  
  render() {
    return <div><button onClick={this.clickHandler}>Click Me</button></div>
  }
}

export default ClassClick