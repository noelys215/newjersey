import { BlockContainer } from '../../components/BlockContainer';
import { Button } from '../../components/Button';
import { ButtonContainer } from '../../components/ButtonContainer';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { SectionBlock } from '../../components/SectionBlock';
import { AsideBlock } from '../../components/AsideBlock';
import { ImageBlock } from '../../components/ImageBlock';

export const Atlantic_City = () => {
	const navigate = useNavigate();
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
						'     Founded on the principles of leisure and relaxation, Atlantic City was incorporated on May 1, 1854, and is located in Atlantic County, New Jersey. Originally the summer home of the Lenni Lenape Indians, Atlantic City was developed on Absecon Island, a place long revered for its natural beauty. \n     This urban city, known for its casinos, nightlife, boardwalk, and stunning Atlantic Ocean beaches, is situated in South Jersey and has become synonymous with East Coast entertainment and leisure.'
					}
					source={'https://purehistory.org/history-of-atlantic-city/'}
				/>

				<AsideBlock
					title={'Economy & Population'}
					text={
						<ul>
							<li>Average Earning</li>
							<li>Rate of Home Ownership</li>
							<li>Growth Rate</li>
							<li>Demographic</li>
						</ul>
					}
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
						"     Atlantic City's economy has historically been anchored in tourism and entertainment. The city has a population of approximately 38,574 as of 2024, with a density of 3,584.90 per square mile. \n     Known for being the first city to have a boardwalk and the first with paid, professional lifeguards, Atlantic City pioneered many aspects of the modern beach holiday. \n     The introduction of casinos in the late 20th century marked a significant shift, turning the city into a major center for gambling and leisure, further enhancing its economic profile."
					}
				/>
				<AsideBlock
					title={'Region Makeup'}
					text={
						<ul>
							<li>County</li>
							<li>Zip Code</li>
							<li>Area Code</li>
							<li>Land Area</li>
						</ul>
					}
				/>
			</BlockContainer>

			{/* Notable Attraction */}
			<BlockContainer>
				<ImageBlock>
					<img src={'src/assets/hardRock.webp'} />
				</ImageBlock>
				<SectionBlock
					title={'Notable Attraction'}
					text={
						"     Atlantic City's cultural scene is as lively and diverse as its history. The city is renowned for its entertainment, with a plethora of casinos, live shows, and the legendary Atlantic City Boardwalk that offers an array of dining, shopping, and cultural experiences. \n     The Boardwalk Hall, a historic venue, hosts numerous high-profile concerts, sporting events, and other entertainments. Beyond these well-known attractions, the city also boasts various cultural festivals and events throughout the year, reflecting its rich and diverse cultural tapestry."
					}
				/>
			</BlockContainer>
			<Image src={'src/assets/atlantic-city.jpg'} alt={'Atlantic City Shore'} />
		</Layout>
	);
};
