import React from "react";
import { Component } from "react";

class LifecycleV2 extends Component {
  constructor(props) {
    super(props);
    console.log("Inside constructorV2");
    this.state = {
      counter: 1,
    };
  }
  render() {
    console.log("Inside RenderV2");
    return (
      <>
        {this.state.counter}
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}
        >
          Decrement
        </button>
      </>
    );
  }
  componentDidMount() {
    console.log("componet mountedV2");
  }
}

export default LifecycleV2;
