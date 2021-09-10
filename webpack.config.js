const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

let mode = "development";
let target = "web";
if(process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserlist"
}

module.exports = {
    mode: mode, 
    target: target,
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
        // historyApiFallback: true,
        // contentBase: "./dist",
        // open: true,
        // overlay: true,
        // compress: true,
        hot: true,
        port: 7777
    },
    plugins: [
        new HTMLWebpackPlugin({ template: "./src/index.html" }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:4].css', 
        }),
        new CopyPlugin({patterns: [
            { from: "./src/assets", to: "assets" },
        ]
        } ),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,"css-loader",'postcss-loader' ]
            },
            {
                test: /\.s[ac]ss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader','postcss-loader', ]
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource',
            }
        ]
    }
}
// }








