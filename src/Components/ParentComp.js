import React, { Component } from 'react'
import RegComp from './RegComp'
import PureCom from './PureComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Tuan'
      }
    }
    
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name: 'Tuan'
            })
        }, 2000)
    }
  render() {
      console.log('***************** Parent Comp Render****************')
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureCom name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
