import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav>
			<NavLink exact to="/">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2En9VoEK5XIRIPLgXeK0Z4WCc3BNRz_Exg&usqp=CAU"
					alt="logo"
					height="50px"
					width="50px"
				/>
			</NavLink>
			<NavLink to="/pokeman">Pokemon</NavLink>
			<NavLink to="/locations">Locations</NavLink>
			<NavLink to="/berries">Berries</NavLink>
		</nav>
	);
};

export default NavBar;
