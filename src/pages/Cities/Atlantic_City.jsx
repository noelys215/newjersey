import { BlockContainer } from '../../components/BlockContainer';
import { Button } from '../../components/Button';
import { ButtonContainer } from '../../components/ButtonContainer';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { SectionBlock } from '../../components/SectionBlock';
import { ImageBlock } from '../../components/ImageBlock';
import { AsideTableBlock, EconomyAsideTableBlock } from '../../components/AsideTableBlock';

export const Atlantic_City = () => {
	const navigate = useNavigate();

	const regionData = [
		{ county: 'Atlantic', zipCode: '08401', regionType: 'City', landArea: '10.8 mi²' },
	];
	const economyData = [{ population: '38,574', year: '1854', income: '$49,016' }];

	return (
		<Layout title={'Atlantic City'}>
			<ButtonContainer>
				<Button onClick={() => navigate('/trenton')}>Trenton</Button>
				<Button onClick={() => navigate('/princeton')}>Princeton</Button>
				<Button onClick={() => navigate('/atlantic-city')}>Atlantic City</Button>
			</ButtonContainer>
			{/* City Intro Section & Economy/Pop Aside */}
			<BlockContainer>
				<SectionBlock
					title={'City Introduction'}
					text={
						'     Atlantic City, (A.C.), is a vibrant seaside resort city located in Atlantic County, New Jersey. Known for its iconic Boardwalk, pristine beaches, and bustling casino scene, Atlantic City stands on the shores of the Atlantic Ocean, on the narrow and sandy Absecon Island. Incorporated in 1854, the city has evolved from a quiet beach town into a premier entertainment destination, drawing millions of visitors annually with its blend of seaside charm and urban energy. Its proximity to major cities like Philadelphia and New York adds to its appeal as a tourist hotspot'
					}
					source={'https://purehistory.org/history-of-atlantic-city/'}
				/>

				<EconomyAsideTableBlock
					data={economyData}
					source={
						'https://worldpopulationreview.com/us-cities/atlantic-city-nj-population'
					}
				/>
			</BlockContainer>

			{/* Culture - History Section & Region Makeup Aside */}
			<BlockContainer>
				<SectionBlock
					title={'Culture & History'}
					text={
						"     Atlantic City's history is a tapestry of innovation and entertainment. The area was originally inhabited by the Delaware Indians before European settlers arrived in the late 17th century. The city began to develop as a health resort in the 1800s and rapidly grew following the construction of the railroad, making it accessible from major urban centers. The famous Atlantic City Boardwalk, built in 1870, became a symbol of the city's leisure and entertainment culture, featuring amusement piers, rolling chairs, and the introduction of saltwater taffy. Over the years, Atlantic City has been home to the Miss America Pageant and has inspired the U.S. version of the board game Monopoly. The legalization of casino gambling in 1976 transformed the city into a major gambling and resort destination, further cementing its status as a key cultural and economic center in New Jersey."
					}
					source={'https://www.britannica.com/place/Atlantic-City-New-Jersey'}
				/>
				<AsideTableBlock
					data={regionData}
					source={
						'https://worldpopulationreview.com/us-cities/atlantic-city-nj-population'
					}
				/>
			</BlockContainer>

			{/* Notable Attraction */}
			<BlockContainer>
				<ImageBlock>
					<img src={'src/assets/hardRock.webp'} alt="Hard Rock Cafe" />
				</ImageBlock>
				<SectionBlock
					title={'Notable Attraction'}
					text={
						"     The Boardwalk in Atlantic City is undoubtedly its most famous attraction. Stretching along the oceanfront, this historic promenade has been a fixture of the city's landscape since its inception. It offers a unique blend of ocean views, shopping, dining, and entertainment. Visitors can enjoy a stroll along the Boardwalk, indulge in traditional treats like saltwater taffy, or experience the thrill of amusement rides on piers extending into the ocean. The Boardwalk encapsulates the spirit of Atlantic City, combining the leisurely charm of a beach resort with the excitement of urban attractions."
					}
					source={'https://www.acnj.gov/page/about-atlantic-city'}
				/>
			</BlockContainer>
			<Image src={'src/assets/atlantic-city.jpg'} alt={'Atlantic City Shore'} />
		</Layout>
	);
};
