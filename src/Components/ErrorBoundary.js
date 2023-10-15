import React, { Component } from 'react'

class ErrorBoundar extends Component {
constructor(props) {
  super(props)

  this.state = {
     hasError: false
  }
}

  static getDerivedStateFromError(error){
     return {
         hasError: true
     } 
  }  

  componentDidCatch(error, info){
      console.log(error);
      console.log(info)
  }

  render() {
    if(this.state.hasError){
        return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundar

/*
Error boundaries are React components that catch JavaScript error in their child component tree, log those errors, and display a fall-back UI.

A class component becomes an Error Boundary by deining either or both of getDerivedStateFromError  and componentDidCatch lifecycle methods.

The placement of the Rrro Boundary also matters as it controls if the entire app should have the fall-back UI or jst the component causing the problem

Provide a way to gracefully handle error in application code.
 */