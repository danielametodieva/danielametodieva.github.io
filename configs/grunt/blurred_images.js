module.exports = {
    projects: {
        options: {
            rename: false,
            levels: [{
                level: 80,
                quality: 100
            }]
        },

        files: [{
            expand: true,
            src: ['*.*'],
            cwd: 'src/images/projects/',
            dest: 'src/images/projects/blurred'
        }]
    }
};