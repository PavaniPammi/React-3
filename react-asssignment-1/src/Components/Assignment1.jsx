import React, { Component } from 'react'

export class Assignment1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello before state change"
      }
    }
    
  render() {
    return (
      <div>
        <center>
            <h1>{this.state.message}</h1>
            <button onClick={() => {this.setState({message : "Hi from after state chane"})}}>Click Me</button>
        </center>
      </div>
    )
  }
}

export default Assignment1
