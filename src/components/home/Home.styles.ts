import { fontSizeSmall, fontSizeLarge, fontSizeNormal, fontSizeLlarge, fontSizeXlarge } from './../../internals/styles';
import styled from 'styled-components';
import { ParallaxBanner as Banner } from 'react-scroll-parallax';

import noise from '../../../static/img/global/noise.png';
import colors from '../../internals/colors';
import * as S from '../../internals/styles';

export * from '../../internals/styles';

export const Parallax = styled(S.Section)`
	width: 100%;
	height: calc(100vh - var(--ifm-navbar-height));
	position: relative;
`;


export const Overlay = styled.div<{$isMobile: boolean }>`
	width: 100%;
	height: calc(100vh - var(--ifm-navbar-height));
	background-image: ${p => p.$isMobile ? `unset` : `url(${noise})`};
	background-repeat: repeat repeat;
	position: relative;
`;

export const Countdown = styled.div`
	position: sticky;
	bottom: min(15vw, 8rem);
	width: 100%;
	font-size: ${fontSizeNormal} !important;
	line-height: ${fontSizeXlarge};
	text-shadow: -1px -1px 2px ${colors.midnight};
	margin: 0;
	text-align: center;
	font-weight: 800;
	color: ${colors.texasroseLight};
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
export const Companies = styled(S.Section)`
	padding-top: min(16vw, 8rem);
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
	align-items: top;		
	font-size: ${fontSizeSmall};

	> :nth-child(2n+1) {
		text-align: right;
	}

	> :nth-child(2n) {		
	}
`;

export const Sleepover = styled.div`
	position: absolute;
	bottom: -35px;
	right: 15%;
	width: 200px;
	transform: rotate(14deg);
`;
