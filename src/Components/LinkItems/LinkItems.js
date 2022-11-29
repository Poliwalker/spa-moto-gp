import React from 'react';
import { LinkItemsStyled } from './LinkItemsStyles';

const LinkItems = ({ to, children }) => {
	return (
		<LinkItemsStyled
			className={({ isActive }) => (isActive ? 'active' : '')}
			to={to}
		>
			{children}
		</LinkItemsStyled>
	);
};

export default LinkItems;
