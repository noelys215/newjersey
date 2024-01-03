import { Atlantic_City } from './pages/Cities/Atlantic_City';
import { Jersey_City } from './pages/Cities/Jersey_City';
import { Princeton } from './pages/Cities/Princeton';
import { Trenton } from './pages/Cities/Trenton';
import { CitiesHome } from './pages/CitiesHome';
import { FormPage } from './pages/FormPage';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/cities" element={<CitiesHome />} />
			<Route path="/trenton" element={<Trenton />} />
			<Route path="/princeton" element={<Princeton />} />
			<Route path="/atlantic-city" element={<Atlantic_City />} />
			<Route path="/jersey-city" element={<Jersey_City />} />
			<Route path="/contact" element={<FormPage />} />
		</Routes>
	);
}

export default App;
