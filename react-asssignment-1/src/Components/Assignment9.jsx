
import React, { Component } from 'react'

export default class Assignment9 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         validae :false
      }
    }
    
    onClickStateChange = () => {
    this.setState((prev) => ({
        validae: !prev.validae
    }))
    }
  render() {
    var display = this.state.validae? "https://res.cloudinary.com/dymhfuzzi/image/upload/v1677528276/explore-environment_fnnr9i.png": "https://res.cloudinary.com/dymhfuzzi/image/upload/v1677527648/explore-business_cnuaiq.jpg"
    var alt = this.state.validae?"globe":"study"
    return (
      <div>
        <center>
            <img style={{height :"200px", width:"200px"}} src = {display} alt = {alt}/>
            <br/>
            <button onClick = {this.onClickStateChange}>State Change</button>
        </center>
      </div>
    )
  }


}
