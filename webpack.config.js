/*
The code written in this file may not be guranteed
to run since this part of the tutorial covers some high level concepts. 
*/

var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');


var config = {
  devtool: 'eval',
      entry: [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel']
    }, {
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'] // The module to load. "babel" is short for "babel-loader"
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }, 
    
    // LESS
    {
      test: /\.less$/,
      loader: 'style!css!less' 
    }, 

    // Inlining image & fonts
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }, {
      test: /\.woff$/,
      loader: 'url?limit=100000'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;