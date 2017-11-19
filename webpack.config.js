const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: APP_DIR,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}