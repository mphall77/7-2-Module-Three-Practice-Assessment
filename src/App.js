import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Pokemon from "./Components/Pokemon";
import Locations from "./Components/Locations";
import Berries from "./Components/Berries";

function App() {
	return (
		<div className="app">
			<main>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/berries" component={Berries} />
					<Route path="/locations" component={Locations} />
					<Route path="/pokemon" component={Pokemon} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
