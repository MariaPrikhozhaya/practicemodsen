const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web'; // в режиме разработки browserslist не используется
if (process.env.NODE_ENV === 'production') { // Режим production, если 
  // при запуске вебпака было указано --mode=production
  mode = 'production';
  target = 'browserslist'; // в продакшен режиме используем browserslist
}

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css', // Формат имени файла
  }), // Добавляем в список плагинов
];

module.exports = {
  mode, // Сокращенная запись mode: mode в ES6+
  target,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут
    // складываться в dist/assets
    clean: true,
  },
  
  devServer: {
    hot: true,
  },

  module: {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },// Добавляем загрузчик для html
      {
        test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }, // Добавляем загрузчики стилей
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource', // В продакшен режиме
        // изображения размером до 8кб будут инлайнится в код
        // В режиме разработки все изображения будут помещаться в dist/assets
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // не обрабатываем файлы из node_modules
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // Использование кэша для избежания рекомпиляции
            // при каждом запуске
            presets: [
              '@babel/preset-env', // You already have this one
              '@babel/preset-react',
            ], // Правильно определяем presets
          },
        },
      },
    ],
  },
  plugins,
};