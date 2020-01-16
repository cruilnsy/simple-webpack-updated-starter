const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html'
});

module.exports = {
   entry: './src/index.js',
   output: {
       path: __dirname,
       filename: './dist/bundle.js'
   },
   module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },

   plugins: [
       htmlWebpackPlugin
   ],
   devServer: {
       contentBase: path.join(__dirname, './dist'),
       open: true,
       port: 3000
   }
}
