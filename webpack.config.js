const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash].js", 
        path: path.resolve(__dirname,"dist")
    },
    devServer: {
        // historyApiFallback: true,
        // contentBase: path.resolve(__dirname, 'index.js'),
        // open: true,
        // compress: true,
        hot: true,
        port: 3000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css', 
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader",
                    options: {
                        presets:["@babel/preset-env","@babel/preset-react"]
                    }
            }
            },    
            {
                test: /\.(svg|png|jpg|gif|jpeg|ico)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}