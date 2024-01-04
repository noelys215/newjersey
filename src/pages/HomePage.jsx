import { Image } from '../components/Image';
import { Layout } from '../components/Layout';
import { BlockContainer } from '../components/BlockContainer';
import { SectionBlock } from '../components/SectionBlock';
import { AsideBlock } from '../components/AsideBlock';
import { Button } from '../components/Button';
import { ButtonContainer } from '../components/ButtonContainer';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
	const navigate = useNavigate();

	const newsList = [
		'Primary Elections dates',
		'Mayor Jones resigns',
		'Dairy Mills recall',
		'Local cat saves firefighter',
		'New State University unveiling.',
	];

	const returnedNewsList = newsList.map((el) => <li key={el}>{el}</li>);

	const updatesList = [
		'State Fair',
		'Labor Day Air Show',
		'Springsteen @ The Hard Rock Cafe',
		'Princeton Art Show',
	];

	const returnedUpdatesList = updatesList.map((el) => <li key={el}>{el}</li>);

	return (
		<Layout title={'Liberty & Prosperity'}>
			<ButtonContainer title={'Explore Our Cities'}>
				<Button onClick={() => navigate('/trenton')}>Trenton</Button>
				<Button onClick={() => navigate('/princeton')}>Princeton</Button>
				<Button onClick={() => navigate('/atlantic-city')}>Atlantic City</Button>
			</ButtonContainer>

			<ButtonContainer title={'State History | Attractions | Resources'}>
				<Button onClick={() => navigate('/state-history')}>State History</Button>
				<Button>Attractions</Button>
				<Button>Resource Link</Button>
			</ButtonContainer>
			{/* State Into & News Updates */}
			<BlockContainer>
				<SectionBlock
					title={'State Introduction'}
					text={
						"     Welcome to the lush New Jerseys’ home site, your gateway to exploring the Garden State's hidden wonders and bustling cities! Whether you're planning a visit, seeking adventure, or just curious about what New Jersey has to offer, you've come to the right place. Browse through our site to discover each city's unique charm, from the historic streets of Princeton to the lively boardwalks of Atlantic City. And if you have any questions or need further information, don't hesitate to reach out using our user-friendly contact form."
					}
				/>
				<AsideBlock title={'News & Updates'} text={returnedNewsList} />
			</BlockContainer>
			{/* State Highlights & Upcoming Events */}
			<BlockContainer>
				<SectionBlock
					title={'State Highlights'}
					text={
						"Explore New Jersey's highlights, where the charm of quaint small towns meets the energy of bustling cities. Delve into our world-class museums, indulge in our famous diners, and unwind on our picturesque beaches. New Jersey, a state rich in historical landmarks and natural beauty, promises an unforgettable journey through its unique heritage and landscapes."
					}
				/>
				<AsideBlock title={'Upcoming Events'} text={returnedUpdatesList} />
			</BlockContainer>

			<Image src={'src/assets/jerseyShore.jpg'} alt={'Jersey Shore Image'} />
		</Layout>
	);
};
