import React from "react";
import { Component } from "react";
import CardsInfo from "./CardsInfo";

class Api extends Component {
  constructor(props) {
    super(props);
    console.log("ln8", props);
    this.state = {
      isloaded: false,
      list: [],
    };
  }

  render() {
    const { list, isloaded } = this.state;

    return (
      <>
        {isloaded ? (
          <CardsInfo
            data={list}
            baseUrl="https://image.tmdb.org/t/p/w500/"
          ></CardsInfo>
        ) : (
          ""
        )}
      </>
    );
  }
  componentDidMount() {
    console.log("ln33", this.props);
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isloaded: true,
          list: data,
        });
      });
  }
}

export default Api;
