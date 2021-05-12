import { useState, useEffect } from "react";
import axios from "axios";

const Locations = () => {
	// declare the state
	const [locations, setLocations] = useState([]);
	const [showLocations, setShowLocations] = useState(false);

	// call the API with a function
	const fetchLocations = async () => {
		try {
			const res = await axios.get("https://pokeapi.co/api/v2/location");
			setLocations(res.data.results);
		} catch (err) {
			setLocations([]);
		}
	};

	// toggle button
	const handleClick = () => {
		setShowLocations((prevShowLocations) => !prevShowLocations);
	};

	// call the function on cdm
	useEffect(() => {
		fetchLocations();
	}, []);

	return (
		<section>
			<h1>List of Locations</h1>
			<button onClick={handleClick}>
				{showLocations ? "Hide Locations" : "Show Locations"}
			</button>

			{/* map the array and create the ul/li */}
			{showLocations ? (
				<ul>
					{locations.map((location) => {
						return <li>{location.name}</li>;
					})}
				</ul>
			) : (
				<ul></ul>
			)}
		</section>
	);
};
export default Locations;

// import axios from "axios";
// import { useState, useEffect } from "react";

// const Locations = () => {
// 	// declare the useState
// 	const [locations, setLocations] = useState([]);
// 	const [showLocations, setShowLocations] = useState(false);

// 	// handleClick to toggle the button
// 	const handleClick = () => {
// 		setShowLocations((prevShowLocations) => !prevShowLocations);
// 	};

// 	// call the API
// 	const fetchLocations = async () => {
// 		try {
// 			const res = await axios.get("https://pokeapi.co/api/v2/location");
// 			setLocations(res.data.results);
// 		} catch (err) {
// 			setLocations([]);
// 		}
// 	};

// 	// call the function on cdm
// 	useEffect(() => {
// 		fetchLocations();
// 	}, []);

// 	return (
// 		<section>
// 			<h1>List of Locations</h1>
// 			<button onClick={handleClick}>
// 				{showLocations ? "Hide Locations" : "Show Locations"}
// 			</button>

// 			{/* attach the list to the toggle feature */}
// 			{showLocations ? (
// 				<ul>
// 					{/* map res/locations arrayand print li  */}
// 					{locations.map((location) => {
// 						return <li>{location.name}</li>;
// 					})}
// 				</ul>
// 			) : (
// 				<ul></ul>
// 			)}
// 		</section>
// 	);
// };

// export default Locations;
