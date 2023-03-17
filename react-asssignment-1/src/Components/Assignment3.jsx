import React, { Component } from 'react'

export class Assignment3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }
    
  render() {
    return (
        <center>
      <div>
        <h1>{this.state.count}</h1>
        <button onClick = {() => {
            this.setState(prev => ({count: prev.count+1}))}}>Increment</button>
        <button onClick = {() => {
            this.setState(prev => ({count: prev.count-1}))}}>Decrement</button>
      </div>
      </center>
    )
  }
}

export default Assignment3
