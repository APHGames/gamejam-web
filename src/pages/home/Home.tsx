import DocusaurusHead from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import Loadable from 'react-loadable';
import { Loading } from '../../components/loading';
import * as S from './Home.styles';
import { Parallax } from './Parallax';

import LogoFit from '../../../static/img/pages/index/logo_fit.svg'
import LogoGrafit from '../../../static/img/pages/index/logo_grafit.svg'
import LogoSage from '../../../static/img/pages/index/logo_sagelab.svg'
import LogoAPH from '../../../static/img/pages/index/logo_aphgames.svg'

import PartnersAPH from '../../../static/img/pages/index/sponsors/partners_aphgames.svg'
import PartnersCesnet from '../../../static/img/pages/index/sponsors/partners_cesnet.png'
import PartnersIPR from '../../../static/img/pages/index/sponsors/partners_ipr.png'
import PartnersWarhorse from '../../../static/img/pages/index/sponsors/partners_warhorse.png'

import colors from '../../internals/colors';


const Programme = () => {
	return (
		<S.Section>
			<S.SectionContainer>
				<S.Vertical>
					<h3>Program</h3>
					<S.Programme>
						<S.Frame $width={320}>
							<h3>Pátek</h3>
							<S.Agenda>
								<div>11:00</div>
								<div>Otevření dveří</div>

								<div>12:30</div>
								<div>Úvodní slovo</div>

								<S.Highlight>13:00</S.Highlight>
								<S.Highlight>Začátek programování</S.Highlight>

								<div>17:30</div>
								<div>Networking a rozbor minulých prací</div>

								<div>20:00</div>
								<div>Zvláštní režim budovy</div>
							</S.Agenda>
						</S.Frame>
						<S.Frame $width={320}>
							<h3>Sobota</h3>
							<S.Agenda>
								<div>8:00</div>
								<div>Konec zvláštního režimu budovy</div>

								<div>12:00</div>
								<div>Game Quiz</div>

								<div>17:30</div>
								<div>Deskovky a jiná zábava</div>

								<div>20:00</div>
								<div>Zvláštní režim budovy</div>

								<div>0:00</div>
								<div>Lanparty v SAGELabu</div>
							</S.Agenda>
						</S.Frame>
						<S.Frame $width={320}>
							<h3>Neděle</h3>
							<S.Agenda>
								<div>8:00</div>
								<div>Konec zvláštního režimu budovy</div>

								<S.Highlight>13:00</S.Highlight>
								<S.Highlight>Konec programování</S.Highlight>

								<div>13:30</div>
								<div>Prezentace prací</div>

								<div>16:00</div>
								<div>Vyhlášení vítězů</div>

								<div>16:30</div>
								<div>Volná zábava</div>
							</S.Agenda>
						</S.Frame>
					</S.Programme>
				</S.Vertical>
			</S.SectionContainer>
		</S.Section>
	)
}

const Companies = () => {
	return (
		<S.Section>
			<S.Logos>
				<LogoFit />
				<LogoGrafit />
				<LogoAPH />
				<LogoSage />
			</S.Logos>
	</S.Section>
	)
}

const Sponsors = () => {
	return (
		<S.Section>
			<S.SectionContainer>
			<h3>Sponzoři</h3>
			<S.Logos>
				<PartnersAPH />
				<img src={PartnersCesnet} />
				<img src={PartnersIPR} />
				<img src={PartnersWarhorse} />
			</S.Logos>
			</S.SectionContainer>
		</S.Section>
	)
}

export const Home = () => {
	const { siteConfig } = useDocusaurusContext();
	const context = useDocusaurusContext();
	const { currentLocale } = context.siteConfig.customFields;
	
	const Welcome = Loadable({
		loader: () => import(`../../../i18n/${currentLocale}/components/Welcome.tsx`),
		loading: Loading,
	});

	return (
		<Layout description={siteConfig.customFields.description as string}>
			<DocusaurusHead>
				<link rel="canonical" href={siteConfig.url} />
			</DocusaurusHead>
			<Parallax />
			<Companies />
			<Welcome />
			<Programme />
			<Sponsors />
		</Layout>
	);
};
