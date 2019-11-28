modules.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'asserts': '@asserts',
        'common': '@common',
        'components': '@components',
        'network': '@network',
      }
    }
  }
}