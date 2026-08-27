// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Astro.jsを始めよう',
			sidebar: [
				{
					label: 'セットアップ',
					items: [
						{ label: 'Astroプロジェクトの作成', slug: 'setup/initialize' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
