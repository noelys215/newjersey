import { Link } from 'react-router-dom';

export const NavBar = () => (
	<nav>
		<div className="logo">
			New Jersey
			<br />
			The Garden State
		</div>
		<ul className="nav-links">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/cities">Cities</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
		</ul>
	</nav>
);
