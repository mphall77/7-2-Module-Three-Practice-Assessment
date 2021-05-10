import React, { Component } from "react";
import axios from "axios";

export default class Locations extends Component {
	state = { locations: [], showText: false };

	loadLocations = async () => {
		try {
			const res = await axios.get("https://pokeapi.co/api/v2/location/");
			const locationsArray = res.data.results;
			this.setState({ locations: locationsArray });
		} catch (err) {
			console.log(err);
			this.setState({ locations: [] });
		}
	};

	componentDidMount() {
		this.loadLocations();
	}

    toggleButton = () => {
         this.setState((prevState) => ({ showText: !prevState.showText }));
	};

	render() {
		const { locations, showText } = this.state;

		return (
			<div>
				<h2>List of Locations</h2>
				<button onClick={() => this.toggleButton()}>
					{showText ? "Hide Locations" : "Show Locations"}
				</button>
				{showText && <ul>
					{this.state.locations.map((location) => {
						return <li key={location.name}>{location.name}</li>;
					})}
				</ul>}
			</div>
		);
	}
}
