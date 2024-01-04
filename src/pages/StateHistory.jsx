import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { BlockContainer } from '../components/BlockContainer';
import { SectionBlock } from '../components/SectionBlock';
import { AsideBlock } from '../components/AsideBlock';
import { Button } from '../components/Button';
import { ButtonContainer } from '../components/ButtonContainer';
import { useNavigate } from 'react-router-dom';
import { Timeline } from '../components/Timeline';

export const StateHistory = () => {
	const navigate = useNavigate();

	const timelineData = [
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

	const timelineData2 = [
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

	const timelineData3 = [
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

	const timelineData4 = [
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

	const timelineData5 = [
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

	return (
		<Layout title={'State History'}>
			<ButtonContainer title={'Explore Our Cities'}>
				<Button onClick={() => navigate('/trenton')}>Trenton</Button>
				<Button onClick={() => navigate('/princeton')}>Princeton</Button>
				<Button onClick={() => navigate('/atlantic-city')}>Atlantic City</Button>
			</ButtonContainer>
			<Image src={'src/assets/jerseyCityClock.jpg'} alt={'Jersey City Clock'} />
			{/* State Into & News Updates */}
			<BlockContainer>
				<SectionBlock
					title={'Early Beginnings'}
					text={
						"     The land now known as New Jersey was originally inhabited by the Delaware Indians, a name translating to 'original people' or 'genuine people.' They settled in the region at least 10,000 years ago, with a population ranging from 8,000 to 20,000 when Europeans first arrived. These indigenous people lived in small, family-based communities, engaging in hunting, fishing, and farming activities like growing squash, beans, sweet potatoes, and corn. By the time European explorers, such as Giovanni de Verrazano in 1524 and Henry Hudson in 1609, arrived, the Delaware Indians had established themselves throughout parts of Delaware, New Jersey, and eastern Pennsylvania."
					}
					source={'https://www.nj.gov/nj/about/history/short_history.html'}
				/>
			</BlockContainer>
			{/* State Into & News Updates */}
			<BlockContainer>
				<SectionBlock
					title={'Colonial Era and the Revolutionary War'}
					text={
						"     New Jersey's colonial period was marked by European settlement, beginning with explorers like Giovanni de Verrazano in 1524, followed by Henry Hudson's exploration in 1609. This era saw diverse European communities, including the Dutch, Swedes, and Finns, settle in the region, with Bergen emerging as the first enduring European settlement in 1660. The British takeover in 1664 led to the official naming of New Jersey and fostered a colony rich in ethnic diversity and freedom. During the American Revolution, New Jersey was crucial due to its strategic location, hosting more battles than any other state. Key victories at Trenton and Princeton, significant for American forces, underscored New Jersey's pivotal role in the nation's quest for independence. The state's decision to join the Revolutionary War and declare independence in 1776 was a testament to its central role in the conflict."
					}
					source={'https://www.nj.gov/nj/about/history/short_history.html'}
				/>
			</BlockContainer>
			{/* State Into & News Updates */}
			<BlockContainer>
				<SectionBlock
					title={'Growth and Industrialization'}
					text={
						"     After becoming the third state to ratify the U.S. Constitution in 1787, New Jersey experienced significant growth and industrialization in the 19th century. Cities like Paterson and Trenton emerged as industrial hubs, with the latter becoming the state capital in 1790. The state also contributed significantly to the Civil War effort. The post-Civil War period saw further industrial expansion, attracting a diverse immigrant population and leading to social reforms under leaders like Woodrow Wilson. New Jersey also became a center for innovation, notably in the work of Thomas Edison, contributing to the development of the motion picture industry. The 20th century brought challenges like the Great Depression but also advancements in transportation and air travel, setting the stage for New Jersey's continued evolution and significance in modern times."
					}
					source={'https://www.nj.gov/nj/about/history/short_history.html'}
				/>
			</BlockContainer>
			{/* State Into & News Updates */}
			<BlockContainer>
				<AsideBlock source={'https://nj.gov/nj/about/facts/timeline/'}>
					<Timeline groups={timelineData} />
					<Timeline groups={timelineData2} />
				</AsideBlock>
				<AsideBlock source={'https://nj.gov/nj/about/facts/timeline/'}>
					<Timeline groups={timelineData3} />
					<Timeline groups={timelineData4} />
				</AsideBlock>
				<AsideBlock>
					<Timeline groups={timelineData5} />
				</AsideBlock>
			</BlockContainer>

			<Image src={'src/assets/princetonWilderness.jpg'} alt={'Jersey Shore Image'} />
		</Layout>
	);
};
