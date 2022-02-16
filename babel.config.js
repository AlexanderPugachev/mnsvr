module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            models: "./src/models",
            store: "./src/store",
            navigation: "./src/navigation",
            dictionaries: "./src/models/dictionaries"
          }
        }
      ]
    ]
  };
};
