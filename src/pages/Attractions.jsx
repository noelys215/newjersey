import { BlockContainer } from '../components/BlockContainer';
import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { SectionBlock } from '../components/SectionBlock';
import { ImageBlock } from '../components/ImageBlock';

export const Attractions = () => {
	return (
		<Layout title={'State Attractions'}>
			<Image src={'src/assets/capeMay.webp'} alt={'Cape May Trolley'} />
			{/* City Intro Section & Economy/Pop Aside */}

			{/* Notable Attraction */}
			<BlockContainer>
				<ImageBlock>
					<img src={'src/assets/stateBeach.jpeg'} alt="Island Beach State Park" />
				</ImageBlock>
				<SectionBlock
					title={'Island Beach State Park'}
					text={
						"     Located in Berkeley Township, this park is one of the country's largest undeveloped barrier islands. It's known for its diverse landscape, including beaches, dunes, and tidal marshes, and is home to a wide range of wildlife, especially bird species. Activities include kayaking, surfing, swimming, and birdwatching. A highlight is the Barnegat Lighthouse, offering stunning views"
					}
					source={'https://www.planetware.com/tourist-attractions/new-jersey-usnj.htm'}
				/>
			</BlockContainer>

			<BlockContainer>
				<SectionBlock
					title={'Six Flags Great Adventure and Wild Safari'}
					text={
						"     In Jackson, NJ, this theme park is a must-visit for thrill-seekers. It boasts over 100 rides and attractions, including roller coasters like El Toro and Nitro. The Wild Safari section offers an off-road tour through a 350-acre wildlife preserve, home to numerous animal species. It's an ideal destination for families and adventure enthusiasts."
					}
					source={
						'https://www.planetware.com/new-jersey/best-things-to-do-us-nj-52.htm#h_8'
					}
				/>
				<ImageBlock>
					<img src={'src/assets/sixFlags.avif'} alt="Six Flags Great Adventure" />
				</ImageBlock>
			</BlockContainer>

			<BlockContainer>
				<ImageBlock>
					<img src={'src/assets/adventure.jpeg'} alt="Adventure Aquarium" />
				</ImageBlock>
				<SectionBlock
					title={'Adventure Aquarium'}
					text={
						"     Situated in Camden, this aquarium is ranked among the top in the U.S. It houses over 15,000 aquatic animals, including unique species like Nile hippos. The 40-foot shark tunnel and the world's longest V-shaped rope suspension bridge, Shark Bridge, are major attractions. The aquarium also features interactive exhibits, touch tanks, and a variety of marine life."
					}
					source={
						'https://www.planetware.com/new-jersey/best-things-to-do-us-nj-52.htm#h_6'
					}
				/>
			</BlockContainer>

			<BlockContainer>
				<SectionBlock
					title={'Thomas Edison National Historical Park'}
					text={
						"    Located in West Orange, this historical park is dedicated to one of America's greatest inventors, Thomas Edison. The park includes Edison's former home and laboratory, where he developed significant technologies like movie cameras and sound recordings. Visitors can tour the labs, view vintage movies, and see original artifacts. It's an insightful destination for those interested in history and science."
					}
					source={'https://www.attractionsofamerica.com/attractions/newjersey.php#324'}
				/>
				<ImageBlock>
					<img
						src={'src/assets/edisonPark.jpeg'}
						alt="Thomas Edison National Historical Park"
					/>
				</ImageBlock>
			</BlockContainer>

			<BlockContainer>
				<SectionBlock
					title={'Big Rusty'}
					text={
						"    Big Rusty, a large and imaginative sculpture in Hainesport, New Jersey, was created by Danish artist Thomas Dambo. It's a significant piece of art constructed entirely from recycled materials found at an abandoned factory site. This artwork stands out for its unique design, being assembled from various items like wooden beams, metal, and electrical conduit. Big Rusty is part of Dambo's larger project that emphasizes recycling and environmental sustainability. \n     The future of Big Rusty is uncertain due to the potential demolition of the building it is connected to, yet it has garnered interest and appreciation from the local community and beyond."
					}
					source={'https://weirdnj.com/stories/abandoned/big-rusty-giant-troll/'}
				/>
			</BlockContainer>

			<Image src={'src/assets/rusty.jpeg'} alt={'Big Rusty'} />
		</Layout>
	);
};
