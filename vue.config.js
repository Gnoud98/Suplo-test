module.exports = {
    devServer: {
        compress: true,
        disableHostCheck: true,
      },
    publicPath: process.env.NODE_ENV === 'vuejs-blog'
      ? '/suplo-test/'
      : '/'
  }