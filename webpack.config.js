module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: './app.js',
    html: './index.html'
  },

  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
    ],
  }
};
