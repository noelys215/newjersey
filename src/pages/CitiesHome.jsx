import { Body } from '../components/Body';
import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { SubNav } from '../components/SubNav';

export const CitiesHome = () => {
	return (
		<Layout title={'Cities & Attractions'}>
			<SubNav />

			<Body>
				{
					'     Dive into the diverse wonders of New Jersey, one city at a time! Click on any attraction to unveil a new destination, brimming with its own unique character. From the scenic coastline of the Delaware Water Gap to the cultural richness of Princeton, every location holds a treasure trove of experiences waiting to be discovered.'
				}
				<aside>
					So, go ahead, click and start your exploration of <br />
					New Jersey&apos;s cities - each click is a step into a new adventure!
				</aside>
			</Body>

			<Image src={'src/assets/princetonWilderness.jpg'} alt={'Princeton Woods Image'} />
		</Layout>
	);
};
