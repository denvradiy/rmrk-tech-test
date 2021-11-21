const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
	webpack(config, { isServer }) {
		// analyze bundle size
		if (process.env.ANALYZE) {
			config.plugins.push(
				new BundleAnalyzerPlugin({
					analyzerMode: 'server',
					openAnalyzer: true,
				}),
			)
		}

		config.module.rules.push({
			test: /\.csv$/,
			loader: 'csv-loader',
			options: {
				dynamicTyping: true,
				header: true,
				skipEmptyLines: true,
			},
		})

		// Inline SVG
		config.module.rules.push(
			{
				test: /\.svg?$/,
				issuer: {
					and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
				},
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							prettier: false,
							svgo: true,
							svgoConfig: {
								plugins: [
									{
										removeViewBox: false,
										prefixIds: false,
									},
								],
							},
						},
					},
					'url-loader',
				],
			},
			{
				test: /\.csv$/,
				loader: 'csv-loader',
				options: {
					noheader: true,
					dynamicTyping: true,
					trim: true,
					skipEmptyLines: true,
				},
			},
		)

		return config
	},

	distDir: process.env.DIST_DIR || 'build',
	images: {
		deviceSizes: [425, 768, 1199, 1440],
		domains: ['ipfs.io'],
	},
}
