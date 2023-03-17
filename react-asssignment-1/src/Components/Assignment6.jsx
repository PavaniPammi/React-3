import React, { Component } from 'react'

export class Assignment6 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       msg :"componentWillUnMount",
       clear:"Cleared automatically"
    }
  }
  
  render() {
    return (
      <div>
        <center>
          <h1>{this.state.msg} ...Clear</h1>
          <h1>{this.state.clear}</h1>
        </center>
      </div>
    )
  }
  componentDidMount(){
    this.setState({msg: ""})
  }
}

export default Assignment6
