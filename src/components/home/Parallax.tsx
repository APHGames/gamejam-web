import React from 'react';
import { ParallaxProvider } from "react-scroll-parallax";
import * as S from './Home.styles';

import bgr1 from '../../../static/img/pages/index/parallax/bgr1.png';
import bgr1x from '../../../static/img/pages/index/parallax/bgr1x.png';
import bgr2 from '../../../static/img/pages/index/parallax/bgr2.png';
import bgr3 from '../../../static/img/pages/index/parallax/bgr3.png';
import bgr4 from '../../../static/img/pages/index/parallax/bgr4.png';
import bgr4x from '../../../static/img/pages/index/parallax/bgr4x.png';
import bgr5 from '../../../static/img/pages/index/parallax/bgr5.png';
import bgr6 from '../../../static/img/pages/index/parallax/bgr6.png';
import bgr7 from '../../../static/img/pages/index/parallax/bgr7.png';
import mobileBgr from '../../../static/img/pages/index/parallax/mobile.png';
import { Countdown } from './Countdown';


export const Parallax = ( { isMobile }) => (
	<S.Parallax $isMobile={isMobile}>
		<ParallaxProvider>
			<S.ParallaxBanner
				layers={[
					...(isMobile ? [
						{
							image: mobileBgr,
							style: {
								backgroundSize: 'cover',
								backgroundPosition: 'bottom center',
							},
							expanded: false,
							disabled: true,
						},
						{
							image: bgr1,
							translateY: [0, 110],
							style: {
								backgroundSize: 'contain',
								backgroundPosition: 'bottom center',
							},
							shouldAlwaysCompleteAnimation: true,
							expanded: false,
						},
						{
							image: bgr1x,
							translateY: [5, 150],
							style: {
								backgroundSize: 'contain',
								backgroundPosition: 'bottom center',
							},
							shouldAlwaysCompleteAnimation: true,
							expanded: false,
						},
					] : [
						{
							image: bgr7,
							translateY: [0, 0],
							style: {
								backgroundSize: 'contain',
								backgroundPosition: 'bottom center',
							},
							shouldAlwaysCompleteAnimation: true,
							expanded: false,
						},
						{
							image: bgr6,
							translateY: [40, 0],
							shouldAlwaysCompleteAnimation: false,
							style: {
								backgroundSize: 'contain',
								backgroundPosition: 'bottom center',
							},
							expanded: false,
						},
						{
							image: bgr5,
							translateY: [15, 0],
							style: {
								backgroundSize: 'contain',
								backgroundPosition: 'bottom right',
							},
							shouldAlwaysCompleteAnimation: true,
							expanded: false,
						},
						{
							image: bgr4,
							translateY: [12, 0],
							style: {
								backgroundSize: 'contain',
								backgroundPosition: 'top left',
							},
							shouldAlwaysCompleteAnimation: false,
							expanded: false,
						},
						{
							image: bgr4x,
							translateY: [15, 0],
							style: {
								backgroundSize: 'contain',
								backgroundPosition: 'top right',
							},
							shouldAlwaysCompleteAnimation: true,
							expanded: false,
						},
						{
							image: bgr3,
							translateY: [20, 0],
							style: {
								backgroundSize: 'contain',
								backgroundPosition: 'bottom center',
							},
							shouldAlwaysCompleteAnimation: true,
							expanded: false,
						},
						{
							image: bgr2,
							translateY: [-10, -110],
							style: {
								backgroundSize: 'contain',
								backgroundPosition: 'bottom center',
							},
							shouldAlwaysCompleteAnimation: true,
							expanded: false,
						},
						{
							image: bgr1,
							translateY: [0, 110],
							style: {
								backgroundSize: 'contain',
								backgroundPosition: 'bottom center',
							},
							shouldAlwaysCompleteAnimation: true,
							expanded: false,
						},
						{
							image: bgr1x,
							translateY: [5, 150],
							style: {
								backgroundSize: 'contain',
								backgroundPosition: 'bottom center',
							},
							shouldAlwaysCompleteAnimation: true,
							expanded: false,
						},
					])
				]}
			>

			</S.ParallaxBanner>
		</ParallaxProvider>
		{/* Overlay must be here even for mobile version, as it 
		  keep the title sticky from the bottom */}
		<S.Overlay $isMobile={isMobile} />
		<Countdown />
		<S.Title>GameJam</S.Title>
	</S.Parallax>
);
