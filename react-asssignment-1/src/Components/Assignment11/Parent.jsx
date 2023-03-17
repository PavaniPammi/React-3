import React, { Component } from "react";
import Child from "./Child";

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
    };
  }

  receiveData = (data) => {
    this.setState({ msg: data });
  };
  render() {
    return (
      <center>
        <p>I am Parent component</p>
        <br />
        <h1>{this.state.msg}</h1>
        <hr />
        <Child receiveData={this.receiveData} />
      </center>
    );
  }
}

export default Parent;
