/* eslint-disable react/prop-types */
export const SectionBlock = ({ title, text }) => {
	return (
		<section className="section-block">
			<h2>{title}</h2>
			<p>{text}</p>
		</section>
	);
};
