import DocusaurusHead from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import Layout from '@theme/Layout';

import * as S from './Gallery.styles';

import { InfiniteLooper } from './Looper';
import colors from '../../internals/colors';
import useBaseUrl from '@docusaurus/useBaseUrl';

const GJ2020_PICS = 17;
const GJ2022_1_PICS = 17;
const GJ2022_2_PICS = 27;


const GameCard = ({team, author, place, file, desc}) => (
	<S.GameCard>
		<div>
			<h3>{team}</h3>
			<p>{author}</p>
			<p>{place}</p>
		</div>
		<div>
			<div>
				<img src={`img/pages/gallery/${file}`} />
			</div>
			<div>
				<p>{desc}</p>
			</div>
		</div>
	</S.GameCard>
);

export const GameJam1 = () => {
	return (
		<S.Section>
			<S.SectionContainer>
				<S.Vertical>
					<h3>GameJam 2020</h3>
					<h4>Ingredience</h4>
					<S.Horizontal>
						{[...Array(6)].map((_, index) => 
							<S.Frame key={index} $pictureMode={true} $width={'300px'}>
								<img src={useBaseUrl(`img/pages/gallery/gj2020/ingredients/${((index + 1) + '').padStart(2, '0')}.jpg`)} />
							</S.Frame>
						)}
					</S.Horizontal>
					<S.Space $top={10} $bottom={10} />

					<S.Frame $width={'100%'} $pictureMode={true}>
						<InfiniteLooper speed={0.1} direction='left'>
							{[...Array(GJ2020_PICS)].map((_, index) => 
							<S.CarouselItem $pictureMode={true} $width={'600px'} key={index}>
								<img src={useBaseUrl(`img/pages/gallery/gj2020/${((index + 1) + '').padStart(2, '0')}.jpg`)} />
							</S.CarouselItem>)}
						</InfiniteLooper>
					</S.Frame>
					<S.Space $top={10} $bottom={10} />
					<h3>Hry</h3>
					<S.Vertical>
						<GameCard team={'Tým Godot'} author={'1 autor'} place={'1. místo'} file={'gj2020/games/01.jpg'} 
							desc={'Oč méně je vítězná hra kreativní svým názvem, o to lepší gameplay nabízí. Skvěle mechanicky používá ingredienci smrtí to nekončí a v několika levelech předkládá hráči větší a větší výzvy.'} />
						<GameCard team={'Tým Zelený čaj'} author={'1 autor'} place={'nejlepší dabing'} file={'gj2020/games/02.jpg'} 
							desc={'Hra hýřící kreativitou. Válka posledního kartového kluka a šachových figur je skvěle nadabována od intra až po outro, figury mají různé strategie boje a především poslední boss je skutečnou výzvou.'} />
						<GameCard team={'Tým FW'} author={'3 autoři'} place={'skvělé mechaniky'} file={'gj2020/games/03.jpg'} 
							desc={'Tahová hra, která se inspiruje především ingrediencí "smrtí to nekončí" - neb malých pěšců je nespočet. O co víc tým vyladil jednotlivé použití ingrediencí, o to víc však nevyladil samotný gameplay.'} />
						<GameCard team={'R2'} author={'5 autorů'} place={'nejlepší příběh'} file={'gj2020/games/04.jpg'} 
							desc={'Tým vytvořil hru poetickou,  hlubokou a zábavnou. A jak sama hra říká: "V reálném světě není magický poklad, konstantní stav blaženosti. Jsi odsouzen k nepřetržitému a opakovanému hledání štěstí a další životy nemáš." Carpe Diem.'} />
						<GameCard team={'Tým Crossover'} author={'3 autoři'} place={'VR hra'} file={'gj2020/games/05.jpg'} 
							desc={'Multifakultní tým se pustil do velké výzvy, a to vytvoření VR hry pro Oculus Quest. Náročného úkolku se zhostil skvěle, a to včetně velmi intenzivního dabingu. Hru, nebo spíše soubor miniher propojených motivem zvěrokruhu, si s potěšením zahrál každý porotce.'} />
						<GameCard team={'Tým Restless'} author={'4 autoři'} place={'nejlepší animace'} file={'gj2020/games/06.jpg'} 
							desc={'Hra trochu doplatila na dichotomii 2D a 3D. Ukázkové a krásné ručně kreslené intro v kontrastu s pěkně rozpohybovanými 3D modely žolíka v kresleném prostředí šlo v tomto případě obtížně dohromady.'} />

					</S.Vertical>
				</S.Vertical>
			</S.SectionContainer>
		</S.Section>
	)
}

