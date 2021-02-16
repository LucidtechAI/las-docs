const custom = require('../webpack.config');
const execSync = require('child_process').execSync;
const webpack = require('webpack');

const version = execSync('git rev-parse --short HEAD', { encoding: 'ascii' });

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  webpackFinal: (config) => {
    const css_regex = '/\\.css$/';
    const cssRule = config.module.rules.find((_) => _.test.toString() === css_regex);
    config.plugins.push(new webpack.DefinePlugin({ ___TUTORIAL_VERSION___: JSON.stringify(version) }));

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.filter((_) => _.test.toString() !== css_regex),
          {
            ...cssRule,
            exclude: /\.module\.css$/,
          },
          {
            ...cssRule,
            test: /\.module\.css$/,
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
        ],
      },
      plugins: config.plugins,
    };
  },
};
