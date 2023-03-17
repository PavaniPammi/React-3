import React, { Component } from 'react'


export class Child extends Component {
    sendData = () => {
        this.props.receiveData()
    }
  render() {
    return (
      <div>
        <h1>I am Child</h1>
        <button onClick = {this.sendData}>Click Child</button>
      </div>
    )
  }
}

export default Child
