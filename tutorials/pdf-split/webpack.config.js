const path = require('path');
const execSync = require('child_process').execSync;
const webpack = require('webpack');

const version = execSync(`git rev-list -1 --abbrev-commit HEAD -- ${__dirname}`, { encoding: 'ascii' });

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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
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
  },
  plugins: [new webpack.DefinePlugin({ ___PDF_SPLIT_VERSION___: JSON.stringify(version) })],
};
