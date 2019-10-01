import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Repos from "./Repos";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      reposList: []
    };
  }

  getUser(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(user => {
        this.setState({
          reposList: []
        });
      });

    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(repos => {
        this.setState({
          reposList: repos
        });
      });
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.getUser(this.refs.username.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <input ref="username" type="text" placeholder="username" />
          </div>
          <div>
            {" "}
            <button type="submit">Submit</button>
          </div>
        </form>
        <Repos reposList={this.state.reposList} />
      </div>
    );
  }
}

export default Home;

{
  /* 
  fetch("/https://api.github.com/users/${username}/repos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        reposList: this.reposList
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  .catch(err => console.log(err)); */
}
