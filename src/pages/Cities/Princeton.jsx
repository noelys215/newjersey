import { BlockContainer } from '../../components/BlockContainer';
import { Button } from '../../components/Button';
import { ButtonContainer } from '../../components/ButtonContainer';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { SectionBlock } from '../../components/SectionBlock';
import { ImageBlock } from '../../components/ImageBlock';
import { AsideTableBlock, EconomyAsideTableBlock } from '../../components/AsideTableBlock';

export const Princeton = () => {
	const regionData = [
		{ county: 'Mercer', zipCode: '08544', regionType: 'Town', landArea: '17.9 mi²' },
	];
	const economyData = [{ population: '30,586', year: '1813', income: '$257,390' }];

	const navigate = useNavigate();
	return (
		<Layout title={'Princeton'}>
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
						"     Princeton, New Jersey, is a renowned municipality in Mercer County, known for its rich educational and cultural heritage. Established on January 1, 2013, through the consolidation of the Borough of Princeton and Princeton Township, the city has a deep historical significance and a strong academic presence. Princeton's development has been closely tied to its position between New York City and Philadelphia, making it a vital cultural and intellectual hub in the region. The city's population, as of the 2020 census, stands at around 30,681, reflecting its status as a vibrant community with a mix of suburban and academic lifestyles."
					}
					source={'https://en.wikipedia.org/wiki/Princeton,_New_Jersey'}
				/>

				<EconomyAsideTableBlock
					data={economyData}
					source={'https://worldpopulationreview.com/us-cities/princeton-nj-population'}
				/>
			</BlockContainer>

			{/* Culture - History Section & Region Makeup Aside */}
			<BlockContainer>
				<SectionBlock
					title={'Culture & History'}
					text={
						"     Princeton's history is steeped in academic and revolutionary significance. The area, initially settled by Quakers in 1696, was originally known as Stony Brook. It was later renamed to honor William III of England. The city's cultural landscape was profoundly shaped by the relocation of the College of New Jersey, now Princeton University, in 1756 from Newark. The presence of this prestigious Ivy League institution, along with other educational entities like the Institute for Advanced Study, has fostered a vibrant intellectual environment. Princeton's historical relevance is also marked by events like the Battle of Princeton during the American Revolution, which saw a crucial victory by General George Washington's troops."
					}
					source={'https://www.britannica.com/place/Princeton-New-Jersey'}
				/>
				<AsideTableBlock
					data={regionData}
					source={'https://worldpopulationreview.com/us-cities/trenton-nj-population'}
				/>
			</BlockContainer>

			{/* Notable Attraction */}
			<BlockContainer>
				<ImageBlock>
					<img
						src={'src/assets/princetonBuilding.jpg'}
						alt="Princeton University Building"
					/>
				</ImageBlock>
				<SectionBlock
					title={'Notable Attraction'}
					text={
						"     One of Princeton's most notable attractions is Princeton University, a world-renowned Ivy League institution. Established in 1746, it is the fourth oldest institution of higher education in the United States. The university's campus is a blend of historic and modern architecture, with notable buildings like Nassau Hall, which briefly served as the U.S. Capitol in 1783. The campus also houses the prestigious Institute for Advanced Study, where Albert Einstein spent his final years. The university not only contributes significantly to the city's academic atmosphere but also adds to its architectural beauty and historical richness."
					}
					source={'https://en.wikipedia.org/wiki/Princeton,_New_Jersey'}
				/>
			</BlockContainer>
			<Image src={'src/assets/princetonUni.jpg'} alt={'Princeton University Building'} />
		</Layout>
	);
};
