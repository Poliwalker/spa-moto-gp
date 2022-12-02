import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border-radius: 10px;
	background-color: #d01212;
	font-family: 'poppins';
`;

export const CardsContext = styled.div`
	margin: 20px 5px;
	text-align: center;
`;

export const CardTitle = styled.h2`
	font-size: 20px;
	font-weight: 700;
	color: white;
	line-height: 20px;
	margin-bottom: 0;
	padding: 5px 0;
`;

export const CardText = styled.p`
	margin-bottom: 0;
	color: white;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
`;

export const CardNumber = styled.span`
	font-size: 20px;
`;

export const LinkStyles = styled(Link)`
	text-decoration: none;
	color: white;
	cursor: pointer;
`;
