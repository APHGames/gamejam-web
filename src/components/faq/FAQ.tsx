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
				<S.Frame $width={'820px'}>
					<h4>Jak se dostanu do budovy?</h4>
					<p>Je potřeba projít přes atrium fakulty stavební (ne přes novou budovu architektury). Vchod je úplně na konci dlouhé ulice Technická. Ve vrátnici vás pustí přes turnikety a z atria se dejte doprava k výtahům a vyjeďte do 14. patra.</p>
				</S.Frame>
				<S.Frame $width={'820px'}>
					<h4>Je možné v budově přespat?</h4>
					<p>Ano. Je ale potřeba mít na paměti, že budova se na noc uzavírá a zastřešuje, nebude ji tedy v nočních hodinách možné opustit ani se do ní vrátit. Ke spaní bude vyhrazeno jedno patro, k zapůjčení budou žíněnky. Těch je však omezený počet - konkrétní detaily budou diskutovány na Discordu.</p>
				</S.Frame>
				<S.Frame $width={'820px'}>
					<h4>Je možné použít assety, které jsme našli free v asset storu v Unity?</h4>
					<p>Ano, pokud mají licenci Standard Unity Asset Store EULA.</p>
				</S.Frame>
				<S.Frame $width={'820px'}>
					<h4>Je možné použít assety, které jsem si zakoupil/a?</h4>
					<p>Bohužel ne</p>
				</S.Frame>
				<S.Frame $width={'820px'}>
					<h4>Jaké enginy je možno při tvorbě použít?</h4>
					<p>Jakékoliv, pokud budou splněny podmínky v pravidlech ohledně spuštění na cílové platformě. Pokud se rozhodnete použít Unreal engine, mějte na paměti, že s ním během GameJamu byla historicky řada problémů (kolaborace, build time,...)</p>
				</S.Frame>
				<S.Frame $width={'820px'}>
					<h4>Můžu hru z důvodu punkového nadšenectví vytvářet např. v DOSu či pro Commodore 64?</h4>
					<p>Pokud je hra vytvářená pro platformu, která není kompatibilní s MS Windows, ale existuje pro ni zdarma dostupný a snadno instalovatelný emulátor, je možné zvolit i tento postup. Doporučili bychom ale takový případ konzultovat s porotou.</p>
				</S.Frame>
				<S.Frame $width={'820px'}>
					<h4>Je nutné využít všechny ingredience?</h4>
					<p>Dle pravidel je nutné využít pouze 3 ze 4 ingrediencí. Způsob zakomponování je na vás, je však důležité umět si to před porotou během prezentace obhájit.</p>
				</S.Frame>
				<S.Frame $width={'820px'}>
					<h4>Bude během akce i nějaké občerstvení?</h4>
					<p>Ano, ale nebude se jednat o plnohodnotnou stravu, spíše jen o něco k zakousnutí. Občas se něco uvaří/upeče/usmaží, první den akce se obvykle objednává pizza.</p>
				</S.Frame>
				<S.Frame $width={'820px'}>
					<h4>Bude během akce k dispozici sprcha?</h4>
					<p>Ano</p>
				</S.Frame>
				<S.Frame $width={'820px'}>
					<h4>Bude během akce k dispozici lednička?</h4>
					<p>Ano</p>
				</S.Frame>
				<S.Frame $width={'820px'}>
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