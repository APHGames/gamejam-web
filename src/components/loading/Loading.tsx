import React from 'react';
import * as S from '../loading/Loading.styles';

export const Loading = ({ center }: { center?: boolean }) => {
	return (<S.Container $center={center}>
		<S.Loading />
	</S.Container>);
}
	