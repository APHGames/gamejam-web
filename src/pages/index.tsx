import clsx from 'clsx';
import DocusaurusHead from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useEffect, useState } from 'react';

import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import Loadable from 'react-loadable';
import LoadingSpinner from '../components/Loading';
import sectionStyles from '../css/section.module.scss';
import titleStyles from '../css/title.module.scss';
import contentStyles from '../css/content.module.scss';
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import * as S from './index.styles';

import bgr1 from '../../static/img/pages/index/parallax/bgr1.png';
import bgr1x from '../../static/img/pages/index/parallax/bgr1x.png';
import bgr2 from '../../static/img/pages/index/parallax/bgr2.png';
import bgr3 from '../../static/img/pages/index/parallax/bgr3.png';
import bgr4 from '../../static/img/pages/index/parallax/bgr4.png';
import bgr4x from '../../static/img/pages/index/parallax/bgr4x.png';
import bgr5 from '../../static/img/pages/index/parallax/bgr5.png';
import bgr6 from '../../static/img/pages/index/parallax/bgr6.png';
import bgr7 from '../../static/img/pages/index/parallax/bgr7.png';

const Title = () => (
	<S.Parallax>
		<ParallaxProvider>
			<S.ParallaxBanner
				layers={[
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
				]}
			>

			</S.ParallaxBanner>
		</ParallaxProvider>
		<S.Overlay />
		<S.Title>GameJam</S.Title>
	</S.Parallax>
);


const Home = () => {
	const { siteConfig } = useDocusaurusContext();
	const context = useDocusaurusContext();
	const { currentLocale } = context.siteConfig.customFields;
	
	const AboutComponent = Loadable({
		loader: () => import(`../../i18n/${currentLocale}/components/About.tsx`),
		loading: LoadingSpinner,
	});

	return (
		<Layout description={siteConfig.customFields.description as string}>
			<DocusaurusHead>
				<link rel="canonical" href={siteConfig.url} />
			</DocusaurusHead>
			<Title />
			<AboutComponent />
		</Layout>
	);
};

export default Home;
