import styled from 'styled-components';

export const NavContainerStyle = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;

	margin: 0 auto;
	padding: 10px 12px;

	width: 90%;
	height: 130px;

	background: #ea0f3b;
`;

export const LogoStyle = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	& img {
		margin-top: 13px;
		width: 100px;
		height: 100px;
		margin-right: 10px;
	}
`;

export const TitleStyled = styled.h2`
	margin: 0;
	font-weight: 700;
	font-size: 24px;
	line-height: 40px;
	color: white;
`;

export const LinkContainerStyled = styled.div`
	display: flex;
	gap: 45px;
`;
