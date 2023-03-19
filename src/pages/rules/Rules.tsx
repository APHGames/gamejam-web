import DocusaurusHead from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

import Layout from '@theme/Layout';

export const Rules = () => {
	const { siteConfig } = useDocusaurusContext();
	const context = useDocusaurusContext();


	return (
		<Layout description={siteConfig.customFields.description as string}>
			<DocusaurusHead>
				<link rel="canonical" href={siteConfig.url} />
			</DocusaurusHead>
		</Layout>
	);
};

export default Rules;