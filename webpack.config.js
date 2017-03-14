module.exports = {
  entry: './index.js',   // entry point into the application and start of dependency graph
  output: {
    filename: 'index.bundle.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],   // .json required for require('package')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
  target: 'electron-renderer',
};
