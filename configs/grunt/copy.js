module.exports = {

    // Production images
    prod_images: {
        files: [{
            expand: true,
            cwd: 'src/images',
            src: ['logo.svg', 'cover.png'],
            dest: 'dist/'
        }]
    }

};