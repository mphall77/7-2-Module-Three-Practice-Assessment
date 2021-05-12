import axios from "axios";
import React, { Component } from "react";

class Berries extends Component {
	state = {
		berries: [],
		selectedBerryURL: "",
		flavors: [],
		firmness: {},
	};

	fetchBerries = async () => {
		try {
			const res = await axios.get("https://pokeapi.co/api/v2/berry/");
			this.setState({ berries: res.data.results });
		} catch (err) {
			this.setState({ berries: [] });
		}
	};

	selectBerry = async (e) => {
		this.setState({ selectedBerryURL: e.target.value });
		try {
			const res = await axios.get(e.target.value);
			this.setState({ firmness: res.data });
			this.setState({ flavors: res.data.flavors });
		} catch {
			this.setState({ firmness: {} });
		}
	};

	componentDidMount() {
		this.fetchBerries();
	}

	render() {
		const { berries, selectedBerryURL, firmness, flavors } = this.state;

		return (
			<section>
				<h2>Select a Type</h2>
				<select value={selectedBerryURL} onChange={this.selectBerry}>
					<option value="" selected></option>
					{berries.map((berry) => (
						<option value={berry.url} key={berry.url}>
							{berry.name}
						</option>
					))}
				</select>
				<p>{firmness.name}</p>
				<p>{firmness.firmness && firmness.firmness.name}</p>

				<ul>
					{flavors.map((flavor) => (
						<li>{flavor.flavor.name}</li>
					))}
				</ul>
			</section>
		);
	}
}

export default Berries;
