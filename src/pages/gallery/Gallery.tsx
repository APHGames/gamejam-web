import DocusaurusHead from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import Layout from '@theme/Layout';

import * as S from '@site/src/internals/styles';

export const Gallery = () => {
	const { siteConfig } = useDocusaurusContext();
	const context = useDocusaurusContext();


	return (
		<Layout description={siteConfig.customFields.description as string}>
			<DocusaurusHead>
				<link rel="canonical" href={siteConfig.url} />
			</DocusaurusHead>
			<S.Section>
				<S.SectionContainer>
					<S.Frame>
						Galerie je stále v přípravě. Prozatím se můžete podívat na:
						<ul>
							<li>
								<a href="https://photos.google.com/share/AF1QipNYU6TTxZWClr2fcjKwNhVXlURpNkUXj7N7hh-eiwmdUTEh2H8_R8taaW1TV5FZFA?key=d193MHZyMXh0TDhPNVBOU2NDaVRocjlLWE1kWmZ3">Fotografie z GameJamu 2022.1</a>
							</li>
							<li>
								<a href="https://drive.google.com/drive/u/1/folders/1H5SLt9WY01AoH9lZSSWHzB-Pi_uSNgG7">Fotografie z GameJamu 2022.2</a>
							</li>
							<li>
								<a href="https://itch.io/jam/gamejam-fit-2022">Odevzdané hry z GameJamu 2022.1</a>
							</li>
							<li>
								<a href="https://itch.io/jam/gamejam-fit-2022-2">Odevzdané hry z GameJamu 2022.2</a>
							</li>
						</ul> 
					</S.Frame>
				</S.SectionContainer>
			</S.Section>
		</Layout>
	);
};

export default Gallery;