import React, {Component} from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    onClickHandler = () => {
        this.setState({
            message : 'Please Subscribe'
        }) 
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.onClickHandler}>Click Me </button>
            </div>
        )
    }
}

export default Message;