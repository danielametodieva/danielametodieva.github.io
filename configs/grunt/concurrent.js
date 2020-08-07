module.exports = {

  build: [
    // favicons
    ['realFavicon'],

    // markup
    ['pug'],

    // styles
    ['stripCssComments', 'sass'],

    // scripts
    ['modernizr', 'concat', 'uglify'],

    // images
    ['tinypng', 'cwebp']
  ],

  prod: [
    'htmlmin',
    'copy:prod_images'
  ],

  review: [
    'open:build',
    'open:repo',
    'open:prod'
  ]

};
