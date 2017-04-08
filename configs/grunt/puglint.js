module.exports = {
  task: {
    options: {
      config: {
        'extends': './configs/linters/.pug-lintrc'
      }
    },
    src: ['src/markup/**/*.pug']
  }
};