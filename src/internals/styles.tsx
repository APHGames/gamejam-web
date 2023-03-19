import styled from 'styled-components';
import colors from './colors';
import frame from '../../static/img/global/frame.png';
import parchment from '../../static/img/global/parchment.png';

import React from 'react';

// TODO keep in sync with fonts.scss
export const fontSizeSmall = 'clamp(10px, 2vw, 16px)';
export const fontSizeNormal = 'clamp(14px, 2vw, 20px)';
export const fontSizeLarge = 'clamp(18px, 2vw, 24px)';
export const fontSizeLlarge = 'clamp(22px, 2vw, 32px)';
export const fontSizeXlarge = 'clamp(30px, 2vw, 46px)';
export const fontSizeXxlarge = 'clamp(40px, 2vw, 64px)';
export const fontSizeXxxlarge= 'clamp(56px, 2vw, 80px)';

export const Section = styled.section`
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
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Horizontal = styled.div`
	display: flex;
	flex-direction: row;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 24px;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
`;

export const Card = styled.div`
	width: 520px;
	padding: 12px;
	
	background-color: ${colors.texasrose};

`;


const ParchmentWrapper = styled.div`
	border: 20px solid transparent;
	border-image-slice: 220 fill;
	border-image-width: 46px;
	border-image-outset: 0px 0px 0px 0px;
	border-image-repeat: repeat repeat;
	border-image-source: url(${parchment});
	width: 800px;
`;

const ParchmentStyled = styled(Card)`
	background-color: unset;
	width: unset;

	&&, > * {
		color: ${colors.rhino100};
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
	$width?: number;
}>`
	border: 32px solid transparent;
	border-image-slice: 150 186 159 156;
	border-image-width: 80px;
	border-image-outset: 0px 0px 0px 0px;
	border-image-repeat: repeat repeat;
	border-image-source: url(${frame});
	width: ${p => p.width ?? '520'}px;
	margin: 10px;

	background-color: ${colors.texasrose};
	
	&&, > * {
		color: ${colors.rhino100};
	}

	border-image-outset: 12px;;
`;

export const Highlight = styled.span`
	color: ${colors.azureDark};
	font-weight: 600;
`;