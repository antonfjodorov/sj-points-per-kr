const path       = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    background: path.resolve(__dirname, "../src/background.ts"),
    clearStorage: path.resolve(__dirname, "../src/scripts/clearStorage.ts"),
    onclick: path.resolve(__dirname, "../src/scripts/onclick.ts")
  },
  output: {
    path: path.join(__dirname, "../dist"),
    clean: true
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: "static",
      }]
    }),
  ],
};
