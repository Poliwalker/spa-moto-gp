import React from 'react';
import {
	CardsFooterContainer,
	ContentContainer,
	DescriptionStyled,
} from './FooterStyle';

const Footer = ({ description }) => {
	return (
		<CardsFooterContainer>
			<ContentContainer>
				<h4>Descripcion</h4>
			</ContentContainer>
			<DescriptionStyled>{description}</DescriptionStyled>
		</CardsFooterContainer>
	);
};

export default Footer;
