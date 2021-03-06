const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const fs = require('fs')

let moreHtmls = []

const htmlRegExp = /.*\.html$/
const pagesRegExp = /.*\.pages$/

fs.readdirSync('./src')
  .forEach(name => {
    if (htmlRegExp.test(name)) {
      moreHtmls.push(new HtmlWebpackPlugin({
        filename: name,
        template: name
      }))
    }
    if (pagesRegExp.test(name)) {
      fs.readdirSync(`./src/${name}`)
        .forEach(subName => {
          if (htmlRegExp.test(subName)) {
            moreHtmls.push(new HtmlWebpackPlugin({
              filename: `${name.replace('.pages', '')}/${subName}`,
              template: `${name}/${subName}`
            }))
          }
        })
    }
  })

const images = fs.readdirSync('./src/static/img/')
  .filter(file => file.match(/.*\.(jpg|jpeg|png|svg|gif)$/))
  .map(i => './static/img/' + i)

const fonts = fs.readdirSync('./src/static/fonts')
  .filter(file => file.match(/.*\.(eot|svg|ttf|woff|woff2)$/))
  .map(f => './static/fonts/' + f)

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    './js/index.js',
    ...images,
    ...fonts,
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            outputPath: 'js/',
          },
        },
      },
      // Fonts loader
      {
        test: /\.(woff(2)?|woff|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/fonts/',
          },
        }],
      },
      // Images loader
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/img/',
          },
        }],
      },
      // HTML loader
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false,
            removeComments: false,
            collapseWhitespace: false,
            attrs: false,
          },
        }],
      },
      // Sass loader
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
      // File loader for all but not js, json, html, scss, images and fonts!
      {
        loader: 'file-loader',
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise be processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        exclude: [
          /\.(js|mjs|jsx|ts|tsx)$/,
          /\.html$/,
          /\.json$/,
          /\.jpg/,
          /\.jpeg/,
          /\.png/,
          /\.gif/,
          /\.*css/,
          /\.(woff(2)?|woff|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/
        ],
        options: {
          name: 'static/media/[name].[ext]',
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,   //Tell dev-server which port to run
    open: true,   // to open the local server in browser
    openPage: 'category_page.html',

    //serve from 'dist' and 'img' folder
    contentBase: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'dist/static')
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // cleans the dist folder
    new ExtractTextPlugin('css/styles.css'), // extracts css to dist/css/styles.css
    ...moreHtmls
  ],
}
