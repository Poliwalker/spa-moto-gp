import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Home from '../Pages/Home/Home';
import NextRaces from '../Pages/NextRaces/NextRaces';
import PilotsPage from '../Pages/Pilotos/PilotsPage';
import Pilot from '../Pages/Pilot/Pilot';

const Routers = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pilots" element={<PilotsPage />} />
					<Route path="/next-races" element={<NextRaces />} />
					<Route path="pilot/:id" element={<Pilot />} />
					<Route path="*" element="Error" />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Routers;
