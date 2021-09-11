const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "development", 
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash:4].js", 
        path: path.resolve( __dirname,"dist" ),
        // publicPath: "/dist"
    },
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin({ test: /\.(js|jsx)$/ })],
    },
    devtool: "source-map",
    devServer: {
        hot: true,
        port: 8899,
    },
    plugins: [
        new HTMLWebpackPlugin({ template: "./src/index.html" }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:4].css', 
        }),
        new CopyPlugin({
            patterns: [
            { from: "./src/assets", to: "./dist" },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader",'postcss-loader' ]
            },
            {
                test: /\.s[ac]ss$/i,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader','postcss-loader', ]
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {loader: "babel-loader",
                    options: {
                        presets:["@babel/preset-env","@babel/preset-react"]
                    }
            }
            },    
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                type: 'asset/resource',
            }
        ]
    }
}

