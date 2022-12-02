import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const fetchPilots = ({ queryKey }) => {
	const pilotId = queryKey[1];
	return axios.get(`http://localhost:3001/${pilotId}`);
};

export const usePilotData = (pilotId) => {
	const queryClient = useQueryClient();

	return useQuery(['pilots', pilotId], fetchPilots, {
		initialData: () => {
			const pilot = queryClient
				.getQueryData('pilots')
				?.data?.find((pilot) => pilot.id === parseInt(pilotId));

			if (pilot) {
				return { data: pilot };
			} else {
				return undefined;
			}
		},
	});
};
