import { Link } from 'react-router-dom';

export const Footer = () => (
	<footer>
		<div className="footer-left">2024 New Jersey©</div>
		<div className="footer-right">
			{/* <Link to={'/sitemap'}>Sitemap</Link> */}
			{/* <Link to={'/privacy'}>Privacy Policy</Link> */}
			<Link onClick={() => window.scrollTo(0, 0)}>Back To Top &uarr;</Link>
		</div>
	</footer>
);
