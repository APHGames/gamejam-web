import DocusaurusHead from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import Layout from '@theme/Layout';
import * as S from '@site/src/internals/styles';


export const Questions = () => (
	<S.Section>
		<S.SectionContainer>
			<h3>Často kladené otázky a odpovědi na ně</h3>
			<S.Vertical>
				<S.Frame $width={820}>
					<h4>Jak se dostanu do budovy?</h4>
					<p>Je potřeba projít přes atrium fakulty stavební (ne přes novou budovu architektury). Vchod je úplně na konci dlouhé ulice Technická. Ve vrátnici vás pustí přes turnikety a z atria se dejte doprava k výtahům a vyjeďte do 14. patra.</p>
				</S.Frame>
				<S.Frame $width={820}>
					<h4>Je možné použít assety, které jsme našli free v asset storu v Unity?</h4>
					<p>Ano, pokud mají licenci Standard Unity Asset Store EULA.</p>
				</S.Frame>
				<S.Frame $width={820}>
					<h4>Je možné použít assety, které jsem si zakoupil/a?</h4>
					<p>Bohužel ne</p>
				</S.Frame>
				<S.Frame $width={820}>
					<h4>Jaké enginy je možno při tvorbě použít?</h4>
					<p>Jakékoliv, pokud budou splněny podmínky v pravidlech ohledně spuštění na cílové platformě.</p>
				</S.Frame>
				<S.Frame $width={820}>
					<h4>Můžu cílovou hru vytvářet např. v DOSu?</h4>
					<p>Pokud je hra vytvářená pro platformu, která není kompatibilní s MS Windows, ale existuje na ní zdarma dostupný emulátor, je možné zvolit i tento postup. Doporučili bychom ale takový případ konzultovat s porotou.</p>
				</S.Frame>
				<S.Frame $width={820}>
					<h4>Je nutné využít všechny ingredience?</h4>
					<p>Dle pravidel je nutné využít pouze 3 ze 4 ingrediencí. Způsob zakomponování je na vás, je však důležité umět si to před porotou během prezentace obhájit.</p>
				</S.Frame>
				<S.Frame $width={820}>
					<h4>Bude během akce i nějaké občerstvení?</h4>
					<p>Ano, ale nebude se jednat o plnohodnotnou stravu, spíše jen o něco k zakousnutí. Občas se něco uvaří/upeče/usmaží, první den akce se obvykle objednává pizza.</p>
				</S.Frame>
				<S.Frame $width={820}>
					<h4>Bude během akce k dispozici sprcha?</h4>
					<p>Ano</p>
				</S.Frame>
				<S.Frame $width={820}>
					<h4>Bude během akce k dispozici lednička?</h4>
					<p>Ano</p>
				</S.Frame>
				<S.Frame $width={820}>
					<h4>Budou během akce k dispozici monitory?</h4>
					<p>Ano, doporučujeme ale vzít si s sebou převodník z DisplayPortu na HDMI, neb většina monitorů, které máme k dispozici, mají jen DP výstup.</p>
				</S.Frame>
			</S.Vertical>
		</S.SectionContainer>
	</S.Section>
);



export const FAQ = () => {
	const { siteConfig } = useDocusaurusContext();
	const context = useDocusaurusContext();

	return (
		<Layout description={siteConfig.customFields.description as string} title='Časté otázky a odpovědi'>
			<DocusaurusHead>
				<link rel="canonical" href={siteConfig.url} />
			</DocusaurusHead>
			<main>
				<Questions />
			</main>
		</Layout>
	);
};

export default FAQ;