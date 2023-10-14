import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tuan'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
         console.log("LifeCycleA getSnapshotBeforeUdpate")
         return null;
    }

    componentDidUpdate(){
         console.log("LifeCycleA componentDidUpdate")
    }

    changeState = () =>{
        this.setState({
            name: 'Trang'
        })
    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <h1>Lifecycle A</h1>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifeCycleA

/*Mounting - 
	When an instance of a component is being created and inserted int the DOM
	constructor, static getDerivedStateFromProps, render and componentDidMount
Updating - 
	When a component is being re-rendered as a result of changes to either its props or state
	static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUdpate and componentDidUpdate
Unmounting - 
	When a component is being removed from the DOM
	componentWillUnmount
Error Handling - 
	When there is an error during rendering, in a  lifecycle method, or in the constructor of any child component
	static getDerivedStateFromError and componentDidCatch
    */