import axios from "axios";
import { useState, useEffect } from "react";

const Berries = () => {
	// declare useState
	const [berries, setBerries] = useState([]);
	const [selectedBerryURL, setSelectedBerryURL] = useState("");
	const [selectedBerry, setSelectedBerry] = useState({});
	const [flavors, setFlavors] = useState([]);

	// function to call API
	const fetchBerries = async () => {
		try {
			const res = await axios.get("https://pokeapi.co/api/v2/berry/");
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
			setFlavors(res.data.flavors);
		} catch (err) {
			setSelectedBerry({});
		}
	};

	// selectBerry = async (e) => {
	// 	this.setState({ selectedBerryURL: e.target.value });
	// 	try {
	// 		const res = await axios.get(e.target.value);
	// 		this.setState({ firmness: res.data });
	// 		this.setState({ flavors: res.data.flavors });
	// 	} catch {
	// 		this.setState({ firmness: {} });
	// 	}
	// };

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

			<ul>
				{flavors.map((flavor) => (
					<li key={flavor.name}>{flavor.flavor.name}</li>
				))}
			</ul>
		</section>
	);
};
export default Berries;
