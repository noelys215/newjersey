import { Block, CityTemplate } from '../../components/CityTemplate';
import { Container } from '../../components/Container';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { SubNav } from '../../components/SubNav';

export const Atlantic_City = () => {
	return (
		<Layout title={'Atlantic City'}>
			<SubNav />
			<Container>
				<CityTemplate>
					{/* First Row */}
					<Block isImage>
						<Image src="src/assets/atlantic-city.jpg" alt="Flag of Trenton" />
					</Block>
					<Block>
						<h2>Community Glimpse</h2>
						<p>
							{
								'     Founded on the principles of leisure and relaxation, Atlantic City was incorporated on May 1, 1854, and is located in Atlantic County, New Jersey. Originally the summer home of the Lenni Lenape Indians, Atlantic City was developed on Absecon Island, a place long revered for its natural beauty. \n     This urban city, known for its casinos, nightlife, boardwalk, and stunning Atlantic Ocean beaches, is situated in South Jersey and has become synonymous with East Coast entertainment and leisure.'
							}
						</p>
						<a
							className="block-link"
							href={'https://purehistory.org/history-of-atlantic-city/'}
							target={'_blank'}
							rel="noreferrer">
							&ldquo;source&rdquo;
						</a>
					</Block>
					{/* Second Row */}
					<Block>
						<h2>Region & Economy</h2>
						<p>
							{
								"     Atlantic City's economy has historically been anchored in tourism and entertainment. The city has a population of approximately 38,574 as of 2024, with a density of 3,584.90 per square mile. \n     Known for being the first city to have a boardwalk and the first with paid, professional lifeguards, Atlantic City pioneered many aspects of the modern beach holiday. \n     The introduction of casinos in the late 20th century marked a significant shift, turning the city into a major center for gambling and leisure, further enhancing its economic profile."
							}
						</p>
						<a
							className="block-link"
							href={
								'https://worldpopulationreview.com/us-cities/atlantic-city-nj-population'
							}
							target={'_blank'}
							rel="noreferrer">
							&ldquo;source&rdquo;
						</a>
					</Block>
					<Block isImage>
						<Image src="src/assets/casino.jpg" alt="Description" />
					</Block>
					{/* Third Row */}
					<Block isImage>
						<Image src="src/assets/boardWalk.jpg" alt="Description" />
					</Block>
					<Block>
						<h2>Culture & Arts</h2>
						<p>
							{
								"     Atlantic City's cultural scene is as lively and diverse as its history. The city is renowned for its entertainment, with a plethora of casinos, live shows, and the legendary Atlantic City Boardwalk that offers an array of dining, shopping, and cultural experiences. \n     The Boardwalk Hall, a historic venue, hosts numerous high-profile concerts, sporting events, and other entertainments. Beyond these well-known attractions, the city also boasts various cultural festivals and events throughout the year, reflecting its rich and diverse cultural tapestry."
							}
						</p>
						<a
							className="block-link"
							href={'https://visitnj.org/nj/atlantic-city/events'}
							target={'_blank'}
							rel="noreferrer">
							&ldquo;source&rdquo;
						</a>
					</Block>
				</CityTemplate>
			</Container>
		</Layout>
	);
};
