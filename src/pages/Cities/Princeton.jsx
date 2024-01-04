import { BlockContainer } from '../../components/BlockContainer';
import { Button } from '../../components/Button';
import { ButtonContainer } from '../../components/ButtonContainer';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { SectionBlock } from '../../components/SectionBlock';
import { AsideBlock } from '../../components/AsideBlock';
import { ImageBlock } from '../../components/ImageBlock';

export const Princeton = () => {
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
						"     Princeton, New Jersey, with its unique blend of historical charm and modern suburban flair, was established on January 1, 2013, from the merging of the Borough of Princeton and Princeton Township. But its roots run much deeper, dating back to before the American Revolutionary War. \n     The name 'Princeton' itself emerged in 1724, possibly as a nod to Prince William of Orange or a local landowner named Henry Prince. \n     Located in Mercer County, Princeton sits equidistantly between New York City and Philadelphia, offering a suburban environment enriched with urban characteristics. It's a community where history is nestled amidst leafy suburban streets and vibrant academic life."
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
					source={'https://worldpopulationreview.com/us-cities/princeton-nj-population'}
				/>
			</BlockContainer>

			{/* Culture - History Section & Region Makeup Aside */}
			<BlockContainer>
				<SectionBlock
					title={'Culture & History'}
					text={
						"     As of 2024, Princeton is home to around 30,681 residents, reflecting its status as a notable yet intimate community. The city stands out in New Jersey for its higher average income levels. \n     With average earnings of about $88,699, and a notable difference in earnings between genders (men earning around $120,677 and women about $65,244), Princeton's economy mirrors its status as an affluent, education-oriented community. \n     This economic profile is significantly higher compared to many other parts of New Jersey, underscoring the city's blend of academic influence and suburban affluence."
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
					<img src={'src/assets/princetonBuilding.jpg'} />
				</ImageBlock>
				<SectionBlock
					title={'Notable Attraction'}
					text={
						"     Princeton's identity is deeply intertwined with its arts and cultural scene, largely influenced by the presence of Princeton University. This prestigious institution not only shapes the town's academic landscape but also infuses it with cultural vibrancy through various public events, exhibitions, and lectures. \n     Beyond the university, Princeton offers a wealth of cultural experiences, including museums, theaters, and historical landmarks. These venues and events celebrate the town's rich history and dedication to the arts, making Princeton a magnet for those seeking a blend of historical exploration and contemporary cultural engagement."
					}
				/>
			</BlockContainer>
			<Image src={'src/assets/princetonUni.jpg'} alt={'Princeton University'} />
		</Layout>
	);
};
