import styled, { keyframes } from 'styled-components';
import colors from '../internals/colors';

const spinner = keyframes`
	0% {
		transform: rotate(0deg);
  	}
  	
	100% {
		transform: rotate(360deg);
  	}
`

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Loading = styled.div`
	width: 100px;
	height: 100px;
	border: 10px solid ${colors.rhino5};
	border-top: 10px solid ${colors.rhino60};
	border-radius: 50%;
	animation: ${spinner} 1.5s linear infinite;
`;