import { useState } from "react";
import { Component, Fragment } from "react";
import DisplayFav from "./DisplayFav";
class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoaded: false,
      favList: [],
    };
  }
  _handleClick = (param) => {
    console.log("ln14", param.id);
    const hasElementInFavList = this.state.favList.some(
      (item) => item.id === param.id
    );
    console.log(hasElementInFavList);
    if (hasElementInFavList) {
      return;
    }
    this.setState({
      favList: [...this.state.favList, param],
    });
  };

  _handleDelete = (param) => {
    console.log(this.state.favList);
    let finalFavList = this.state.favList.filter((item) => {
      if (item.id != param) {
        return item;
      }
    });
    console.log(finalFavList);
    this.setState({
      favList: finalFavList,
    });
  };
  render() {
    const { list, isLoaded, favList } = this.state;

    // console.log("ln12", list);
    return (
      <Fragment>
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                Name:{item.name} || UserName:{item.username} || Email:
                {item.email}
                <button onClick={() => this._handleClick(item)}>
                  SaveUser
                </button>
              </li>
            );
          })}
        </ul>

        {/* <DisplayFav data={favList}></DisplayFav> */}
        <p>Selected List</p>
        <ul>
          {favList.map((item) => {
            return (
              <li key={item.id}>
                {item.name}
                <button onClick={() => this._handleDelete(item.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("ln17", data);
        this.setState({
          list: data,
          isLoaded: true,
        });
      });
    console.log("ln22", this.state.list);
  }
}

export default Api;
