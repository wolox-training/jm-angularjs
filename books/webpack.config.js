const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DotEnv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const ESLintPlugin = require('eslint-webpack-plugin');

const entryFiles = glob
  .sync('./src/**/*.js')
  .reduce(
    (entries, entryFile) => Object.assign(entries, { [path.parse(entryFile).name]: entryFile }),
    {}
  );

module.exports = {
  entry: {
    ...entryFiles,
    vendor: ['angular'],
    webcomponents: './webcomponents/index.webcomponents.js'
  },
  output: {
    path: path.resolve(__dirname, 'build')
  },
  target: 'web',
  mode: 'development',
  devServer: {
    clientLogLevel: 'error',
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    hot: true
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/],
        use: 'html-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes')
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src/scss')]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes')
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|otf)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new DotEnv(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    }),
    new HtmlWebpackPlugin({
      title: 'Front-End Bootstrap',
      template: './src/views/index/index.html',
      filename: 'index.html'
    }),
    new ESLintPlugin({
      cache: true,
      emitWarning: true
    })
  ],
  devtool: 'eval',
  optimization: {
    splitChunks: {
      chunks: 'async'
    }
  },
  performance: {
    hints: false
  }
};
