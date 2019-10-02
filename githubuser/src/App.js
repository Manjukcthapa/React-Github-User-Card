import React, { Component } from "react";
import axios from "axios";
import UserList from "./Component/UserList";
import FollowersList from "./Component/FollowersList";
import Form from "./Component/form"
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: [],
      userFollowers: [],
      searchItem:""
    };
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

  fetchUser = () => {
    axios
      .get(`https://api.github.com/users/Manjukcthapa`)
      .then(res => {
        console.log("res.data", res.data);
        const userInfo = res.data;
        this.setState({ userInfo: [userInfo] });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchFollowers = () => {
    axios
      .get(`https://api.github.com/users/Manjukcthapa/followers`)
      .then(response => {
        console.log("followers:", response);
        const userFollower = response.data;
        this.setState({ userFollowers: [userFollower] });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Form searchItem = {this.state.searchItem}/>
        <UserList userInfo={this.state.userInfo} />
        <FollowersList userFollowers={this.state.userFollowers} />
      </div>
    );
  }
}

export default App;
