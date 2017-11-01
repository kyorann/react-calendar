const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const appPath = path.resolve(__dirname, './src')


module.exports = {
  context: appPath,
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    contentBase: appPath
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [appPath],
        loader: 'eslint-loader',
        options: {
          eslintPath: 'eslint',
        }
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [appPath]
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before less-loader if necessary
          use: ['css-loader',{loader:'postcss-loader'},'less-loader'],
        }),
        include: [appPath]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        include: path.join(__dirname, 'src'),
        loader: 'url-loader?name=[path][name].[ext]'
      },
      // {
      //   test: /\.(jpg|jpeg|gif|png)$/,
      //   include: path.join(__dirname, 'src'),
      //   loader: 'file-loader?name=[path][name].[ext]'
      // },
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
        'NODE_ENV': JSON.stringify('local')
      }
    }),
    // require('precss'),
    // require('autoprefixer'),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: [
    //       autoprefixer(),
    //     ]
    //   }
    // }),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: 8888,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
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