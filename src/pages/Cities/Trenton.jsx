import { BlockContainer } from '../../components/BlockContainer';
import { Button } from '../../components/Button';
import { ButtonContainer } from '../../components/ButtonContainer';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { SectionBlock } from '../../components/SectionBlock';
import { ImageBlock } from '../../components/ImageBlock';
import { AsideTableBlock, EconomyAsideTableBlock } from '../../components/AsideTableBlock';

export const Trenton = () => {
	const navigate = useNavigate();
	const regionData = [
		{ county: 'Mercer', zipCode: '08608', regionType: 'City', landArea: '7.58 mi²' },
	];
	const economyData = [{ population: '89,844', year: '1972', income: '$66,002' }];
	return (
		<Layout title={'Trenton'}>
			<ButtonContainer>
				<Button onClick={() => navigate('/trenton')}>Trenton</Button>
				<Button onClick={() => navigate('/princeton')}>Princeton</Button>
				<Button onClick={() => navigate('/atlantic-city')}>Atlantic City</Button>
			</ButtonContainer>
			{/* City Intro Section & Demo Aside */}
			<BlockContainer>
				<SectionBlock
					title={'City Introduction'}
					text={
						"     Trenton, the capital city of New Jersey, is an industrial hub rich in history. Located at the head of navigation on the Delaware River, Trenton lies strategically between Philadelphia and New York City. Founded in 1679 by Quakers, it was later named after Philadelphia merchant William Trent in 1719. The city has played a crucial role in American history, notably during the Revolutionary War when General George Washington's army famously crossed the Delaware River. Trenton became New Jersey's capital in 1790, flourishing as an industrial center and transportation hub."
					}
					source={'https://www.britannica.com/place/Trenton-New-Jersey'}
				/>

				<EconomyAsideTableBlock
					data={economyData}
					source={'https://worldpopulationreview.com/us-cities/trenton-nj-population'}
				/>
			</BlockContainer>

			{/* Culture - History Section & Region Makeup Aside */}
			<BlockContainer>
				<SectionBlock
					title={'Culture & History'}
					text={`     Trenton's history is deeply intertwined with America's industrial and revolutionary past. The city's strategic location on the Delaware River contributed to its significant role in the industrialization of the Greater Philadelphia region. Trenton's slogan, 'Trenton Makes, the World Takes,' coined in 1917, reflects its industrial prowess. The city was a manufacturing powerhouse, producing textiles, steel, rubber, and pottery. Trenton's diverse population grew alongside its industries, with a rich mix of immigrants contributing to its cultural fabric. The city has also been central to key historical events, including pivotal battles during the American Revolution.`}
					source={'https://en.wikipedia.org/wiki/Trenton,_New_Jersey'}
				/>
				<AsideTableBlock
					data={regionData}
					source={'https://worldpopulationreview.com/us-cities/trenton-nj-population'}
				/>
			</BlockContainer>

			{/* Notable Attraction */}
			<BlockContainer>
				<ImageBlock>
					<img src={'src/assets/stateHouse.jpeg'} alt="Trenton State House" />
				</ImageBlock>
				<SectionBlock
					title={'Notable Attraction'}
					text={
						"     The New Jersey State House in Trenton is a notable attraction. As the seat of the state's government, this historic building symbolizes Trenton's political significance. Constructed in 1792, it has undergone several renovations and expansions, reflecting various architectural styles. The State House is not only a center of political activity but also a repository of the state's history, offering guided tours that delve into New Jersey's legislative process and its rich past. This landmark is a testament to Trenton's enduring role in both state and national history."
					}
					source={
						"https://www.journeythroughjersey.com/sites/new-jersey-state-house/#:~:text=Visitors%20can%20explore%20the%20building's,role%20in%20shaping%20public%20policy."
					}
				/>
			</BlockContainer>
			<Image src={'src/assets/trentonMakes.jpeg'} alt={'Trenton Makes Bridge'} />
		</Layout>
	);
};
