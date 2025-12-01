// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://robicruzo.github.io/NodeWebsite',
	base: '/NodeWebsite',
	integrations: [
		starlight({
			title: 'NODE API Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/maristpoll/Network_Science_UX' }],
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'Getting Started', slug: 'index' },
						{ label: 'Authentication', slug: 'reference/authentication' },
					],
				},
				{
					label: 'Endpoints',
					items: [
						{ label: 'Users', slug: 'reference/users' },
						{ label: 'Datasets', slug: 'reference/datasets' },
						{ label: 'Nodesets', slug: 'reference/nodesets' },
						{ label: 'Graphs', slug: 'reference/graphs' },
					],
				},
			],
		}),
	],
});
