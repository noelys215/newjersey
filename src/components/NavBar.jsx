import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

	return (
		<nav>
			<div className="logo">
				<Link to={'/'}>
					New Jersey
					<br />
					The Garden State
				</Link>
			</div>

			{isMobile ? (
				<>
					<div className="hamburger" onClick={toggleMobileMenu}>
						{mobileMenuOpen ? '' : '☰'}
					</div>
					{mobileMenuOpen && (
						<div className="mobile-nav">
							<ul>
								<li onClick={toggleMobileMenu}>
									<Link to="/">Home</Link>
								</li>
								<li onClick={toggleMobileMenu}>
									<Link to="/attractions">Attractions</Link>
								</li>
								<li onClick={toggleMobileMenu}>
									<Link to="/state-history">State History</Link>
								</li>
								<li onClick={toggleMobileMenu}>
									<Link to="/contact">Contact</Link>
								</li>
								<li onClick={toggleMobileMenu}>&#x2169;</li>
							</ul>
						</div>
					)}
				</>
			) : (
				<ul className="nav-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/attractions">Attractions</Link>
					</li>
					<li>
						<Link to="/state-history">State History</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};
