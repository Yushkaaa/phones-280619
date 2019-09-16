const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'none',
    entry: './src/app', //откуда
    output: { //куда
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' //main.bundle.js
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new CopyPlugin([
            {from: './src/assets', to: './'},
        ])
    ]
};