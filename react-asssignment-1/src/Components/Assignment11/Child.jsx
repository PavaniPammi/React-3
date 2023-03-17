import React, { Component } from 'react'

export class Child extends Component {
    onClickButton = () => {
        this.props.receiveData("I am the message from Child")
    }
  render() {
    return (
      <div>
       <p>I am child component</p><br/>
       <p>Click below button display a message in parent component</p>
       <button onClick={this.onClickButton}>Click Me</button>
      </div>
    )
  }
}

export default Child
