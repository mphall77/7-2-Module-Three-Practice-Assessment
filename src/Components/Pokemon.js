import { useState } from "react";
import axios from "axios";

const Pokemon = () => {
	// declare the useState
	const [userInput, setUserInput] = useState("");
	const [pokemon, setPokemon] = useState({});
	const [hasSearched, setHasSearched] = useState(false);

	// take in the event
	const handleChange = (e) => setUserInput(e.target.value);

	// call the API
	const handleSubmit = async (e) => {
		e.preventDefault();
		setHasSearched(true);
		try {
			const res = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${userInput}`
			);
			setPokemon(res.data);
		} catch (err) {
			setPokemon({});
		}
		setUserInput("");
	};

	// display image, id, and name if input is valid
	// display error message if invalid input
	// do NOT show  name, id or image if no search was performed

	let text;
	if (hasSearched) {
		// valid name on input
		if (pokemon.name) {
			text = (
				<div>
					<p>Name: {pokemon.name}</p>
					<img src={pokemon.sprites?.front_default} />
					<p>ID {pokemon.id}</p>
				</div>
			);
		}
	} else {
		text = null;
	}

	return (
		<section>
			<h1>Search for a Pokemon</h1>

			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type="text"
					value={userInput}
					placeholder="Find Your Pokemon"
				></input>
				<button type="submit">Submit</button>
			</form>
			{text}
		</section>
	);
};

export default Pokemon;
