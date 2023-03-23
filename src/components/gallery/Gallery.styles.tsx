import * as S from '../../internals/styles';
import styled, { keyframes } from 'styled-components';
import colors from '../../internals/colors';

export * from '../../internals/styles';

// todo refactor this
export const GameCard = styled(S.Frame).attrs({$width: '100%'})`


	> div {
		display: flex;
		flex-direction: row;
		gap: 10px;

		&:nth-child(1) {
			gap: 40px;
		}

		> h3 {
			color: ${colors.royalDark};
		}
	}


	> div:nth-child(2) {

		@media (max-width: 600px) {
			flex-wrap: wrap;
		}


		> div:nth-child(1) {
			max-width: 420px;
		}

		> div:nth-child(2) {
			flex-grow: 1;
			width: 60%;
		}
	}

`;