export const GameJam2 = () => {
	return (
		<S.Section>
			<S.SectionContainer>
				<S.Vertical>
					<h3>GameJam jaro 2022</h3>
					<h4>Ingredience</h4>
					<S.Horizontal>
						{[...Array(4)].map((_, index) => 
							<S.Frame key={index} $pictureMode={true} $width={'300px'}>
								<img src={useBaseUrl(`img/pages/gallery/gj2022_1/ingredients/${((index + 1) + '').padStart(2, '0')}.jpg`)} />
							</S.Frame>
						)}
					</S.Horizontal>
					<S.Space $top={10} $bottom={10} />

					<S.Frame $width={'100%'} $pictureMode={true}>
						<InfiniteLooper speed={0.1} direction='left'>
							{[...Array(GJ2022_1_PICS)].map((_, index) => 
							<S.CarouselItem $pictureMode={true} $width={'600px'} key={index}>
								<img src={useBaseUrl(`img/pages/gallery/gj2022_1/${((index + 1) + '').padStart(2, '0')}.jpg`)} />
							</S.CarouselItem>)}
						</InfiniteLooper>
					</S.Frame>
					<S.Space $top={10} $bottom={10} />
					<h3>Hry</h3>
					<S.Vertical>
						<GameCard team={'16000PSI'} author={'4 autoři'} place={'1. místo'} file={'gj2022_1/games/01.jpg'} 
							desc={'První skupina studentů se rozhodla vsadit na jistotu. Svérázná kombinace Subnauticy a Elden Ringu v kombinaci s dokončeností, rozhraním schopným si poradit i s 10K rozlišením a s podmanivou hudbou, vytvořila funkční mix, díky kterému si hra zasloužila první místo.'} />
						<GameCard team={'Eternal Effort'} author={'2 autoři'} place={'nejlepší příběh'} file={'gj2022_1/games/02.jpg'} 
							desc={'Druhá skupina studentů se vrhla do tajemna a pokusila se z dodaných ingrediencí vytěžit maximum. Šedobílý svět věčné továrny utopený v mlze v kontrastu s maličkým človíčkem, údržbářem lamp, se stal esencí hned dvou ingrediencí, a tvoření baterií do lamp pak zastoupilo ingredienci třetí - strukturu. Až když ale hráč skutečně pochopil i tu poslední ingredienci, pochopil, že k úspěchu je někdy potřeba neúspěch...'} />
						<GameCard team={'Shructure'} author={'3 autoři'} place={'nejmenší hrdina'} file={'gj2022_1/games/04.jpg'} 
							desc={'Názor poroty je jedna věc. Ale někdy ani post učitele her, ani práce ve Warhorse, ani nadšení pro gaming a hry všeho druhu nemusí zcela souznít s názory hráčů. Nebo - v tomto případě - účastníků gamejamu. V tomto ročníku jsme proto vyhlásili i vítěze, o kterém hlasovali právě ti, kteří zde hry tvořili. Cenu účastníků si vydobyl třetí tým se svojí kreativně pojmenovanou hrou, naznačující hlavní mechaniku hry - zmenšování sebe i nepřátel.'} />
						<GameCard team={'Shuffled Run'} author={'2 autoři'} place={'nejhezčí grafika'} file={'gj2022_1/games/05.jpg'} 
							desc={'Hra čtvrtého týmu se sice neumístila na vítězných pozicích, ale i tak jde o hru zasluhující nemalou pozornost. A možná to byla i komplexita promyšlené mechaniky, která způsobila, že hra nefunguje úplně tak, jak by měla. Změna struktury levelu, hlavní mechanika jinak vizuálně uchvacující hry, je poněkud chaotická a nestabilní, ale stále originální a zajímavá.'} />
						<GameCard team={'Suez Run'} author={'2 autoři'} place={'Ideál na mobil'} file={'gj2022_1/games/03.jpg'} 
							desc={'Ani hra pátého týmu neskončila před cílem a zdárně doplula do cíle. Meandry vývoje sice možná narovnaly původně klikatou řeku, passáty možná nejen že napnuly plachty, ale také trochu pomíchaly náhodné generování ker. I tak je ale Suez Run zajímavá hra. A co víc - skvěle vypadá i na obřím 10K rozlišení.'} />
					</S.Vertical>
				</S.Vertical>
			</S.SectionContainer>
		</S.Section>
	)
}

