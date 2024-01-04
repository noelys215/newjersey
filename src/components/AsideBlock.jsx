/* eslint-disable react/prop-types */
export const AsideBlock = ({ title, text }) => {
	return (
		<aside className="aside-block">
			<h2>{title}</h2>
			<p>{text}</p>
		</aside>
	);
};
