'use strict'
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MEIPIAN_NODE_ENV = process.env.MEIPIAN_NODE_ENV

function cssLoaders(options) {
  let context = this
  let generateLoaders = function(loader, loaderOptions) {
    const loaders = [...context.cssLoader()]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {
      indentedSyntax: true
    }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

/**
 * meipian.config.js for context
 * @param  {Object} mpconf meipian runtime congfig
 * @return {Object}        webpack config object
 */
module.exports = function(mpconf) {
  let config = {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    externals: {
      'Hook': 'hook'
    },
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: cssLoaders.apply(mpconf, [{
            sourceMap: mpconf.isMap,
            extract: mpconf.isExtract
          }]),
          cssSourceMap: mpconf.isMap,
          cacheBusting: mpconf.isMap ? false : true,
          transformToRequire: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      }]
    }
  }

  //Local server node_moudles
  if ('server' === MEIPIAN_NODE_ENV) {
    config.plugins = [
      new webpack.ProvidePlugin({
        Vue: ['vue/dist/vue.esm.js', 'default'],
        _: 'lodash',
        axios: 'axios'
      })
    ]
  } else {
    config.externals['Vue'] = 'vue'
    config.externals['_'] = 'lodash'
    config.externals['axios'] = 'axios'
  }

  return config
}