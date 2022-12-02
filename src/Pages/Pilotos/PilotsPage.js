import React from 'react';
import {
	// PilotDisabledMessage,
	PilotsContainerStyled,
	PilotsErrorMessageStyled,
} from './PilotsPageStyle';
import Cards from '../../Components/Cards/Cards';
import Loader from '../../Components/Loader/Loader';

import { usePilotsData } from '../../Hooks/UsePilotsData';

const PilotsPage = () => {
	// const { isLoading, data, isError, error } = useQuery(
	// 	'pilots',
	// 	fetchPilots,
	// 	{
	// 		// cacheTime: 5000,
	// 		// enabled: false,
	// 		// onSuccess: (data) => console.log('peticion exitosa'),
	// 		// onError: (error) => console.log('peticion fallida'),
	// 		// retry: 1,
	// 		// retryDelay: 3000,
	// 		select: (data) => {
	// 			const newPilots = data.data.map((pilot) => ({
	// 				...pilot,
	// 				apodo: 'tuki',
	// 			}));
	// 			return { ...data, data: newPilots };
	// 		},
	// 	}
	// );

	const { isLoading, data, isError, error } = usePilotsData();

	console.log(data);
	return (
		<>
			{isLoading && <Loader />}
			{isError && (
				<PilotsErrorMessageStyled>{error.message}</PilotsErrorMessageStyled>
			)}

			{/* {isIdle && (
				<Box>
					<PilotDisabledMessage>Consulta desabilitada</PilotDisabledMessage>
					<Button
						sx={{ background:' #ffffff '}}
						variant="contained"
						onClick={refetch}
					>
						Activar
					</Button>
				</Box>
			)} */}

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
