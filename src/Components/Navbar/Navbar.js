import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	LinkContainerStyled,
	LogoStyle,
	NavContainerStyle,
	TitleStyled,
} from './NavbarStyle';
import LinkItems from '../LinkItems/LinkItems';

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<NavContainerStyle>
			<LogoStyle onClick={() => navigate('/')}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36tI13B51YYJgmqouWDudc-IbDYI5rc0y8vJlc2oYCA&s"
					alt="motogp"
				/>
				<TitleStyled>MOTO GP</TitleStyled>
			</LogoStyle>
			<LinkContainerStyled>
				<LinkItems to="/">Home</LinkItems>
				<LinkItems to="pilots">Pilotos</LinkItems>
				<LinkItems to="next-races">Proximas Carreras</LinkItems>
			</LinkContainerStyled>
		</NavContainerStyle>
	);
};

export default Navbar;
