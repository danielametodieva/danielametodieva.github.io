var grunt = require('grunt');

module.exports = {
    task: {
        options: {
            require: [
                'sass-css-importer',
                'sass-json-vars',
                'compass/import-once/activate',
                'sass-globbing'
            ],
            force: true,
            outputStyle: 'compressed',
            sourcemap: grunt.option('target') !== 'prod',
            specify: 'src/styles/<%= pkg.name %>.scss',
            sassDir: 'src/styles',
            javascriptsDir: 'src/scripts',
            cssDir: 'dist/assets/css',
            imagesDir: 'src/images',
            banner: grunt.option('target') !== 'prod' ? false : '<%= banner %>'
        }
    }
};