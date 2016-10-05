var path = require('path')
// 定义文件的基本路径
var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH)
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist')

module.exports = {
  debug: true,
  entry: APP_PATH + "\\main.js",
  output: {
    path: BUILD_PATH,
    filename: 'build.js'
  }, 
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /.(png|jpg|eot|svg|ttf|woff)/,
        loader: 'url?limit=40000'
      }
    ]
  }
 
}