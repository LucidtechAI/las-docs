const custom = require('../webpack.config');
const execSync = require('child_process').execSync;
const webpack = require('webpack');

const version = execSync('git rev-parse --short HEAD', { encoding: 'ascii' });

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => !Array.isArray(rule.test) && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(new webpack.DefinePlugin({ ___TUTORIAL_VERSION___: JSON.stringify(version) }));
    return { ...config, module: { ...config.module, rules: custom.module.rules }, plugins: config.plugins };
  },
};
