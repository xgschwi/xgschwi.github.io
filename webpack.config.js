const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const outputDirectory = 'dist';

module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: path.join(__dirname, outputDirectory),
		filename: '[name].js',
		sourceMapFilename: '[name].js.map',
		publicPath: '/',
	},
	devServer: {
		port: 3000,
		historyApiFallback: true,
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|jpg|webp|pdf|ico)$/,
				use: [
					{
						loader: 'url-loader?limit=100000',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		fallback: { path: false, fs: false },
	},
	plugins: [
		new CleanWebpackPlugin(),
		// new MiniCssExtractPlugin({
		// 	filename: 'styles.css',
		// 	chunkFilename: 'styles.css',
		// }),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			//filename: './index.html',
			favicon: './public/xicon.ico',
		}),
		new CompressionPlugin({
			filename: '[path][base].gz[query]',
			algorithm: 'gzip',
			test: /\.(js|css|html|svg)$/,
			threshold: 8192,
			minRatio: 0.8,
		}),
	],
};
