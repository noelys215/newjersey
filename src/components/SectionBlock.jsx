/* eslint-disable react/prop-types */
export const SectionBlock = ({ title, text, children, source }) => {
	return (
		<section className="section-block">
			<h2>{title}</h2>
			<p>{text}</p>
			<a className="block-link" href={source} target={'_blank'} rel="noreferrer">
				&ldquo;source&rdquo;
			</a>
			{children}
		</section>
	);
};
