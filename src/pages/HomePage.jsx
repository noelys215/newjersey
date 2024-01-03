import { Link } from 'react-router-dom';
import { Body } from '../components/Body';
import { Button } from '../components/Button';
import { Image } from '../components/Image';
import { Layout } from '../components/Layout';

export const HomePage = () => {
	return (
		<Layout title={'Liberty & Prosperity'}>
			<div className="button-container">
				<Link to={'/cities'}>
					<Button> {'Visit Our Cities'}</Button>
				</Link>
			</div>

			<Image src={'src/assets/jerseyShore.jpg'} alt={'Jersey Shore Image'} />
			<Body>
				<aside>
					Barneget Lighthouse is located on the northern tip of Long Beach Island in Ocean
					County, New Jersey, United States.
				</aside>
			</Body>
			<Body>
				{
					"     Welcome to the lush New Jerseys’ home site, your gateway to exploring the Garden State's hidden wonders and bustling cities! Whether you're planning a visit, seeking adventure, or just curious about what New Jersey has to offer, you've come to the right place. Browse through our site to discover each city's unique charm, from the historic streets of Princeton to the lively boardwalks of Atlantic City. And if you have any questions or need further information, don't hesitate to reach out using our user-friendly contact form."
				}
				<br />
				<br />
				{'Start your journey through New Jersey with us today!'}
			</Body>
		</Layout>
	);
};
