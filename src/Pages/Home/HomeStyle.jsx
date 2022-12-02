import styled from 'styled-components';

export const HomeContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 130px);
	margin-left: 10%;
	overflow: hidden;
	width: 90%;
	margin: 0 auto;
`;

export const HomeContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	text-align: center;
`;

export const HomeTitleStyled = styled.h1`
	margin-top: 25px;
	margin-bottom: 20px;
	font-weight: 700;
	font-size: 64px;
	line-height: 70px;
	color: #ffffff;
`;

export const HomeDescriptionStyled = styled.p`
	margin-bottom: 35px;
	font-weight: 400;
	font-size: 24px;
	line-height: 32px;
	color: #ffffff;
	max-width: 300px;
`;

export const HomeButtonStyled = styled.button`
	width: 255px;
	margin-bottom: 35px;
	padding: 12px 24px;
	color: #ffffff;
	background: #ff2828;
	border-radius: 5px;
	cursor: pointer;
`;

export const HomeImageContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	& img {
		width: 800px;
		height: 100%;
	}
`;
