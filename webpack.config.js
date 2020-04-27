const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: [
          '/node_modules'
        ],
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist'),
  }
}