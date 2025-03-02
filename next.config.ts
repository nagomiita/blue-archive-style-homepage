import type { NextConfig } from "next";
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	// Webpackの開発モードの設定
	webpackDevMiddleware: (config: {
		watchOptions: {
			poll: number; //  変更チェックをする間隔（ミリ秒）
			aggregateTimeout: number; // 変更があってから再ビルドするまでの間隔（ミリ秒）
			ignored: string[];
		};
	}) => {
		// 監視オプション
		config.watchOptions = {
			poll: 1000, //  変更チェックをする間隔（ミリ秒）
			aggregateTimeout: 500, // 変更があってから再ビルドするまでの間隔（ミリ秒）
			ignored: ["node_modules"], // 監視対象外ディレクトリ
		};
		return config;
	},
};

module.exports = withNextIntl(nextConfig);
