import React, { Component } from 'react'

class Assignment2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :10
      }
    }
    
    componentDidMount(){
        this.timer = setInterval(this.increaseCount,1000)
    }
    increaseCount = () => {
         this.setState((prev) => ({count: prev.count-1}))
    }
    componentWillUnmount(){
       clearInterval(this.timer)
    }

    displayCount =() => {
      
      return(
        <div>
        <h1>{this.state.count}</h1>
        <h1>It's time to close</h1>
      </div>
      )
    }
  render() {
    
    return (
      
      <div>
        <center>
        {this.state.count>= 0? this.displayCount() : <h1>Timer Closed!</h1>}
        </center>
      </div>
    )
  }
}

export default Assignment2
