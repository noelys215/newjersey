import { Link } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav>
			<div className="logo">
				<Link to={'/'}>
					New Jersey
					<br />
					The Garden State
				</Link>
			</div>
			<ul className="nav-links">
				<li>
					<Link to="/">Home</Link>
				</li>
				{/* <li>
					<Link to="/attractions">Attractions</Link>
				</li>
				<li>
					<Link to="/state-history">State History</Link>
				</li> */}
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};
