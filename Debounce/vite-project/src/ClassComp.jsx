import { Component } from "react";

class ClassComp extends Component {
  state = {
    name: "vishal",
    city: "patna",
    state: "bihar",
  };
  _handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this._handleChange}
        ></input>

        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this._handleChange}
        ></input>
        <input
          type="text"
          name="state"
          value={this.state.state}
          onChange={this._handleChange}
        ></input>
      </>
    );
  }
}

export default ClassComp;
