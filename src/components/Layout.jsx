/* eslint-disable react/prop-types */

import { Footer } from './Footer';
import { Header } from './Header';
import { NavBar } from './NavBar';

export const Layout = ({ title, children }) => {
	return (
		<div id="layout-div">
			<NavBar />
			<Header>{title}</Header>
			<main>{children}</main>
			<Footer />
		</div>
	);
};
