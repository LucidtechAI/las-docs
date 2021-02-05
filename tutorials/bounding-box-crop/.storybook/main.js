const custom = require('../webpack.config');
const execSync = require('child_process').execSync;
const webpack = require('webpack');

const version = execSync('git rev-parse --short HEAD', { encoding: 'ascii' });

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  webpackFinal: (config) => {
    config.plugins.push(new webpack.DefinePlugin({ ___TUTORIAL_VERSION___: JSON.stringify(version) }));
    return { ...config, module: { ...config.module, rules: custom.module.rules }, plugins: config.plugins };
  },
};
