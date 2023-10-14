import React, {Component} from 'react'

class Welcome extends Component {
    render(){
        const { heroName} = this.props;
        // const {state1, state2} = this.state // if class has state
        return <h1>Welcome to React Tuan {heroName}</h1>
    }    
}

export default Welcome