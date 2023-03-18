const colors = require('./colors');

const theme = {
	plain: {
		color: colors.rhino100,
		backgroundColor: colors.rhino10,
	},
	styles: [
		{
			types: ['comment', 'prolog', 'cdata'],
			style: {
				color: colors.rhino40,
			},
		},
		{
			types: ['delimiter', 'boolean', 'selector', 'important', 'atrule'],
			style: {
				color: colors.emerald,
			},
		},
		{
			types: ['keyword'],
			style: {
				color: colors.tomatoDark,
			},
		},
		{
			types: ['punctuation', 'attr-name'],
			style: {
				color: colors.rhino80,
			},
		},
		{
			types: ['operator'],
			style: {
				color: colors.emeraldDark,
			},
		},
		{
			types: ['tag', 'doctype', 'builtin'],
			style: {
				color: colors.royal,
			},
		},
		{
			types: ['entity', 'number', 'symbol'],
			style: {
				color: colors.emerald,
			},
		},
		{
			types: ['property', 'constant', 'variable'],
			style: {
				color: colors.emerald,
			},
		},
		{
			types: ['string', 'char'],
			style: {
				color: colors.emerald,
			},
		},
		{
			types: ['attr-value'],
			style: {
				color: colors.royal,
			},
		},
		{
			types: ['url'],
			style: {
				color: colors.royal,
			},
		},
		{
			types: ['function'],
			style: {
				color: colors.royal,
			},
		},
		{
			types: ['regex'],
			style: {
				color: colors.rhino40,
			},
		},
		{
			types: ['inserted'],
			style: {
				color: colors.rhino40,
			},
		},
		{
			types: ['deleted'],
			style: {
				color: colors.rhino40,
			},
		},
	],
};

module.exports = theme;
