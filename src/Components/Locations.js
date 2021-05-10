import React, { Component } from "react";
import axios from "axios";

export default class Locations extends Component {
	state = { locations: [], displayText: true };

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
		//    locations.map(location => {
		//        <ul>
		//            <li key={location.url}>
		//                {location.name}
		//             </li>
		//         </ul>
		//     })
	};

	render() {
		const { locations } = this.state;

		return (
			<div>
				<h2>List of Locations</h2>
                    {/* <button onClick={()=>this.toggleButton()}>Show Locations</button> */}
				<ul>
					{locations.map((location) => {
						return(<li key={location.name}>{location.name}</li>)
					})}
				</ul>
			</div>
		);
	}
}
