import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"@storybook/addon-styling-webpack",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	staticDirs: ["../public"],
	// Webpackの設定
	webpackFinal: async (config: Configuration) => {
		// 監視オプション
		config.watchOptions = {
			poll: 1000, // 変更チェックをする間隔（ミリ秒）
			aggregateTimeout: 500, // 変更があってから再ビルドするまでの間隔（ミリ秒）
			ignored: ["node_modules"], // 監視対象外ディレクトリ
		};
		return config;
	},
};
export default config;
