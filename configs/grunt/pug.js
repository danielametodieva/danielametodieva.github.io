var grunt = require('grunt');

module.exports = {
    task: {
        options: {
            pretty: grunt.option('target') !== 'prod',
            data: {
                debug: grunt.option('target') !== 'prod',
                pkg: grunt.file.readJSON('package.json'),
                profiles: grunt.file.readJSON('src/model/profiles.json'),
                content: grunt.file.readJSON('src/model/content.json')
            }
        },
        files: {
            'dist/index.html': 'src/markup/<%= pkg.name %>.pug'
        }
    }
};