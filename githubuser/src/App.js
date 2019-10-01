import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInfo:[]
    }
  }

  componentDidMount(){
    this.fetchUser();
  }

fetchUser = () => {
  axios.get(`https://api.github.com/users/Manjukcthapa`)
  .then(res => {
    console.log('res.data',res.data)
    const userInfo = res.data;
    this.setState({userInfo})
  })
.catch(err => {
  console.log(err);
})
}


  render() {
    return (
      <div className="App">
       <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
