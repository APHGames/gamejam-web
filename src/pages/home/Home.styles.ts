import { fontSizeSmall } from './../../internals/styles';
import styled from 'styled-components';
import { ParallaxBanner as Banner } from 'react-scroll-parallax';

import noise from '../../../static/img/global/noise.png';
import colors from '../../internals/colors';
import * as S from '../../internals/styles';

export * from '../../internals/styles';

export const Parallax = styled(S.Section)`
	width: 100%;
	height: calc(100vh - var(--ifm-navbar-height));
`;

export const Overlay = styled.div`
	width: 100%;
	height: calc(100vh - var(--ifm-navbar-height));
	background-image: url(${noise});
	background-repeat: repeat repeat;
	position: absolute;
`;

export const Title = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	opacity: 0.9;
	font-size: min(12vw, 6rem) !important;
	text-transform: uppercase;
	text-shadow: -0.3vw -0.3vw 0.5vw ${colors.midnight};
	margin: 0;
	text-align: center;
	line-height: min(15vw, 7rem);

	font-weight: 800;
	background-color: ${colors.firefly};
	color: ${colors.texasroseLight};
`;

export const ParallaxBanner = styled(Banner)`
	height: calc(100vh - var(--ifm-navbar-height));
	position: absolute !important;
	background: radial-gradient(#3ba6c6, #010000);

	> div {
		background-repeat: no-repeat !important;
	}
`;

export const Logos = styled(S.SectionContainer)`
	gap: 50px;
	> svg, > img {
		width: auto;
		height: 70px;
	}
`;

export const Programme = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;

	@media (orientation: portrait) {
		flex-direction: column;
	}
`;

export const Agenda = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 20px;
	align-items: center;

	> :nth-child(2n+1) {
		text-align: right;
	}

	> :nth-child(2n) {
		font-size: ${fontSizeSmall};
	}
`;