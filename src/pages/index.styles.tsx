import styled from 'styled-components';
import { ParallaxBanner as Banner } from 'react-scroll-parallax';

import noise from '../../static/img/pages/index/noise.png';
import colors from '../internals/colors';

export const Section = styled.section`
	width: 100%;
`;

export const SectionContainer = styled.div`
	display: flex;
	max-width: var(--ifm-container-width);
	width: 100%;
	justify-content: center;
	padding: 4.5rem 1rem;
	margin: 0 auto;
	--ifm-code-padding-horizontal: 1.5rem;
	--ifm-code-padding-vertical: 1rem;
	--ifm-pre-padding: 1rem 1.5rem;

	@media (max-width: 996px) {
		flex-direction: column;
	}
`;


export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;

`;

export const Card = styled.div`
	font-size: clamp(1rem, 2vw, 1.3rem);
	width: 520px;
	padding: 2rem;
	
	background-color: ${colors.texasrose};

	h3 {
		font-size: clamp(1.5rem, 4vw, 2rem);;
	}
`;

export const Parallax = styled(Section)`
	width: 100%;
	height: 100vh;
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
