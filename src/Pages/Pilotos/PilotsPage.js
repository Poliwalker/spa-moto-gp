import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import {
	PilotsContainerStyled,
	PilotsErrorMessageStyled,
} from './PilotsPageStyle';
import Cards from '../../Components/Cards/Cards';
import Loader from '../../Components/Loader/Loader';

const fetchPilots = () => {
	return axios.get('http://localhost:3001/Pilotos');
};

const PilotsPage = () => {
	const { isLoading, data, isError, error } = useQuery('pilots', fetchPilots, {
		staleTime: 3000,
		cacheTime: 3000,
	});
	return (
		<>
			{isLoading && <Loader />}
			{isError && (
				<PilotsErrorMessageStyled>{error.message}</PilotsErrorMessageStyled>
			)}

			{data && (
				<PilotsContainerStyled>
					{data.data.map((pilot) => (
						<Cards key={pilot.id} {...pilot} />
					))}
				</PilotsContainerStyled>
			)}
		</>
	);
};

export default PilotsPage;
