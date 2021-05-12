import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
	return (
		<nav>
			<NavLink to={"/"}>
				<img
					src="https://st3.depositphotos.com/6601624/16285/i/600/depositphotos_162850860-stock-photo-editorial-illustration-3d-render-of.jpg"
					alt="logo"
				/>
			</NavLink>
			<NavLink to="pokemon">Pokemon</NavLink>
			<NavLink to="berries">Berries</NavLink>
			<NavLink to="locations">Locations</NavLink>
		</nav>
	);
}
export default NavBar;
