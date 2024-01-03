import { Block, CityTemplate } from '../../components/CityTemplate';
import { Container } from '../../components/Container';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { SubNav } from '../../components/SubNav';

export const Princeton = () => {
	return (
		<Layout title={'Princeton'}>
			<SubNav />
			<Container>
				<CityTemplate>
					{/* First Row */}
					<Block isImage>
						<Image src="src/assets/princetonBuilding.jpg" alt="Flag of Trenton" />
					</Block>
					<Block>
						<h2>Community Glimpse</h2>
						<p>
							{
								"     Princeton, New Jersey, with its unique blend of historical charm and modern suburban flair, was established on January 1, 2013, from the merging of the Borough of Princeton and Princeton Township. But its roots run much deeper, dating back to before the American Revolutionary War. \n     The name 'Princeton' itself emerged in 1724, possibly as a nod to Prince William of Orange or a local landowner named Henry Prince. \n     Located in Mercer County, Princeton sits equidistantly between New York City and Philadelphia, offering a suburban environment enriched with urban characteristics. It's a community where history is nestled amidst leafy suburban streets and vibrant academic life."
							}
						</p>
						<a
							className="block-link"
							href={'https://en.wikipedia.org/wiki/Princeton,_New_Jersey'}
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
								"     As of 2024, Princeton is home to around 30,681 residents, reflecting its status as a notable yet intimate community. The city stands out in New Jersey for its higher average income levels. \n     With average earnings of about $88,699, and a notable difference in earnings between genders (men earning around $120,677 and women about $65,244), Princeton's economy mirrors its status as an affluent, education-oriented community. \n     This economic profile is significantly higher compared to many other parts of New Jersey, underscoring the city's blend of academic influence and suburban affluence."
							}
						</p>
						<a
							className="block-link"
							href={
								'https://worldpopulationreview.com/us-cities/princeton-nj-population'
							}
							target={'_blank'}
							rel="noreferrer">
							&ldquo;source&rdquo;
						</a>
					</Block>
					<Block isImage>
						<Image src="src/assets/downtownPrinceton1.jpg" alt="Description" />
					</Block>
					{/* Third Row */}
					<Block isImage>
						<Image src="src/assets/princetonUni.jpg" alt="Description" />
					</Block>
					<Block>
						<h2>Culture & Arts</h2>
						<p>
							{
								"     Princeton's identity is deeply intertwined with its arts and cultural scene, largely influenced by the presence of Princeton University. This prestigious institution not only shapes the town's academic landscape but also infuses it with cultural vibrancy through various public events, exhibitions, and lectures. \n     Beyond the university, Princeton offers a wealth of cultural experiences, including museums, theaters, and historical landmarks. These venues and events celebrate the town's rich history and dedication to the arts, making Princeton a magnet for those seeking a blend of historical exploration and contemporary cultural engagement."
							}
						</p>
						<a
							className="block-link"
							href={'https://en.wikipedia.org/wiki/Princeton,_New_Jersey'}
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
