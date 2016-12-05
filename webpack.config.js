const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR + "",
        filename: "bundle.js",
        publicPath: ""
    },
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json'],  // along the way, subsequent file(s) to be consumed by webpack
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};