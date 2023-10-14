import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // Short circuit methods
        return this.state.isLoggedIn && <div>Welcome Tuan</div>
        // return (
        //     this.state.isLoggedIn ? <div>Welcome Tuan</div> : <div>Welcome Guest</div>
        // )
        // let message;

        // if (this.state.isLoggedIn) {
        //     message = <h1>Welcome Tuan</h1>
        // } else {
        //     message= <h1>Welcome Guest</h1>
        // }

        // return <div>{message}</div>
        //   if (this.state.isLoggedIn){
        //     return <h1>Welcome Tuan</h1>
        //   } else{
        //     return <h1>Welcome Guest</h1>
        //   }
    }
}

export default UserGreeting
