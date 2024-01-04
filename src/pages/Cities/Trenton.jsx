import { BlockContainer } from '../../components/BlockContainer';
import { Button } from '../../components/Button';
import { ButtonContainer } from '../../components/ButtonContainer';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { SectionBlock } from '../../components/SectionBlock';
import { AsideBlock } from '../../components/AsideBlock';
import { ImageBlock } from '../../components/ImageBlock';

export const Trenton = () => {
	const navigate = useNavigate();
	return (
		<Layout title={'Trenton'}>
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
						"     Trenton, New Jersey's capital city, has a rich tapestry of history dating back to its founding in 1719. Initially part of Hunterdon County, it was later named after William Trent, one of its leading landholders. \n     The city, located in Mercer County, is predominantly urban and serves as a crucial hub in the central region of the state. \n     Trenton became New Jersey's capital in 1790 and was even briefly the national capital in 1784. This city, steeped in history, is a melting pot of cultures and epochs, making it a unique and vibrant community​."
					}
					source={'https://en.wikipedia.org/wiki/Princeton,_New_Jersey'}
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
				/>
			</BlockContainer>

			{/* Culture - History Section & Region Makeup Aside */}
			<BlockContainer>
				<SectionBlock
					title={'Culture & History'}
					text={
						"     As of 2024, Trenton's population is approximately 89,844, reflecting its status as a significant urban center in New Jersey. The city's economy is diverse, yet it faces the typical challenges of urban areas. \n     The median income levels in Trenton are generally lower compared to other parts of the state, indicative of the varied economic landscape that characterizes many state capitals. \n     This economic profile is an integral part of Trenton's identity, representing a wide spectrum of opportunities and challenges within the urban setting."
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
					<img src={'src/assets/patriots.jpeg'} />
				</ImageBlock>
				<SectionBlock
					title={'Notable Attraction'}
					text={
						"     As of 2024, Trenton's population is approximately 89,844, reflecting its status as a significant urban center in New Jersey. The city's economy is diverse, yet it faces the typical challenges of urban areas. \n     The median income levels in Trenton are generally lower compared to other parts of the state, indicative of the varied economic landscape that characterizes many state capitals. \n     This economic profile is an integral part of Trenton's identity, representing a wide spectrum of opportunities and challenges within the urban setting."
					}
				/>
			</BlockContainer>
			<Image src={'src/assets/stateHouse.jpeg'} alt={'Trenton State House'} />
		</Layout>
	);
};
