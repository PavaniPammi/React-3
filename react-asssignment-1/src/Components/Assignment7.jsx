import React, { Component } from 'react'

export default class Assignment7 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg : ""
      }
    }
    onChangeInput = (event) => {
        this.setState({msg: event.target.value})
    }
    
  render() {
    return (
      <div>
        <center>
        
            <input type = "text" onChange={this.onChangeInput}/>
            <br/>
            <h1>{this.state.msg}</h1>
        </center>
      </div>
    )
  }
}
