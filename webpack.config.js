const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'drag-js.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 5000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
