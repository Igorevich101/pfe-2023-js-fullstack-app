import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    }
  }
  render () {
    const {clicks} = this.state;
    return (
    <input />
    )
  }
}

export default ClassComponent;