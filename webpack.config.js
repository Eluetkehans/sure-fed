
// Tooling
const webpack = require("webpack")
const path = require("path");

// Plugins
const autoprefixer = require("autoprefixer");
const LoaderOptionsPlugin = webpack.LoaderOptionsPlugin
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Target
const indexTemplate = path.resolve("src", "index.html")

// Variables
const distDir = path.resolve("public")
const indexPage = "index.html"
const webpackMode = process.env.DEV_MODE==='true' ? 'development' : 'production'
const shouldBePrerendered = !webpackMode === 'development'

// Dev Server
let devServer = {}
if( webpackMode === 'development' ) {
  devServer = {
    contentBase: distDir,
    compress: false,
    port: 3000,
    open: true,
    openPage: indexPage,
  }
}

module.exports = {
  devServer,
  mode: webpackMode,
  resolve: {
    extensions: ["*", ".mjs", ".gq", ".graphql", ".js", ".jsx", ".json"]
  },
  devtool: webpackMode == "development" ? "eval-source-map" : "",
  entry: {
    app: [
      path.resolve("src","index.jsx")
    ],
  },
  target: "web",
  output: {
    path: distDir, // Note: Physical files are only output by the production build task `npm run build`.
    filename: '[name]-[contenthash].js',
    chunkFilename: '[name]-[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: "file-loader" },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]"
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/i,
        loader: "file-loader?name=[name].[ext]"
      },
      { test: /\.ico$/, loader: "file-loader?name=[name].[ext]" },
      {
        test: /\.scss$/,
        exclude: path.resolve('node_modules'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },

  plugins: [
    new HtmlPlugin({
      filename: indexPage,
      template: `${shouldBePrerendered ? '!!prerender-loader?string!' : ''}${indexTemplate}`,
    }),
    new LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        sassLoader: {
          includePaths: [path.resolve("src", "scss")]
        },
        context: "/",
        postcss: () => [autoprefixer]
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[name]-[contenthash].css'
    }),
  ],
};
