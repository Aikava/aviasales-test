const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDev = process.env.NODE_ENV === 'dev';

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: "./src/client/index.jsx",
    output: {
        path: path.resolve(__dirname, "../server/public"),
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
            templateContent: `<div id="app"></div>`,
            meta: {
                viewport: "width=device-width",
            }
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 9000,
        client: {
            overlay: {
                warnings: false,
                errors: true
            }
        }
    }
}
