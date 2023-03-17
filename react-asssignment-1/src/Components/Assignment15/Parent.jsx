import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg : "Before Click"
      }
    }
    

    receiveData = () => {
      this.setState({msg: "After Clicking Child"})
    }
  render() {
    return (
      <div>
        <center>
            <h1>I am Parent</h1><br/>
            <h1>{this.state.msg}</h1>
          <hr/>
        <Child receiveData = {this.receiveData}/>
        </center>
       
      </div>
    )
  }
}

export default Parent
