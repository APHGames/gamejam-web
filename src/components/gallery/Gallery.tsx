import DocusaurusHead from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import Layout from '@theme/Layout';

import * as S from '@site/src/internals/styles';

export const GameJam1 = () => {
	return (
		<S.Section>
			<S.SectionContainer>
				<S.Vertical>
					<h3>GameJam FIT 2020</h3>
					<h4>mojo</h4>
				</S.Vertical>
			</S.SectionContainer>
		</S.Section>
	)
}

export const GameJam2 = () => {
	return (
		<S.Section>
			<S.SectionContainer>
				<h3>GameJam FIT jaro 2022</h3>
			</S.SectionContainer>
		</S.Section>
	)
}

export const GameJam3 = () => {
	return (
		<S.Section>
			<S.SectionContainer>
				<S.Vertical>
					<h3>GameJam FIT podzim 2023</h3>
					<h4>mojo</h4>
				</S.Vertical>
			</S.SectionContainer>
		</S.Section>
	)
}

export const Gallery = () => {
	const { siteConfig } = useDocusaurusContext();
	const context = useDocusaurusContext();


	return (
		<Layout description={siteConfig.customFields.description as string} title='Galerie předchozích výtvorů'>
			<DocusaurusHead>
				<link rel="canonical" href={siteConfig.url} />
			</DocusaurusHead>
			<main>
				<S.Section>
					<S.SectionContainer>
						<S.Frame>
							Galerie je stále v přípravě. Prozatím se můžete podívat na:
							<ul>
								<li>
									<a href="https://drive.google.com/drive/folders/1-aVV-IfzPswrAmo6tzO_fSufTB4WgGfv">Fotografie z GameJamu 2020</a>
								</li>
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
				<GameJam1 />
				<GameJam2 />
				<GameJam3 />
			</main>
		</Layout>
	);
};

export default Gallery;