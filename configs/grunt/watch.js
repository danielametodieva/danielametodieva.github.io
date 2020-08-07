module.exports = {
  options: {
    livereload: false,
    event: ['changed', 'added', 'deleted']
  },

  markup: {
    files: ['src/markup/**/*.pug', 'src/model/**/*.json'],
    tasks: ['puglint', 'clean:markup', 'pug']
  },

  styles: {
    files: ['src/styles/**/*.scss', 'src/images/profiles/*.*', 'src/images/toggles/*.*', 'src/model/profiles.json'],
    tasks: ['sasslint', 'clean:styles', 'stripCssComments', 'sass']
  },

  scripts: {
    files: ['src/scripts/**/*.js'],
    tasks: ['jshint', 'clean:scripts', 'modernizr', 'concat', 'uglify']
  },

  images: {
    files: ['src/images/projects/*.*'],
    tasks: ['tinypng', 'cwebp']
  },

  favicons: {
    files: ['src/images/favicon.png'],
    tasks: ['realFavicon']
  }
};
