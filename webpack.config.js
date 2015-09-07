var path = require('path');

config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      exclude: /node_modules/,
      loader: 'babel' // The module to load. "babel" is short for "babel-loader"
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
  }
};

module.exports = config;