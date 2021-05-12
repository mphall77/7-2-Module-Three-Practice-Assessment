import React, { Component } from "react";
import axios from "axios";

class Locations extends Component {
	state = { locations: [], showLocations: false };

	fetchLocations = async () => {
		try {
			const res = await axios.get("https://pokeapi.co/api/v2/location/");
			this.setState({ locations: res.data.results });
		} catch (err) {
			console.log(err);
			this.setState({ locations: [] });
		}
	};

	componentDidMount() {
		this.fetchLocations();
	}

	toggleButton = () => {
		this.setState((prevState) => ({ showLocations: !prevState.showLocations }));
	};

	render() {
		const { locations, showLocations } = this.state;

		return (
			<section>
				<h2>List of Locations</h2>
				<button onClick={() => this.toggleButton()}>
					{showLocations ? "Hide Locations" : "Show Locations"}
				</button>
				{showLocations ? (
					<ul>
						{locations.map((location) => {
							return <li key={location.name}>{location.name}</li>;
						})}
					</ul>
				) : (
					<ul></ul>
				)}
			</section>
		);
	}
}

export default Locations;
