const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        main: '../src/main.ts'
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: [
                    'json-loader'
                ]
            },
            {
                test: /\.pug$/,
                exclude: /node_modules/,
                use: [
                    'pug-loader'
                ]
            },
            { 
                test: /\.tsx?$/,
                exclude: /node_modules/,                
                use: [
                    'ts-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../src/index.pug',
            inject: 'head'
        })
    ]
};