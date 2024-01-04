import { Atlantic_City } from './pages/Cities/Atlantic_City';
import { Princeton } from './pages/Cities/Princeton';
import { Trenton } from './pages/Cities/Trenton';
import { FormPage } from './pages/FormPage';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { StateHistory } from './pages/StateHistory';
import { Attractions } from './pages/Attractions';

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/trenton" element={<Trenton />} />
			<Route path="/contact" element={<FormPage />} />
			<Route path="/princeton" element={<Princeton />} />
			<Route path="/attractions" element={<Attractions />} />
			<Route path="/state-history" element={<StateHistory />} />
			<Route path="/atlantic-city" element={<Atlantic_City />} />
		</Routes>
	);
}

export default App;
