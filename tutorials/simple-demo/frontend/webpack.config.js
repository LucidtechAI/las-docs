const path = require('path');
const execSync = require('child_process').execSync;
const webpack = require('webpack');

const version = execSync('git rev-parse --short HEAD', { encoding: 'ascii' });

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        loaders: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: 'production',
  devtool: 'none',
  output: {
    libraryTarget: 'commonjs',
    filename: 'remote.js',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  plugins: [new webpack.DefinePlugin({ ___TUTORIAL_VERSION___: JSON.stringify(version) })],
};
