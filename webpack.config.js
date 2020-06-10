const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = ["amd", "umd", "commonjs2", "window"].map(function (
  libraryTarget
) {
  return {
    entry: "./src/index.js",
    target: "node",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `transformar-${libraryTarget}.js`,
      library: "transformar",
      libraryTarget,
    },
    module:{
      rules:[
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use:'babel-loader'
        }
      ]
    },
    externals: [
      nodeExternals({
        modulesDir: path.resolve(__dirname, "node_modules"),
      }),
    ],
  };
});
