import React, { Component } from 'react'

class Assignment10 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       error : false
    }
  }
  componentDidCatch(error){
    this.setState({error: true})
  }
  
  
  render() {
    return (
      <div>
        {this.state.error ?<div>Some Error</div> : <Component1/>}
      </div>
    )
  }
  
}

export default Assignment10


class Component1 extends Component {
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}
