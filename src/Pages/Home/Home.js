import React from 'react';
import {
	HomeButtonStyled,
	HomeContainerStyled,
	HomeContentStyled,
	HomeDescriptionStyled,
	HomeImageContainer,
	HomeTitleStyled,
} from './HomeStyle';

const Home = () => {
	return (
		<HomeContainerStyled>
			<HomeContentStyled>
				<HomeTitleStyled>La magia de los motores</HomeTitleStyled>
				<HomeDescriptionStyled>
					Nos sumergimos con los heroes de la velocidad
				</HomeDescriptionStyled>
				<HomeButtonStyled>Ver Más</HomeButtonStyled>
			</HomeContentStyled>

			<HomeImageContainer>
				<img
					src="https://www.wooco.de/wp-content/uploads/2022/03/motogp_22_trophaeen_leitfaden.jpg"
					alt="moto-gp"
				/>
			</HomeImageContainer>
		</HomeContainerStyled>
	);
};

export default Home;
