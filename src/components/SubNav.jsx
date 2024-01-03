import { Link } from 'react-router-dom';

export const SubNav = () => {
	return (
		<div className="sub-nav">
			<Link to="/trenton">Trenton</Link>
			<Link to="/princeton">Princeton</Link>
			<Link to="/atlantic-city">Atlantic City</Link>
			<Link to="/jersey-city">Jersey City</Link>
		</div>
	);
};
