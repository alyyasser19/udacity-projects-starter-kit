const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    //devServer: { watchContentBase: true },
    stats: 'minimal',
    output: {
        libraryTarget: 'var',
        library: 'client'
    },
    module: {
        rules: [
            {
                test: '/.js$/',
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        // TODO: configure workbox-webpack-plugin
        new WorkboxPlugin.GenerateSW()
    ]
}
