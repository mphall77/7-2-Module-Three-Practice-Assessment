import React, { Component } from "react";
import axios from "axios";

class Pokemon extends Component {
	state = { userInput: "", pokemon: {}, hasSearched: false };

	handleChange = (e) => {
		this.setState({ userInput: e.target.value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ hasSearched: true });

		try {
			const { userInput } = this.state;
			const res = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${userInput}`
			);
			this.setState({ pokemon: res.data });
		} catch (err) {
			this.setState({ pokemon: {} });
		}
		this.setState({ userInput: "" });
	};

	render() {
		const { pokemon, userInput, hasSearched } = this.state;

		let text;
		if (hasSearched) {
			if (pokemon.name) {
				text = (
					<div className="pokemon-info">
						<p>
							<strong>Name: </strong>
							{pokemon.name}
						</p>
						<img src={pokemon.sprites?.front_default} alt="pokemon" />
						<p>
							<strong>ID: </strong>
							{pokemon.id}
						</p>
					</div>
				);
			} else {
				text = <div>Pokemon not found!</div>;
			}
		} else {
			text = null;
		}

		return (
			<section>
				<h1>Search for a Pokemon</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						<input
							onChange={this.handleChange}
							type="text"
							value={userInput}
							placeholder="Find Your Pokemon"
						/>
						<button type="submit">Submit</button>
					</label>
				</form>

				{text}
			</section>
		);
	}
}

export default Pokemon;

// show: name image id
// The input will accept an id or full name (no need for partial matches)
// If the user's input does not match a name or id (misspelled or otherwise), the text "Pokemon not found! Try another name or ID number" should display below the input.
// The input should clear once the "submit" button is pressed.
// New inputs should replace the previously displayed information.

// getPokemon = async (e) => {
// 	e.preventDefault();
// 	this.setState({ userInput: e.target.value });

// 	try {
// 		const res = await axios.get(
// 			`https://pokeapi.co/api/v2/pokemon/${e.target.value}`
// 		);
// 		const pokemon = res.data;
// 		// this.setState({ pokemon: res.data });
// 		this.setState({ url: pokemon.sprites.front_default });
// 	} catch (err) {
// 		console.log(err);
// 		this.setState({ url: "" });
// 	}
// };
