import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    this.props.history.push("/repos", { username: username });
  }

  render() {
    return (
      <div className="content">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label className="details">
            Jep Username:{" "}
            <input
              className="userbar"
              ref="username"
              type="text"
              placeholder="Username"
            />
          </label>
          <label>
            {" "}
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Home;
