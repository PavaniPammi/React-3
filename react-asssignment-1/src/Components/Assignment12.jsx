import React, { Component } from 'react'

export default class Assignment12 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg: "I am form assignment-12"
      }
    }
    static getDerivedStateFromProps(props, state){
        state = props
        return state
    }
    
  render() {
    return (
      <div>
        <center>
            {this.state.msg}
        </center>
      </div>
    )
  }
}
