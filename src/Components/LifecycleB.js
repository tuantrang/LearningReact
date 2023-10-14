import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tuan'
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }


    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
         console.log("LifeCycleB getSnapshotBeforeUdpate")
         return null;
    }

    componentDidUpdate(){
         console.log("LifeCycleB componentDidUpdate")
    }

    render() {
        console.log("LifeCycleB render")
        return (
            <div>
                <h1>LifecycleB</h1>
            </div>
        )
    }
}

export default LifecycleB