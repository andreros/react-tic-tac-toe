import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
	html: {
		title: 'Tic Tac Toe'
	},
	plugins: [pluginReact()]
});
