import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPilots = () => {
	return axios.get('http://localhost:3001/pilotos');
};

export const usePilotsData = () => {
	return useQuery('pilots', fetchPilots, {
		scaleTime: 3000,
		cacheTime: 30000,
	});
};
