import styled, { css } from 'styled-components';
import colors from './colors';
import frame from '../../static/img/global/frame.png';
import parchment from '../../static/img/global/parchment.png';

import React from 'react';

// TODO keep in sync with fonts.scss
export const fontSizeSmall = 'clamp(14px, 2vw, 18px)';
export const fontSizeNormal = 'clamp(16px, 2vw, 20px)';
export const fontSizeLarge = 'clamp(18px, 2vw, 24px)';
export const fontSizeLlarge = 'clamp(22px, 2vw, 32px)';
export const fontSizeXlarge = 'clamp(30px, 2vw, 46px)';
export const fontSizeXxlarge = 'clamp(40px, 2vw, 64px)';
export const fontSizeXxxlarge= 'clamp(56px, 2vw, 80px)';


export const Section = styled.section<{
	$bgrColor?: string;
	$bgr?: string;
}>`
	${p => p.$bgrColor ? `background-color: ${p.$bgrColor};` : ''}
	
	${p => p.$bgr ? `
		background: url(${p.$bgr});
		background-size: cover;
		background-repeat: no-repeat;
	` : ''}

	width: 100%;

	& + section {
		border-top: 2px dashed ${colors.texasroseLight};
	}
`;

export const SectionContainer = styled.div`
	display: flex;
	max-width: var(--ifm-container-width);
	width: 100%;
	justify-content: center;
	padding: 40px 12px;
	margin: 0 auto;
	flex-wrap: wrap;
`;

export const Vertical = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
`;

export const Horizontal = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 24px;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 24px;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	position: relative;
`;

export const Card = styled.div`
	width: 520px;
	padding: 12px;
	
	background-color: ${colors.texasrose};

`;


const ParchmentWrapper = styled.div`
	border: 20px solid transparent;
	padding-right: 20px;
	border-image-slice: 220 fill;
	border-image-width: 46px;
	border-image-outset: 0px 0px 0px 0px;
	border-image-repeat: repeat repeat;
	border-image-source: url(${parchment});
	width: min(800px, 100%);
`;

const ParchmentStyled = styled(Card)`
	background-color: unset;
	width: unset;

	&&, > * {
		color: ${colors.rhino100};

		& a {
			color: ${colors.azureDark};
		}
	}
`;

export const Parchment = (props) => {
	return (
		<ParchmentWrapper>
			<ParchmentStyled {...props} />
		</ParchmentWrapper>
	);
};

export const Frame = styled.div<{
	$width?: string;
	$color?: string;
	$pictureMode?: boolean;
}>`
	border: 32px solid transparent;
	border-image-slice: 150 186 159 156;
	border-image-width: 80px;
	border-image-outset: 0px 0px 0px 0px;
	border-image-repeat: repeat repeat;
	border-image-source: url(${frame});
	width: ${p => p.$width ?? '520'};
	margin: 10px;

	background-color: ${(p) => p.$color ?? colors.texasrose};
	
	${(p => p.$pictureMode && css`
		background-color: ${colors.midnight};
		border-width: 15px;

		> img {
			width: 100%;
			height: auto;
		}
	`
	)}

	&&, > *:not(a) {
		color: ${colors.rhino100};
	}

	border-image-outset: 12px;
`;

export const CarouselItem = styled.div`
	margin: 10px;
	width: 500px;
`;

export const Space = styled.div<{$top?: number; $bottom?: number}>`
	${(p => p.$top ? `margin-top: ${p.$top}px` : '')}
	${(p => p.$bottom ? `margin-bottom: ${p.$bottom}px` : '')}

`;

export const Highlight = styled.span`
	color: ${colors.azureDark};
	font-weight: 600;
`;

