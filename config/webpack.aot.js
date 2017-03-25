const webpack = require('webpack');
const ngToolsWebpack = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

// commonConfig.entry.app = './src/app/main.aot';
// commonConfig.module.rules.push({
//     test: /\.ts$/,
//     use: '@ngtools/webpack'
// });

commonConfig.entry.app = './src/app/main.aot';
commonConfig.module.rules.push({
    test: /\.ts$/,
    use: [
        'awesome-typescript-loader',
        'angular2-router-loader',
        'angular2-template-loader'
    ]
});

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    plugins: [
        // new ngToolsWebpack.AotPlugin({
        //     tsConfigPath: './tsconfig.json',
        //     entryModule: helpers.root('src') + '/app/app.module#AppModule',
        // }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: false
        }),
        new WebpackChunkHash({
            algorithm: 'md5'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new ExtractTextPlugin({
            filename: '[name].[chunkhash].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});
