import React, { Component } from "react";
import axios from "axios";

export default class Pokemon extends Component {
	state = { url: "", userInput: "", pokemon: {} };

	getPokemon = async (e) => {
		e.preventDefault();
        this.setState({ userInput: e.target.value });
        
		try {
			const res = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${e.target.value}`
			);
			const pokemon = res.data;
			// this.setState({ pokemon: res.data });
			this.setState({ url: pokemon.sprites.front_default });
            
		} catch (err) {
			console.log(err);
			this.setState({ url: "" });
		}
	};

	render() {
		const { pokemon } = this.state;
		return (
			<div>
				<h2>Search for a Pokemon</h2>
				<form>
					<label>
						<input
							onChange={this.getPokemon}
							type="text"
							placeholder="find your Pokemon"
						/>
						<input type="submit" value="Submit" />
					</label>
				</form>

				<div className="pokemon-info">
					<p>
						<strong>Name:</strong>
						{pokemon.name}
					</p>
					{/* <img src={url} alt="pokemon" /> */}
					<p>
						<strong>ID:</strong>
						{pokemon.id}
					</p>
				</div>
			</div>
		);
	}
}

// show: name image id
// The input will accept an id or full name (no need for partial matches)
// If the user's input does not match a name or id (misspelled or otherwise), the text "Pokemon not found! Try another name or ID number" should display below the input.
// The input should clear once the "submit" button is pressed.
// New inputs should replace the previously displayed information.
