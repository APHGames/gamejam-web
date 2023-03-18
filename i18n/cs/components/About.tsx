import clsx from 'clsx';
import React from 'react';
import sectionStyles from '@site/src/css/section.module.scss';
import contentStyles from '@site/src/css/content.module.scss';

export default () => (
	<section
		className={clsx(sectionStyles.section, sectionStyles.section)}
	>
		<div className={sectionStyles['section--inner']}>
			<div className={clsx(contentStyles.content__col2m, contentStyles.content__text)}>
				<div>
					<h3>TODO</h3>
					<p>Příhodiči, ač samotný či s družinou, zveme Tvou slovutnost v těchto velikonočních dnech na sváření vynikající hry. Dobře si rozpočti čas, vynalézej s nástrojem Tebou znalým, přičti tři z čtyř povinných ingrediencí, dva dny pomíchej, ozdob nápady a vystav k obdivu. Nechť Tvůj recept bude tím vítězným.</p>
					<p>Rady zkušených kuchařů Ti stanou po boku a možnost obdržení cenné zpětné vazby od lidí z herního řemesla bude dána.</p>
					<p>Konání této čilosti uskutečněno bude v prostorách FIT ČVUT, jmenovitě na Thákurově 9 v Praze, s úvodním slovem předávaném v síni TH:A-1455, jež ggLab zove se. Zábavy bude hojně, i jídlo porůznu se zjeví.</p>
					<p>Ohlaš svou účast na Discordu a těš se na činorodost.</p>
				</div>
				<div>
					<h3>TODO</h3>
				</div>
			</div>
		</div>
	</section>
);
