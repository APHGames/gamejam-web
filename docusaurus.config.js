const path = require('path')

// parse the current locale from CLI
const idx = process.argv.findIndex(arg => arg === '--locale');
// fallback to EN by default
const currentLocale = (idx !== -1) ? process.argv[idx + 1] : 'en';
const isLocaleCS = currentLocale === 'cs';
const isLocaleEN = currentLocale === 'en';

const URL_CS = 'https://gamejam.aphgames.cz';
const URL_EN = 'https://gamejam.aphgames.io';

let url = isLocaleCS ? URL_CS : URL_EN;

const i18n = require(path.resolve(__dirname, `i18n/${currentLocale}/code.json`));

const customFields = {
	copyright: `Copyright © ${new Date().getFullYear()} <a href="https://aphgames.cz">APHGAMES.CZ</a>`,
	description: 'Velikonoční GameJam na Fakultě informačních technologií ČVUT',
	url,
	currentLocale,
}

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const output = {
	title: i18n['config.title'].message,
	url: url,
	baseUrl: '/test/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	favicon: 'img/favicon.png',
	organizationName: 'APHGames',
	projectName: 'gamejam-web',
	i18n: {
		defaultLocale: currentLocale,
		locales: [currentLocale], /* the other locale is in another domain */
	},
	customFields,
	plugins: [
		[path.resolve(__dirname, 'plugins/docusaurus-search-local'), {
			// whether to index docs pages
			indexDocs: true,
			// Whether to also index the titles of the parent categories in the sidebar of a doc page.
			// 0 = disable, 1 = direct parent, 2 = nested parents
			indexDocSidebarParentCategories: 3,
			indexBlog: true,
			indexPages: true,
			// ru is a hack for replacing cs, as cs is not supported by the plugin by default
			language: ["en", "ru"],
	  
			// setting this to "none" will prevent the default CSS to be included. The default CSS
			style: undefined,
	  
			// lunr.js-specific settings
			lunr: {
			  tokenizerSeparator: /[\s\-]+/,
			  // how important is the length of the document
			  b: 0.75,
			  // boost to common words (doesn't work properly for CZ)
			  k1: 1.2,
			  titleBoost: 5,
			  contentBoost: 1,
			  parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
		}}],
		require.resolve('docusaurus-plugin-sass'),
	],
	themeConfig: {
		metadata: [
			{
				name: 'keywords', 
				content: i18n['config.keywords'].message
			},
			{
				name: 'keywords', 
				content: i18n['config.keywords'].message
			}
		],
		colorMode: {
			defaultMode: 'dark',
			 /* I really don't have time to maintain two versions */
			disableSwitch: true,
		},
		image: 'img/oglogo.jpg',
		prism: {
			defaultLanguage: 'javascript',
			theme: require('./src/internals/prism-dark'),
			darkTheme: require('./src/internals/prism-dark'),
		},
		navbar: {
			title: ' ',
			logo: {
				alt: 'Grafit Logo',
				src: '/img/navbar/logo.png'
			},
			items: [
				{
					label: i18n['config.rules'].message,
					position: 'left',
					to: '/rules',
				},
				{
					label: 'FAQ',
					position: 'left',
					to: '/faq',
				},
				{
					label: i18n['config.gallery'].message,
					position: 'left',
					to: '/gallery',
				},
				{
					label: ' ',
					className: 'header-discord-link',
					position: 'right',
					href: 'https://discord.com/invite/qDZJ8QM4mz',	}
				/*{
					label: isLocaleCS ?  '🇬🇧' : '🇨🇿',
					"aria-label": i18n['config.lang'].message,
					className: 'header-lang-link',
					position: 'right',
					href: isLocaleCS ? URL_EN : URL_CS,
				},*/
			]
		},
		footer: {
			copyright: customFields.copyright
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					sidebarItemsGenerator: 		
						async function({
						  defaultSidebarItemsGenerator,
						  ...args
						}) {
							// exclude all items that have "exclude_<lang>" in their header based on the locale
							// this allow us to completely remove some pages for respective languages 
							args.docs = args.docs.filter(m => (!isLocaleCS || !m.frontMatter.exclude_cs) && (!isLocaleEN || !m.frontMatter.exclude_en));
							const sidebarItems = await defaultSidebarItemsGenerator(args);
							return sidebarItems;
						},
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: 'all',
						copyright: customFields.copyright
					},
					showReadingTime: true
				},
				theme: {
					customCss: require.resolve('./src/internals/docusaurus.scss')
				},
			},
		],
	],
};


module.exports = output;