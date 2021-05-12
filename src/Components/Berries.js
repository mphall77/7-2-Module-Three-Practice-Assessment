import axios from "axios";
import { useState, useEffect } from "react";

const Berries = () => {
	// declare useState
	const [berries, setBerries] = useState([]);
	const [selectedBerryURL, setSelectedBerryURL] = useState("");
	const [selectedBerry, setSelectedBerry] = useState({});

	// function to call API
	const fetchBerries = async () => {
		try {
			const res = await axios.get("https://pokeapi.co/api/v2/berry/");
			debugger;
			setBerries(res.data.results);
		} catch (err) {
			setBerries([]);
		}
	};

	// call the function for the API
	useEffect(() => {
		fetchBerries();
	}, []);

	// get the option selected
	const selectBerry = async (e) => {
		setSelectedBerryURL(e.target.value);
		try {
			const res = await axios.get(e.target.value);
			setSelectedBerry(res.data);
		} catch (err) {
			setSelectedBerry({});
		}
	};

	return (
		<section>
			<h1>Select a Type</h1>

			{/* pass the url as the value of the option as the event onChange */}
			<select value={selectedBerryURL} onChange={selectBerry}>
				<option value=""></option>
				{/* loop array to create select and options menu */}
				{berries.map((berry) => {
					return (
						<option key={berry.name} value={berry.url}>
							{berry.name}
						</option>
					);
				})}
			</select>

			<p>{selectedBerry.name}</p>
			<p>{selectedBerry.firmness && selectedBerry.firmness.name}</p>

			<ul>{}</ul>
		</section>
	);
};
export default Berries;
