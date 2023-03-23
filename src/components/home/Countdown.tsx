import React from 'react';
import * as S from './Home.styles';
import { useEffect, useState } from 'react';

export const Countdown = () => {

	const [time, setTime] = useState(new Date().getTime());

	useEffect(() => {
		const interval = setInterval(() => setTime(new Date().getTime()), 1000);
		return () => {
		  clearInterval(interval);
		};
	  }, []);

	  if(time) {
		// Set the date we're counting down to
		const countDownDate = new Date('Apr 7, 2023 13:00:00').getTime();
		const now = time;

		// Find the distance between now and the count down date
		const distance = countDownDate - now;
	
		// Time calculations for days, hours, minutes and seconds
		const days = `${Math.floor(distance / (1000 * 60 * 60 * 24))}`.padStart(2, '0');
		const hours = `${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.padStart(2, '0');
		const minutes = `${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`.padStart(2, '0');
		const seconds = `${Math.floor((distance % (1000 * 60)) / 1000)}`.padStart(2, '0');

		const text = days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds;

		return (
			<S.Countdown>{text}</S.Countdown>
		);
	  }

	  return null;
}