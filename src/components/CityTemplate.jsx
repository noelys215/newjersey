/* eslint-disable react/prop-types */

export const Block = ({ children, isImage }) => (
	<div className={`block ${isImage ? 'image-block' : ''}`}>{children}</div>
);

export const CityTemplate = ({ children }) => <div className="city-grid">{children}</div>;
