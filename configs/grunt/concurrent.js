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
    ['blurred_images', 'tinypng', 'cwebp', 'clean:images']
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