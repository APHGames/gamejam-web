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

const Title = () => (
	<section
		className={clsx(sectionStyles.section)}
	>
		<div className={clsx(sectionStyles['section--inner'], titleStyles.title__section)}>
			<div className={titleStyles.title}>
				<div className={titleStyles.title__title}>
					<h2>{translate({ message: 'index.title' })}</h2>
				</div>
			</div>
		</div>
	</section>
);

const News = () => {
	const context = useDocusaurusContext();
	const { currentLocale } = context.siteConfig.customFields;

	const [newsData, setNewsData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await import(`../../i18n/${currentLocale}/news.json`);
			// TODO doesn't serialize into array out of the box
			const converted = Array(data.length).fill(0, 0, data.length).map((_, idx) => data[idx]);
			setNewsData(converted);
		};
		fetchData();
	}, []);
	return newsData && (
		<section
			className={clsx(sectionStyles.section)}
		>
			<h2 className={contentStyles.content__title}>{translate({ message: 'index.news' })}</h2>
			<div className={contentStyles.content__list}>
				{newsData.map((dt) => (
					<div key={dt.date}>
						<div className={contentStyles.list_title}>{dt.date}</div>
						<div className={contentStyles.list_text} dangerouslySetInnerHTML={{ __html: dt.text }} />
					</div>
				))}
			</div>
		</section>
	);
};

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
			<News />
		</Layout>
	);
};

export default Home;
