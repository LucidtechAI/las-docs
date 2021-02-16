module.exports = (api) => {
  const isTest = api.env('test');
  if (isTest) {
    return {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/react', '@babel/typescript'],
      plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
    };
  }

  return {
    presets: [['@babel/preset-env', { targets: 'defaults' }], '@babel/react', '@babel/typescript'],
    plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
  };
};
