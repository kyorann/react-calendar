const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const appPath = path.resolve(__dirname, './src')
const bootstrap = path.resolve(__dirname, './node_modules/bootstrap/less/')

module.exports = {
  context: appPath,
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle-[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [appPath]
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before less-loader if necessary
          use: ['css-loader', {loader: 'postcss-loader'}, 'less-loader'],
        }),
        include: [appPath, bootstrap]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        include: path.join(__dirname, 'src'),
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }

    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: 'style-[chunkhash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'da111afb1201.html',
      template: 'da111afb1201.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        drop_console: true
      },
      comments: false,
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname),
      verbose: true,
      dry: false
    })
  ],
  resolve: {
    alias: {
      less: path.resolve(__dirname, 'src/less'),
      ui: path.resolve(__dirname, 'src/components/ui')
    }
  }
};