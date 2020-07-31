module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@atoms": "./components/atoms",
            "@molecules": "./components/molecules",
            "@utils": "./utils",
            "@fixtures": "./test/fixtures",
            "@navigation": "./navigation",
          },
        },
      ],
    ],
  };
};
