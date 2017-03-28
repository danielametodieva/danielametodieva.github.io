module.exports = {
  options: {
    jshintrc: 'configs/linters/.jshintrc',
    debug: false,
    ignores: [
      'src/scripts/jquery-ui.min.js',
      'src/scripts/modernizr-webp.min.js'
    ]
  },

  target: {
    src: ['src/scripts/**/*.js']
  }
};