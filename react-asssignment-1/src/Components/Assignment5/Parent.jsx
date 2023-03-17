import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <center>
        <Child1 msg = "Hi Child -1 from parent"/>
        <Child2 msg = "Hi Child -2 from parent"/>
        </center>
    </div>
    )
  }
}
