/* eslint-disable react/prop-types */
export const Image = ({ src, alt }) => {
	return (
		<div className="image-container">
			<img src={src} alt={alt} />
		</div>
	);
};
