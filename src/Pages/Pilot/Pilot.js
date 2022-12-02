import React from 'react';
import { useParams } from 'react-router-dom';
import { usePilotData } from '../../Hooks/UsePilotData';

import Loader from '../../Components/Loader/Loader';
import Cards from '../../Components/Cards/Cards';

import { PilotsContainerStyled, PilotsErrorMessageStyled } from './PilotStyle';

const Pilot = () => {
	const { id } = useParams();

	const { data, isLoading, error, isError } = usePilotData(id);

	return (
		<>
			{isLoading && <Loader />}
			{isError && (
				<PilotsErrorMessageStyled>{error.message}</PilotsErrorMessageStyled>
			)}

			{data && (
				<PilotsContainerStyled>
					<Cards {...data.data} />
				</PilotsContainerStyled>
			)}
		</>
	);
};

export default Pilot;
