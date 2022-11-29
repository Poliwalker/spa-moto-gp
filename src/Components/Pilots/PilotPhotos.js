import React from 'react';
import {
	PilotPhotoContainerStyled,
	PilotPhotoImageStyled,
} from './PilotPhotosStyle';

const PilotPhotos = ({ img, alt }) => {
	return (
		<PilotPhotoContainerStyled>
			<PilotPhotoImageStyled src={img} alt={alt} />
		</PilotPhotoContainerStyled>
	);
};

export default PilotPhotos;
