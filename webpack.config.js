const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.glsl$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-shader-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  devtool: "source-map",
  devServer: {
    contentBase: './dist/',
  },
}