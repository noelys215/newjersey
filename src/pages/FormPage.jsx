import { useState } from 'react';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';

export const Form = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		confirmEmail: '',
		question: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.email !== formData.confirmEmail) {
			alert('Email addresses do not match.');
			return;
		}
		alert('Message Sent Successfully!');
		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			confirmEmail: '',
			question: '',
		});
	};

	return (
		<div className="form-container">
			<h2>Send us a Message!</h2>
			<form id="contactForm" onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						placeholder="First Name"
						value={formData.firstName}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						placeholder="Last Name"
						value={formData.lastName}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email Address:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="confirmEmail">Confirm Email Address:</label>
					<input
						type="email"
						id="confirmEmail"
						name="confirmEmail"
						placeholder="Confirm Email"
						value={formData.confirmEmail}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="question">Your Question:</label>
					<textarea
						id="question"
						name="question"
						placeholder="Type your message here..."
						value={formData.question}
						onChange={handleChange}
						required></textarea>
				</div>

				<Button type="submit">Submit</Button>
			</form>
		</div>
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