export const GameJam3 = () => {
	return (
		<S.Section>
			<S.SectionContainer>
				<S.Vertical>
					<h3>GameJam podzim 2022</h3>
					<h4>Ingredience</h4>
					<S.Horizontal>
						{[...Array(4)].map((_, index) => 
							<S.Frame key={index} $pictureMode={true} $width={'300px'}>
								<img src={useBaseUrl(`img/pages/gallery/gj2022_2/ingredients/${((index + 1) + '').padStart(2, '0')}.jpg`)} />
							</S.Frame>
						)}
					</S.Horizontal>
					<S.Space $top={10} $bottom={10} />

					<S.Frame $width={'100%'} $pictureMode={true}>
						<InfiniteLooper speed={0.1} direction='left'>
							{[...Array(GJ2022_2_PICS)].map((_, index) => 
							<S.CarouselItem $pictureMode={true} $width={'600px'} key={index}>
								<img src={useBaseUrl(`img/pages/gallery/gj2022_2/${((index + 1) + '').padStart(2, '0')}.jpg`)} />
							</S.CarouselItem>)}
						</InfiniteLooper>
					</S.Frame>
					<S.Space $top={10} $bottom={10} />
					<h3>Hry</h3>
					<S.Vertical>
						<GameCard team={'Space Origin'} author={'2 autoři'} place={'1. místo'} file={'gj2022_2/games/08.jpg'} 
							desc={'Hra pro (ne)milovníky matematiky. Protivníkem jsou zde totiž funkce: sin, cos, a především ty nejzákeřnější - tan a cotg! A proč pro hráči funkce jdou? Inu, protože hráč je v systému této matematické dimenze [0, 0]!'} />
						<GameCard team={'Spirate'} author={'6 autorů'} place={'nejlepší grafika'} file={'gj2022_2/games/02.jpg'} 
							desc={'Kooperační hra pro dva hráče střídajících se nejen v úkolu doslova sisyfovském, ale i v užívání jedné zbraně. A navíc v nádherném, barevně dokonale vyladěném, grafickém hávu.'} />
						<GameCard team={'Haunted House'} author={'5 autorů'} place={'skvělý coop'} file={'gj2022_2/games/03.jpg'} 
							desc={'Atypická kooperační hra pro tři hráče - dva hráči (na jedné klávesnici) loví ducha a objevují tajemství strašidelného domu, zatímco třetí jim radí texty z mystické exorcistické knihy - prostě ideální párty hra!'} />
						<GameCard team={'Escape from Brno'} author={'5 autorů'} place={'nejhumornější hra'} file={'gj2022_2/games/06.jpg'} 
							desc={'Co říci o této hře? Že je zábavná? Skvěle nakreslená? Dobře nadabovaná? Slovy autorů: "Útěk z Brna je dokumentární biografická hra o jednom Pražákovi a snaží se hráče seznámit s krutou realitou místa zvané Brno".'} />
						<GameCard team={'Rhune'} author={'5 autorů'} place={'nejakustičtější hra'} file={'gj2022_2/games/10.jpg'} 
							desc={'Tato rytmicky založená hudební tower defense je kreativní spojení nečekaného. A funguje opravdu skvěle! A jednoduchý, čistý a líbivý design, a skvělý tutoriál, to jen podtrhují.'} />
						<GameCard team={'Binary Anomaly'} author={'1 autor'} place={'110011001010!'} file={'gj2022_2/games/09.jpg'} 
							desc={'Tato arkádovka sice oplývá jednoduchou a nedodělanou grafikou, ale zároveň skvělým nápadem - logický, hádankový coop hratelný i v jednom hráči sestavujícím binární zápis zadaného čísla.'} />
						<GameCard team={'Spirit of the Forest'} author={'5 autorů'} place={'skvělá atmosféra'} file={'gj2022_2/games/04.jpg'} 
							desc={'Jednoduchá hra jediného autora. Ač nedodělaná, genius loci mystického lesa ohroženého chřadnutím a korupcí z ní přímo dýchá.'} />
						<GameCard team={'Just a Ghost'} author={'1 autor'} place={'největší progres'} file={'gj2022_2/games/07.jpg'} 
							desc={'Hříčka stvořená autorkou za jednoduchým účelem - naučit se Unreal Engine. A povedlo se. Stvořen byl hladový duch matematické dimenze, který zásadně požírá jen prvky se součtem nula.'} />
						<GameCard team={'Wrath of the Forest'} author={'3 autoři'} place={'nejlepší strategie'} file={'gj2022_2/games/05.jpg'} 
							desc={'Tým FW je stálicí fitích gamejamů a vždy přijde s něčím překvapivým a inovativním. A tentokrát to byla tahová strategie! Dva duchová ve hře s nulovým součtem soupeří pomocí hord lišek, ptactva a medvědů o to, komu bude patřit les a jak bude vypadat.'} />
						<GameCard team={'Floor Zer0'} author={'2 autoři'} place={'nejlepší runy'} file={'gj2022_2/games/11.jpg'} 
							desc={'Tato hra, která nejkreativněji používá mechaniku run. Ty zde totiž nenacházíte, ale vytváříte. A to pomocí numerické klávesnice. Zvládnete porazit všechny bosse a dostat se až na nulté podlaží?'} />
						<GameCard team={'Plague Snake'} author={'3 autoři'} place={'skvělý lore'} file={'gj2022_2/games/01.jpg'} 
							desc={'Hra kombinuje skvělou grafiku Unreal Enginu a zajímavou craftící mechaniku lektvarů morového doktora. Zvládnete umíchat i ty nejsložitější lektvary?'} />

					</S.Vertical>
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
						<S.Vertical>
							<h2>Galerie</h2>
							<S.Parchment>
								<p>Na půdě Fakulty informačních technologií proběhly již tři gamejamy pořádané výzkumnou skupinou Grafit ve spolupráci s APHGames a laboratořemi SAGELab a ggLab. Ty daly vzniknout zajímavému spektru her, od malých hříček přes ty hluboké, od arkádových klikačem po strategie. Jedním z hlavních cílů celé akce však není jen vyhrát, ale hlavně vytvořit hru, kterou bude možné vyslat do světa. Vytvořené hry byly zveřejněny na platformě itch.io a jsou připravené čelit ohodnocení a komentářům veřejnosti.</p>
								<p>Ingredience</p>
								<ul>
									<li>Na každém jamu dostanou účastníci sadu ingrediencí.</li>
									<li>Část z nich pak musí ve vytvořené hře použít.</li>
									<li>Neortodoxní, zajímavé a nečekané použití je přesně to, co hledáme.</li>
								</ul>
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
							</S.Parchment>
						</S.Vertical>
					</S.SectionContainer>
				</S.Section>
				<GameJam3 />
				<GameJam2 />
				<GameJam1 />
			</main>
		</Layout>
	);
};

export default Gallery;