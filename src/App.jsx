import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";

function App(props) {
  return (
    <div className="global__container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
