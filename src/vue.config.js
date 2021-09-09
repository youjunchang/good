module.exports = {
    lintOnSave: false,
    publicPath:'',
    devServer: {
        proxy: {
          // 配置跨域
          '/api': {
            target: 'http://www.sohu.com',
            ws: true,
            changOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
  },
  }