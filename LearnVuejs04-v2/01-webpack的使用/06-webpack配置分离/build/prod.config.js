
const webpack = require('webpack')
const htmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    plugins: [
        new UglifyjsWebpackPlugin()//js压缩丑化
    ],

}

