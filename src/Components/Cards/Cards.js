import React from 'react';
import PilotPhotos from '../Pilots/PilotPhotos';
import { CardNumber, CardsContainer, CardText, CardTitle } from './CardsStyles';
import Button from '../Button/Button';

const Cards = (props) => {
	const { nombre, pais, equipo, numero, apodo, img } = props;

	return (
		<CardsContainer>
			<PilotPhotos img={img} alt={nombre} />
			<Cards>
				<CardTitle>Nombre:{nombre}</CardTitle>
				<CardText>Apodo:{apodo}</CardText>
				<CardText>País:{pais}</CardText>
				<CardNumber>Numero:{numero}</CardNumber>
			</Cards>
			<Button equipo={equipo} />
		</CardsContainer>
	);
};

export default Cards;
