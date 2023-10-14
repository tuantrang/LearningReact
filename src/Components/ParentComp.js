import React, { Component } from 'react'
import MemoComp from './MemoComp'

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
        {/*<RegComp name={this.state.name} />
        <PureComp name={this.state.name}/>*/}
        <MemoComp name={this.state.name}/>

      </div>
    )
  }
}

export default ParentComp
