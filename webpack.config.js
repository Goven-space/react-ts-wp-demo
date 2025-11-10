const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './src/main.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: {
          loader: 'ts-loader',
          // options: {
          //   configFile: path.resolve(__dirname, 'tsconfig.app.json'),  // 指定 tsconfig 文件
          // },
        }, // 使用 ts-loader 处理 TypeScript 文件
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/, // 处理 .jsx 文件
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // 支持最新的 JS 特性
              '@babel/preset-react', // 支持 React JSX
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/, // 匹配 JavaScript 文件
        use: 'babel-loader', // 使用 Babel 转译 JavaScript 文件
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // 指定静态文件目录
    port: 3000, // 启动端口
    open: true, // 自动打开浏览器
    hot: true, // 启用热模块替换
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // 自动解析这些扩展名的文件
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@' 指向 'src' 文件夹
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Webpack App</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  `,
    }),
  ],
}
