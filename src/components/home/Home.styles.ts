import { fontSizeSmall } from './../../internals/styles';
import styled from 'styled-components';
import { ParallaxBanner as Banner } from 'react-scroll-parallax';

import noise from '../../../static/img/global/noise.png';
import colors from '../../internals/colors';
import * as S from '../../internals/styles';
import { SectionContainer } from '../../internals/styles';

export * from '../../internals/styles';

export const Parallax = styled(S.Section)`
	width: 100%;
	height: calc(100vh - var(--ifm-navbar-height));
	position: relative;
`;


export const Overlay = styled.div<{$isMobile: boolean }>`
	width: 100%;
	height: calc(100vh - var(--ifm-navbar-height));
	background-image: ${p => p.$isMobile ? `unset` : `background-image: url(${noise})`};
	background-repeat: repeat repeat;
	position: relative;
`;

export const Title = styled.div`
	position: sticky;
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

/* due to weird stickiness of the GAMEJAM title (it goes beyond the parent container, 
	sponsors need to be padded from the top) */
export const Sponsors = styled(S.Section)`
	padding-top: min(12vw, 6rem);
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
	flex-wrap: wrap;
	justify-content: center;

	@media (orientation: portrait) {
		flex-direction: column;
	}
`;

export const Agenda = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 20px;
	align-items: cen		font-size: ${fontSizeSmall};
ild(2n+1) {
		text-align: right;
	}

	> :n		font-size:12px;
;
	}
`;
