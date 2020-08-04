var path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.js'
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  devServer: {
    port: '6501',
    contentBase: ['./docs'],
    historyApiFallback: true,
    open: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@redux': path.resolve(__dirname, 'app/redux'),
      '@common-components': path.resolve(__dirname, 'app/components'),
    },
  },
};
