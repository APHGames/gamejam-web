import styled, { keyframes } from 'styled-components';
import colors from '../../internals/colors';

export * from '../../internals/styles';

const spinner = keyframes`
	0% {
		transform: rotate(0deg);
  	}
  	
	100% {
		transform: rotate(360deg);
  	}
`


export const Container = styled.div<{$center: boolean }>`
	width: 100%;
	${p => p.$center ? 'flex: 1 0 auto;' : ''}
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Loading = styled.div`
	width: 100px;
	height: 100px;
	border: 10px solid ${colors.rhino5};
	border-top: 10px solid ${colors.rhino60};
	border-radius: 50%;
	animation: ${spinner} 1.5s linear infinite;
`;