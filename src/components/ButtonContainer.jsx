/* eslint-disable react/prop-types */

export const ButtonContainer = ({ children, title }) => {
	return (
		<>
			<h2 className="button-container-title">{title}</h2>
			<div className="button-container">{children}</div>
		</>
	);
};
