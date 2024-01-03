import { Button } from '../components/Button';
import { Layout } from '../components/Layout';

export const Form = () => {
	return (
		<form className="form">
			<h2>Use the text box below to send us a message!</h2>
			<input type="text" placeholder="First Name" />
			<input type="text" placeholder="Last Name" />
			<input type="email" placeholder="Email" />
			<textarea placeholder="Your Message"></textarea>
			<Button>Submit</Button>
		</form>
	);
};

export const FormPage = () => {
	return (
		<Layout title={'Contact Form'}>
			<div className="form-page">
				<Form />
			</div>
		</Layout>
	);
};
