var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        app: path.resolve(__dirname, 'app/main.js'),
        vendors: ['react']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,

            exclude: [node_modules_dir],
            loader: 'babel'
        }, {
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
    }, 
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
}

module.exports = config
