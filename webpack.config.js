const path = require('path');

module.exports = {
  entry: './src/index.js', // Your app's entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // The folder where Webpack will output the bundled files
    filename: 'bundle.js', // The name of the bundled file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Target .js and .jsx files
        exclude: /node_modules/, // Exclude the node_modules folder
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for React and modern JavaScript
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these file types
  },
};