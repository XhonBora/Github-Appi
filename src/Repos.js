import React, { Component } from "react";
import "./repos.css";

class Repos extends Component {
  constructor(props) {
    super(props);

    const { username } = this.props.location.state;
    console.log(username);

    this.state = {
      reposList: [],
      username: username
    };
  }

  componentDidMount() {
    const { username } = this.state;
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(repos => {
        this.setState({
          reposList: repos
        });
      });
  }

  userData() {
    const { username, reposList } = this.state;
    if (username) {
      return (
        <div className="container">
          <table border="1">
            <thead>
              <tr>
                <th>Id</th>
                <th>Node_id</th>
                <th>Name</th>
                <th>Fullname</th>
                <th>Owner.login</th>
              </tr>
            </thead>
            <tbody>
              {reposList.map((repo, index) => {
                return (
                  <tr key={index}>
                    <td>{repo.id}</td>
                    <td>{repo.node_id}</td>
                    <td>{repo.name}</td>
                    <td>{repo.full_name}</td>
                    <td>{repo.owner.login}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else return null;
  }

  render() {
    return <div>{this.userData()}</div>;
  }
}

export default Repos;
