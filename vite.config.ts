/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/setupTests.ts'],
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@src': path.resolve(__dirname, './src'),
		},
	},
});
