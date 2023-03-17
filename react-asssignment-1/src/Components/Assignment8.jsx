import React, { Component } from 'react'

export default class Assignment8 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         validae :false
      }
    }
    
    onClickStateChange = () => {
    this.setState((prev) => ({
        validae: !prev.validae
    }))
    }
  render() {
    var display = this.state.validae? "Pavani": "Siva"
    return (
      <div>
        <center>
            <h1>{display}</h1>
            <button onClick = {this.onClickStateChange}>State Change</button>
        </center>
      </div>
    )
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    return true
    //if we give false it stops updating
  }
}
