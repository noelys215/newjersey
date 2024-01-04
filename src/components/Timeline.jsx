/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

export const timelineData = [
	{
		title: '16th & 17th Centuries',
		items: [
			'1524: Giovanni Verrazano explores the Jersey coast.',
			'1609: Henry Hudson explores Newark Bay.',
			'1660: Bergen, now Jersey City, becomes the first permanent town.',
			'1676: New Jersey Colony is divided into East and West Jersey.',
		],
	},
];

export const timelineData2 = [
	{
		title: '18th Century',
		items: [
			'1738: Lewis Morris becomes the first governor of New Jersey.',
			'1746: Princeton University is founded.',
			'1776: New Jersey adopts its first state constitution.',
			'1787: New Jersey becomes the third state to ratify the U.S. Constitution.',
		],
	},
];

export const timelineData3 = [
	{
		title: '19th Century',
		items: [
			'1804: Alexander Hamilton and Aaron Burr duel in Weehawken.',
			'1824: The first ferry service in the U.S. opens between Hoboken and Manhattan.',
			'1844: New Jersey adopts its second state constitution.',
			'1869: The first intercollegiate football game is played in New Brunswick.',
		],
	},
];

export const timelineData4 = [
	{
		title: '20th Century',
		items: [
			'1912: Woodrow Wilson, New Jersey Governor, is elected President of the U.S.',
			'1933: The first drive-in movie theater in the U.S. opens in Camden.',
			'1947: New Jersey adopts its third state constitution.',
			'1995: The New Jersey Devils win the Stanley Cup.',
		],
	},
];

export const timelineData5 = [
	{
		title: '21st Century',
		items: [
			'2001: The U.S.S. New Jersey battleship becomes a museum.',
			'2003: The New Jersey Devils win the Stanley Cup.',
			'2006: New Jersey Supreme Court rules in favor of legal rights for gay couples.',
			'2006: New Jersey Constitution amended to create the Office of Lieutenant Governor.',
		],
	},
];

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
