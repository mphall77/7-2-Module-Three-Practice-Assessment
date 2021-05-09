import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <h1>Welcome To My Pokemon App!</h1>
        {/* <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/pokemon"} component={Pokemon} />
          <Route path={"locations"} components={Locations} />
          <Route path={"berries"} components={Berries} />
        </Switch> */}
      </main>
    </div>
  );
}

export default App;
