const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postCSSNext = require('postcss-cssnext');
const postCSSNormalize = require('postcss-normalize');
const postCSSClearfix = require('postcss-clearfix');
const postCSSFonts = require('postcss-font-magician');
const postCSSPreCSS = require('precss');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const devtool = isProd ? 'hidden-source-map' : 'cheap-eval-source-map';
const context = path.join(__dirname, './client');
const entry = {
    js: './index.js',
    vendor: ['react']
};
const output = {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js'
};
const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.bundle.js'
    }),

    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),

    new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        output: { comments: false },
        sourceMap: false
    }),

    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),

    new ExtractTextPlugin({
        filename: 'app.css',
        allChunks: true
    })
];
const preLoaders = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['eslint']
    }
];
const loaders = [
    {
        test: /\.html$/,
        loader: 'file',
        query: {
            name: '[name].[ext]'
        }
    },
    {
        test: /\.pcss$/i,
        loader: ExtractTextPlugin.extract({
            notExtractLoader: 'style-loader',
            loader: 'css?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base26]!postcss'
        })
    },
    {
        test: /\.css$/,
        loaders: ['style', 'css']
    },
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: { presets: ['es2015'] }
    },
    {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
            'file-loader?name=images/[name].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
];
const resolve = {
    extensions: ['', '.js', '.jsx'],
    modules: [
        path.resolve('./client'),
        'node_modules'
    ]
};
const devServer = { contentBase: './client' };

module.exports = {
    devtool,
    entry,
    context,
    output,
    plugins,
    module: { preLoaders, loaders },
    resolve,
    devServer,
    postcss: () => [postCSSNext, postCSSPreCSS, postCSSClearfix, postCSSNormalize, postCSSFonts]
};