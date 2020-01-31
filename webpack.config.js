const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpritePlugin = require("svg-sprite-loader/plugin")

module.exports = (env, argv) => {
  const config = {
    devtool: "inline-source-map",
    sourceMap: true
  }
  if (argv.mode === "production") {
    config.devtool = "";
    config.sourceMap = false;
  }
  return {
    entry: {
      main: path.resolve(__dirname, "src/main.js")
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: ["vue-style-loader", "css-loader", "postcss-loader"]
        },
        {
          enforce: "pre",
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {
            loaders: {
              scss: [
                {
                  loader: "vue-style-loader"
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: config.sourceMap,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: config.sourceMap,
                  },
                }
              ]
            }
          }
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.svg$/,
          loader: "svg-sprite-loader",
          options: {
            extract: true,
          }
        },
        {
          test: /favicon\.ico$/,
          loader: "file-loader",
          options: {
            name: "favicon.ico"
          }
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: "file-loader",
          options: {
            name: "img/[name].[ext]?[hash]"
          }
        },
      ]
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      },
      extensions: ["*", ".js", ".vue", ".json"]
    },
    performance: {
      hints: false
    },
    devtool: config.devtool,
    plugins: [
      new HtmlWebpackPlugin({
        title: "Todos App",
        filename: "index.html",
        template: path.resolve(__dirname, "src/index.html")
      }),
      new SpritePlugin({ plainSprite: true })
    ],
    devServer: {
      historyApiFallback: true,
      noInfo: false,
      overlay: true,
      contentBase: path.join(__dirname, 'dist'),
      port: 9000,
    },
  }
};