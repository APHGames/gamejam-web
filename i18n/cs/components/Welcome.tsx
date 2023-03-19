import React from 'react';
import * as S from '@site/src/internals/styles';
import Photo from '../../../static/img/pages/index/photo.jpg';


export const Welcome = () => (
	<S.Section $bgr={Photo}>
		<S.SectionContainer>
			<S.CardContainer>
				<S.Parchment>
					<h3>Pátek 7.4. - Neděle 9.4. 2023</h3>
					<p>Příhodiči, ač samotný či s družinou, zveme Tvou slovutnost v těchto velikonočních dnech na sváření vynikající hry. Dobře si rozpočti čas, vynalézej s nástrojem Tebou znalým, přičti tři z čtyř povinných ingrediencí, dva dny pomíchej, ozdob nápady a vystav k obdivu. Nechť Tvůj recept bude tím vítězným.</p>
					<p>Rady zkušených kuchařů Ti stanou po boku a možnost obdržení cenné zpětné vazby od lidí z herního řemesla bude dána.</p>
					<p>Konání této čilosti uskutečněno bude v prostorách FIT ČVUT, jmenovitě na Thákurově 9 v Praze, s úvodním slovem předávaném v síni TH:A-1455, jež ggLab zove se. Zábavy bude hojně, i jídlo porůznu se zjeví.</p>
					<p>Ohlaš se v <a href="https://docs.google.com/forms/d/e/1FAIpQLSdOgCJJJAxckOgGXdcur9wF5P04AfuvP2Kym-Re9gnheS54Wg/viewform">účastnické listině</a>, dostav se na <a href="https://discord.com/invite/qDZJ8QM4mz">Discord</a> a těš se na činorodost.</p>
				</S.Parchment>
			</S.CardContainer>
		</S.SectionContainer>
	</S.Section>
);

export default Welcome;