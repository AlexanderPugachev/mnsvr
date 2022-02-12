module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            components: "./components",
            screens: "./screens",
            models: "./models",
            store: "./store",
          }
        }
      ],
    ]
  };
};
