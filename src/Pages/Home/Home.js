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
					Repaso de lo mejor del MOTO GP Mundial!
				</HomeDescriptionStyled>
				<HomeButtonStyled>Ver Más</HomeButtonStyled>
			</HomeContentStyled>

			<HomeImageContainer>
				<img
					src="https://www.wooco.de/wp-content/uploads/2022/03/motogp_22_trophaeen_leitfaden.jpg"
					alt="moto-gp"
					style={{ width: '800px' }}
				/>
			</HomeImageContainer>
		</HomeContainerStyled>
	);
};

export default Home;
