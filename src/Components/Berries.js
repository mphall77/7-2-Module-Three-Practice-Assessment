import axios from "axios";
import React, { Component } from "react";

export default class Berries extends Component {
	state = { berries: [] };

	loadBerries = async () => {
		try {
			const res = await axios.get("https://pokeapi.co/api/v2/berry/");
			const berryArray = res.data.results;
			// this.setState({ berries: berryArray });
		} catch (err) {
			console.log(err);
			this.setState({ berries: [] });
		}
	};

	componentDidMount() {
		this.loadBerries();
	}

	render() {
		const { berries } = this.state;
		const berryOptions = berries.map((berry) => (
			<option value={berry.name} key={berry.url}>
				{berry.name}
			</option>
		));
		return (
			<div>
				<h2>Select a Type</h2>

				<select>{berryOptions}</select>
			</div>
		);
	}
}
