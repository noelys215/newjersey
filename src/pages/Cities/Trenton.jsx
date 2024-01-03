import { Block, CityTemplate } from '../../components/CityTemplate';
import { Container } from '../../components/Container';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { SubNav } from '../../components/SubNav';

export const Trenton = () => {
	return (
		<Layout title={'Trenton'}>
			<SubNav />
			<Container>
				<CityTemplate>
					{/* First Row */}
					<Block isImage>
						<Image src="src/assets/trenton_flag.png" alt="Flag of Trenton" />
					</Block>
					<Block>
						<p>
							<h2>Community Glimpse</h2>
							{
								"     Trenton, New Jersey's capital city, has a rich tapestry of history dating back to its founding in 1719. Initially part of Hunterdon County, it was later named after William Trent, one of its leading landholders. \n     The city, located in Mercer County, is predominantly urban and serves as a crucial hub in the central region of the state. \n     Trenton became New Jersey's capital in 1790 and was even briefly the national capital in 1784. This city, steeped in history, is a melting pot of cultures and epochs, making it a unique and vibrant community​."
							}
						</p>
						<a
							href={'https://en.wikipedia.org/wiki/Trenton,_New_Jersey'}
							target={'_blank'}
							rel="noreferrer">
							&ldquo;source&rdquo;
						</a>
					</Block>
					{/* Second Row */}
					<Block>
						<p>
							<h2>Region & Economy</h2>
							{
								"     As of 2024, Trenton's population is approximately 89,844, reflecting its status as a significant urban center in New Jersey. The city's economy is diverse, yet it faces the typical challenges of urban areas. \n     The median income levels in Trenton are generally lower compared to other parts of the state, indicative of the varied economic landscape that characterizes many state capitals. \n     This economic profile is an integral part of Trenton's identity, representing a wide spectrum of opportunities and challenges within the urban setting."
							}
						</p>
						<a
							href={
								'https://worldpopulationreview.com/us-cities/trenton-nj-population'
							}
							target={'_blank'}
							rel="noreferrer">
							&ldquo;source&rdquo;
						</a>
					</Block>
					<Block isImage>
						<Image src="src/assets/stateHouse.jpeg" alt="Description" />
					</Block>
					{/* Third Row */}
					<Block isImage>
						<Image src="src/assets/patriots.jpeg" alt="Description" />
					</Block>
					<Block>
						<p>
							<h2>Arts</h2>
							{
								"     Trenton isn't just about politics and history; it's also a canvas for cultural expression. The city takes pride in its arts scene, highlighted by the iconic Patriots Theater at the War Memorial. \n     Picture an auditorium where legends like Louis Armstrong and Leonard Bernstein performed. \n     Then there's the Cure Insurance Arena, buzzing with everything from international music concerts to local sporting events. \n     Trenton’s cultural landscape extends beyond these venues, offering an array of festivals, art galleries, and community events. It’s a place where every street and building has a tale to tell, where history and modern creativity intertwine seamlessly"
							}
						</p>
						<a
							href={'https://visitnj.org/nj/trenton/history/historic-sites-memorials'}
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
