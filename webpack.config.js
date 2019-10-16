// output.pathに指定するパスがOSによって異なることを
// 防ぐためにpathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定（モードを指定しないとwebpack実行時に警告が出る）
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: path.resolve(__dirname, 'docs/js')
    // ブラウザからバンドルにアクセスする際のパス
    // docsPath: '/js/'
  },
  // webpack-dev-serverの設定
  devServer: {
    // サーバー起動時にブラウザを自動的に起動する
    open: true,
    // ポート番号
    port: 8888,
    // コンテンツのルートディレクトリ
    // 今回の場合、ブラウザ起動時に ./docs/index.html が開かれる
    contentBase: './docs'
  }
};
