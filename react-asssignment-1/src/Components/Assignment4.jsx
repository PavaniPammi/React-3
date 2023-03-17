import React, { Component } from 'react'

export default class Assignment4 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           msg :"Hello"
        }
      }
  render() {
    
    
    return (
      <div>
        <center>
            <h1>{this.state.msg}</h1>
            <button onClick = {() => {this.setState({msg:"Hi"})}}>Click Me</button>
        </center>
      </div>
    )
  }

  componentDidUpdate(){
    console.log("Component Updated ")
  }
}
