const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/client/index.jsx",
    output: {
        path: path.resolve(__dirname, "public"),
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camelCase"
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|woff|ttf)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: `<div id="app"></div>`
        })
    ]
}