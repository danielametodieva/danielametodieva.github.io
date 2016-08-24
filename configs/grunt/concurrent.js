module.exports = {

    build: [
        // favicons
        ['realFavicon'],

        // markup
        ['pug'],

        // styles
        ['compass'],

        // scripts
        ['concat', 'uglify'],

        // images
        ['blurred_images', 'tinypng', 'clean:images']
    ],

    prod: [
        'htmlmin'
    ],

    review: [
        'open:build',
        'open:repo',
        'open:prod'
    ]

};