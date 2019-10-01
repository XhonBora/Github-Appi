import React, { Component } from "react";

const Repos = ({ reposList }) => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Fullname</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {reposList.map((repo, index) => {
            return (
              <tr key={index}>
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
};

export default Repos;

{
  /*
        
        

  class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reposList: []
    };
  }

  renderTableData() {
    return this.state.reposList.map(repo => {
      const { name, fullname, owner } = repo;
      return (
        <tr>
          <td>{name}</td>
          <td>{fullname}</td>
          <td>{owner}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
        
        
         <div>
      <ul>
        <li>
          <strong>Name: </strong> {name} || <strong>Fullname:</strong>{" "}
          {fullname} || <strong>Owner:</strong> {owner}
        </li>
      </ul>
    </div>*/
}

{
  /*
const Repos = ({ reposList }) => {
  return (
    <div>
      <table border="1">
        <tbody>
          {reposList.map((repo, index) => {
            return (
              <tr key={index}>
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
};
*/
}

{
  /* 
  renderTableData() {
    const { reposList } = this.state;
    {
      reposList &&
        reposList.map(repo => (
          <tr key={repo.id}>
            <td>{repo.name}</td>
            <td>{repo.full_name}</td>
            <td>{repo.owner.login}</td>
          </tr>
        ));
    }
  } */
}
