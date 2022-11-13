// vue.config.js
const path = require('path')
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 公共路径
  indexPath: 'index.html', // 相对于打包路径index.html的路径
  outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // 向 PWA 插件传递选项。
  chainWebpack: (config) => {
    config.resolve.symlinks(true) // 修复热更新失效
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin('html').tap((args) => {
      // 修复 Lazy loading routes Error
      args[0].chunksSortMode = 'none'
      return args
    })
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'))
  },
  css: {
    extract: IS_PROD,
    // requireModuleExtension: false,// 去掉文件名中的 .module
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/styles/common";` // 请一定注意这个分号的位置，因为这个我花费了好久时间
      }
    }
  },
  devServer: {
    host: '0.0.0.0', //指定使用地址,默认localhost，0.0.0.0代表可以被外界访问
    port: 6688, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
    hot: true, // hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，
    // 通过自动刷新整个页面来做到事实预览，
    // 开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览。
    // proxy: 'http://localhost:6688',   // 配置跨域处理,只有一个代理
    proxy: {
      // 配置多个跨域, 根据项目的情况进行配置
      '/api': {
        target: 'http://localhost:6686',
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/api2': {
        target: 'http://localhost:6688',
        changeOrigin: true,
        //ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          '^/api2': '/'
        }
      }
    }
  }
}
