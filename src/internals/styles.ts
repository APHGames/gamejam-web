import styled from 'styled-components';
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