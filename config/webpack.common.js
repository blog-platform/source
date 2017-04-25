const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

module.exports = {
    entry: {
        polyfills: './src/app/polyfills',
        vendor: './src/app/vendor',
        app: './src/app/main'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json', '.html', '.css', '.scss', '.xlf'],
        modules: [helpers.root('src'), 'node_modules']
    },

    module: {
        rules: [{
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|ttf|eot|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/img/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.svg$/,
                include: [
                    helpers.root('node_modules')
                ],
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'flags/4x3/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.json$/,
                include: [
                    helpers.root('public/i18n')
                ],
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/i18n/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.css$/,
                include: [
                    helpers.root('public/css'),
                    helpers.root('node_modules')
                ],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: true
                        }
                    }]
                })
            },
            {
                test: /\.xlf$/,
                use: 'raw-loader'
            },
            {
                test: /\.scss$/,
                use: ['raw-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root(), {}
        ),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'app'])
        })
    ]
};
