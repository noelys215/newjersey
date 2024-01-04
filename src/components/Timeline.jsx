/* eslint-disable react/prop-types */

export const Timeline = ({ groups }) => {
	return (
		<div className="timeline">
			{groups.map((group, index) => (
				<div key={index} className="timeline-group">
					<h3>{group.title}</h3>
					<ol>
						{group.items.map((item, itemIndex) => (
							<li key={itemIndex}>{item}</li>
						))}
					</ol>
				</div>
			))}
		</div>
	);
};
