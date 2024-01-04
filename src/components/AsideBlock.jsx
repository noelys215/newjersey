/* eslint-disable react/prop-types */
export const AsideBlock = ({ title, text, children, source }) => {
	return (
		<aside className="aside-block">
			<h2>{title}</h2>
			<p>{text}</p>
			<a className="block-link" href={source} target={'_blank'} rel="noreferrer">
				&ldquo;source&rdquo;
			</a>
			{children}
		</aside>
	);
};
