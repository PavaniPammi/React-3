import React, { Component } from 'react'

export default class Assignment13 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg: "Hello All",
         validate : true
      }
    }
displayMessage = () => {
      this.setState(prev => ({
        validate: !prev.validate
      }))

    }

    displayInput = () => {
        return(
            <div>
                <input value={this.state.msg} type = "text" onChange={(event) => {this.setState({msg: event.target.value})}}/>
            </div>
        )
    }
    
  render() {
    var text = this.state.validate? "Edit": "Update"
    return (
      <div>
        <center>
            {
                this.state.validate? "" : this.displayInput()
            }
        <h1>{this.state.msg}</h1>
        <button onClick={this.displayMessage}>{text}</button>
        </center>
        
      </div>
    )
  }
}
