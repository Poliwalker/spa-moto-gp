import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkItemsStyled = styled(NavLink)`
	font-size: 16px;
	line-height: 24px;
	color: #c8c8c8;
	text-decoration: none;
	&.active {
		color: #090909;
	}
`;
