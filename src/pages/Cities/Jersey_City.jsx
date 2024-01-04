import { Block, CityTemplate } from '../../components/CityTemplate';
import { Container } from '../../components/Container';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { SubNav } from '../../components/SubNav';

export const Jersey_City = () => {
	return (
		<Layout title={'Jersey City'}>
			<SubNav />
			<Container>
				<CityTemplate>
					{/* First Row */}
					<Block isImage>
						<Image src="src/assets/jersey-cityRiver.jpg" alt="Flag of Trenton" />
					</Block>
					<Block>
						<h2>Community Glimpse</h2>
						<p>
							{
								"     Jersey City, New Jersey, is a testament to America's rich history and cultural diversity. Originally inhabited by the Lenape tribes, it was explored by Henry Hudson in 1609, marking the beginning of its storied history. Dutch settlers established the area, then known as Paulus Hook, in the early 17th century. In 1820, the settlement was renamed Jersey City, and it has since flourished into the second-most populous city in New Jersey and the largest by area in Hudson County. \n     The city was officially incorporated on January 28, 1820, and its present boundaries were established by 1870. Today, it's part of the vibrant New York metropolitan area, boasting a diverse and dynamic urban landscape."
							}
						</p>
						<a
							className="block-link"
							href={
								'https://everythingjerseycity.com/our-jc/the-history-of-jersey-city/'
							}
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
								"     Jersey City's economy has transformed remarkably over the years. Once a crucial railroad terminus and manufacturing hub, it has evolved into a major center for banking and finance, earning the nickname 'Wall Street West.' The city has undergone significant redevelopment, especially on its waterfront, leading to a surge in commercial and residential growth.\n     As of the 2024 census, Jersey City has a population of 261,218, which decreased slightly by 30,709 since 2020. The city's median household income stands at $81,390, reflecting its economic vitality. Major industries include finance, professional and business services, educational and health services, and leisure and hospitality. Jersey City's skilled labor force and strategic location continue to attract diverse businesses and industries, contributing to its robust economy."
							}
						</p>
						<a
							className="block-link"
							href={
								'https://worldpopulationreview.com/us-cities/jersey-city-nj-population'
							}
							target={'_blank'}
							rel="noreferrer">
							&ldquo;source&rdquo;
						</a>
					</Block>
					<Block isImage>
						<Image src="src/assets/jerseyCityCars.jpg" alt="Description" />
					</Block>
					{/* Third Row */}
					<Block isImage>
						<Image src="src/assets/jerseyCityClock.jpg" alt="Description" />
					</Block>
					<Block>
						<h2>Culture & Arts</h2>
						<p>
							{
								"     Jersey City's cultural scene is as diverse as its population. The city is home to numerous artists and creative professionals, particularly in the Warehouse Historic District, also known as WALDO (Work And Live District Overlay). This area, formerly filled with empty warehouses, now thrives as a vibrant community for visual artists, dancers, musicians, and writers.\n      Significant cultural attractions in Jersey City include the Empty Sky Memorial, which honors New Jersey's victims of the September 11 attacks, and the Liberty Science Center, known for its interactive exhibits and the unique touch tunnel. \n     The city also celebrates its diverse heritage through various cultural events, including Black History Month and Hispanic Heritage celebrations, reflecting its rich cultural tapestry."
							}
						</p>
						<a
							className="block-link"
							href={'https://visitnj.org/nj/jersey-city/attractions'}
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
