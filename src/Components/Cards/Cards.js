import React from 'react';
import PilotPhotos from '../Pilots/PilotPhotos';
import {
	CardNumber,
	CardsContainer,
	CardsContext,
	CardText,
	CardTitle,
	LinkStyles,
} from './CardsStyles';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom';
import CardFooter from '../CardFooter/Footer';

const Cards = (props) => {
	const { pathname } = useLocation();
	console.log(pathname);

	const { nombre, pais, equipo, numero, apodo, img, id, description } = props;

	return (
		<CardsContainer>
			<PilotPhotos img={img} alt={nombre} />

			{pathname.match(/pilots/i) ? (
				<LinkStyles to={`/pilot/${id}`}>
					<CardTitle>{nombre}</CardTitle>
				</LinkStyles>
			) : (
				<CardTitle>{nombre}</CardTitle>
			)}

			<CardsContext>
				<CardText>Apodo:{apodo}</CardText>
				<CardText>País:{pais}</CardText>
				<CardNumber>Numero:{numero}</CardNumber>
			</CardsContext>
			<Button equipo={equipo} />
			{!pathname.match(/pilots/i) && <CardFooter description={description} />}
		</CardsContainer>
	);
};

export default Cards;
