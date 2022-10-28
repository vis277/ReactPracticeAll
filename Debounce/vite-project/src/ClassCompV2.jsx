import { Component } from "react";

class ClassCompV2 extends Component {
  state = {
    name: "Vishal",
    city: "patna",
    state: "Bihar",
    user: [],
  };
  _handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this._handleInputChange}
        />
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this._handleInputChange}
        />
        <input
          type="text"
          name="state"
          value={this.state.state}
          onChange={this._handleInputChange}
        />
        <p>
          Name:{this.state.name} City:{this.state.city} State:{this.state.state}
        </p>

        {this.state.user.map((item) => {
          return <p>{item.name}</p>;
        })}
      </>
    );
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("ln46", this.state.user);
        this.setState((prevState) => {
          return { ...prevState, user: data };
        });
        console.log("ln47", this.state.user, this.state.name);
      });
  }
}

export default ClassCompV2;
