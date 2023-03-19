import styled, { keyframes } from 'styled-components';


const slide = (slideParam: number) => keyframes`
  from {
    transform: translateX(0%);
  }
  to {
	transform: translateX(-${slideParam}%);
  }
`

export const Looper = styled.div`
	width: 100%;
	overflow: hidden;
`;

export const InnerList = styled.div<{
	$slide: number;
	$duration: number;
	$direction: 'right' | 'left';
}>`
	display: flex;
	justify-content: center;
	width: fit-content;

	&.animate {
		animation: ${p => slide(p.$slide)} linear infinite;
		animation-duration: ${p => p.$duration}s;
		animation-direction: ${p => p.$direction === 'right' ? `reverse` : `normal`};
	}
`;

export const ListInstance = styled.div`
	display: flex;
	width: max-content;
  
	animation: none;
`;
