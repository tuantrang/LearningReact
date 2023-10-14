import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
   
  render() {
    console.log('Pure Comp Render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp

/* We can create a Component by extending the PureComponent class
A PureComponent implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component.
If there is no difference, the component is not re-rendered - performance boost.
It is a good idea to ensure that all teh children components are also pure to avoid unexpected behaviour.
Never mutate the state.  Always return a new object aht reflects the new state.
*/