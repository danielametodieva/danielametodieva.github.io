var rewriteModule = require('http-rewrite-middleware');

module.exports = {
  server: {
    options: {
      port: 8000,
      base: './dist',
      livereload: false
    }
  }
};