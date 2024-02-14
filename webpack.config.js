module.exports = (env) => {
  env = env || 'dev';
  process.env.ENV = env;

  return require(`./webpack.config.${env}.js`)
};
