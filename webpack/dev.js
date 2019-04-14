const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./base");

module.exports = merge(base, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [require.resolve('style-loader'), require.resolve('css-loader')],
      }
    ],
  },
  devServer: {
    hot: true,
    inline: true,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
