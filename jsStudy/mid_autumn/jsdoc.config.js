'use strict'

module.exports = function() {
  return {
    plugins: ['jsdoc-vue'],
    source: {
      includePattern: '.+\\.(jsdoc|js|vue)$'
    }
  }
}