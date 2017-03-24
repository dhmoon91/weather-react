module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',

  },
  module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          },
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/
        }
      ]

  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
