import DocusaurusHead from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import Loadable from 'react-loadable';
import { Loading } from '../../components/loading';
import * as S from './Home.styles';
import { Parallax } from './Parallax';


export const Home = () => {
	const { siteConfig } = useDocusaurusContext();
	const context = useDocusaurusContext();
	const { currentLocale } = context.siteConfig.customFields;
	
	const AboutComponent = Loadable({
		loader: () => import(`../../../i18n/${currentLocale}/components/About.tsx`),
		loading: Loading,
	});

	return (
		<Layout description={siteConfig.customFields.description as string}>
			<DocusaurusHead>
				<link rel="canonical" href={siteConfig.url} />
			</DocusaurusHead>
			<Parallax />
			<AboutComponent />
		</Layout>
	);
};
