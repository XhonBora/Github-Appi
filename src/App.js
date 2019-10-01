import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import Repos from "./Repos";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/repos" component={Repos}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
