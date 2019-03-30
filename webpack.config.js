const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {

   entry: "./src/index.js",
   output: {
      filename: "bundle.js",
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.svg$/,
            exclude: /node_modules/,
            use: {
               loader: 'svg-react-loader'
            }

         },
         {
            test: /\.scss$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     publicPath: '../'
                  }
               },
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.(gif|png|jpe?g)$/i,
            use: [
               'file-loader',
               {
                  loader: 'image-webpack-loader',
                  options: {
                     bypassOnDebug: true, // webpack@1.x
                     disable: true, // webpack@2.x and newer
                  },
               },
            ],
         }
      ]
   },
   node: {
      fs: "empty"
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: "./src/index.html",
         filename: "./index.html"
      }),
      new CopyWebpackPlugin([{ from: 'src/static/images', to: 'static/images' }]),
      new MiniCssExtractPlugin({
         // Options similar to the same options in webpackOptions.output
         // both options are optional
         filename: "main.css"
      }),
      new CleanWebpackPlugin(['dist']),
   ]
}; 