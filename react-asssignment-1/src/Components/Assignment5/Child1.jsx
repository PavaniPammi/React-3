import React, { Component } from 'react'

export default class Child1 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.msg}</h1>
      </div>
    )
  }
}
