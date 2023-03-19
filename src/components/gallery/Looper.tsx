import React, { useCallback, useRef, useState } from 'react';

import * as S from './Looper.styles';
import { useEffect } from 'react';

// src https://dev.to/finiam/infinite-looping-react-component-3135
export const InfiniteLooper = ({
	duration,
	speed,
	direction,
	children,
}: {
	duration?: number;
	speed?: number;
	direction: "right" | "left";
	children: React.ReactNode;
}) => {
	const [looperInstances, setLooperInstances] = useState(1);

	const outerRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);

	// for responsiveness
	const resetAnimation = () => {
		if (innerRef?.current) {
			innerRef.current.classList.remove('animate');

			setTimeout(() => {
				if (innerRef?.current) {
					innerRef.current.classList.add('animate');
				}
			}, 50);
		}
	}

	const setupInstances = useCallback(() => {
		if (!innerRef?.current || !outerRef?.current) return;

		const { width } = innerRef.current.getBoundingClientRect();

		const { width: parentWidth } = outerRef.current.getBoundingClientRect();

		const instanceWidth = width / innerRef.current.children.length;

		if (instanceWidth !== 0 && width < parentWidth + instanceWidth) {
			setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
		}
		resetAnimation();

	}, [looperInstances]);


	useEffect(() => {
		setupInstances();
	}, []);

	// responsiveness
	useEffect(() => {
		window.addEventListener("resize", setupInstances);

		return () => {
			window.removeEventListener("resize", setupInstances);
		};
	}, []);

	const realDuration = duration ? duration : (((children as any).length ?? 1) / looperInstances / speed);

	return (
		<S.Looper ref={outerRef}>
			<S.InnerList ref={innerRef}
				$duration={realDuration}
				$direction={direction}			
				$slide={(100 * (1) / looperInstances)}
			>
				{[...Array(looperInstances)].map((_, ind) => (
					<S.ListInstance
						key={ind}
					>
						{children}
					</S.ListInstance>
				))}
			</S.InnerList>
		</S.Looper>
	);
}