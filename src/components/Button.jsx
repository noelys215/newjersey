/* eslint-disable react/prop-types */
export const Button = ({ children, onClick }) => {
	return (
		<button className="moss-button" onClick={onClick}>
			{children}
		</button>
	);
};
