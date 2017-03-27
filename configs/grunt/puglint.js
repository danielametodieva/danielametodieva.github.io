module.exports = {
  task: {
    options: {
      config: {
        'extends': './configs/conventions/.pug-lintrc'
      }
    },
    src: ['src/markup/**/*.pug']
  }
};