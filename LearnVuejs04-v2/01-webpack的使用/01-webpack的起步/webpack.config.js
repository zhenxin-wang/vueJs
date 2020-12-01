const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'bundle.js',
      publicPath: 'dist/'
    } ,
    module: {
        rules: [//配置css样式
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
            {//配置less
                test:/\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            },
            {//配置图片
                test:/\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 13000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {//配置es6转换es5
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:['es2015']
                        }
                    }
                ]
            }
        ]
    }
}

