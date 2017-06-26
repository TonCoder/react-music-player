function getEntrySources(sources, isProduction) {
    if (!isProduction) {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }

    return sources;
}

module.exports = {
  entry: getEntrySources([
        './src/index.js'
  ], false),
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
