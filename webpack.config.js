var path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const StylablePlugin = require('stylable-integration/webpack-plugin');
const stylableOptions = { injectBundleCss: true, nsDelimiter:'--' };

const APP = path.join(__dirname, 'app');

module.exports = {
  context: APP,
  entry: {
    presentation: './index.tsx'
  },
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/",
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.js$/,
        include: [
            path.join(__dirname, 'node_modules', 'deindent')
        ],
        loader: 'ts-loader',
        options: {
            // needed so it has a separate transpilation instance
            instance: 'lib-compat',
            transpileOnly: true
        }
      },
      {
        test: /\.css$/,
        loader: 'stylable-integration/webpack-loader',
        options: stylableOptions
      },
      {
        test: /\.eot(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject'
      },
      {
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff2'
      },
      {
        test: /\.woff(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-ttf'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png"
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new StylablePlugin(stylableOptions),
    // use for development time hot-swap of only modified modules that the webpack client will load up
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'app', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'node_modules/reveal.js/css'), to:'reveal.js/css' },
      { from: path.join(__dirname, 'node_modules/reveal.js/lib'), to:'reveal.js/lib' },
      { from: path.join(__dirname, 'node_modules/reveal.js/plugin'), to:'reveal.js/plugin' }
    ])
  ],
  devServer: {
    contentBase: APP
  }
};
