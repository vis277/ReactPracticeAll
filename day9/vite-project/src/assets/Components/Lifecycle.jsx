import React from "react";
import { Component } from "react";
import LifecycleV2 from "./LIfecycleV2";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("Inside constructor");
    this.state = {
      counter: 1,
    };
  }
  render() {
    console.log("Inside Render");
    return (
      <>
        {this.state.counter}
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increment
        </button>
        <LifecycleV2 />
      </>
    );
  }
  componentDidMount() {
    console.log("componet mounted");
  }
}

export default Lifecycle;
