var grunt = require('grunt');

module.exports = {
    task: {
        options: {
            separator: grunt.option('target') !== 'prod' ? ';\n\n\n\n' : ';\n',
            stripBanners: grunt.option('target') !== 'prod' ? false : {force: true}
        },
        src: [
            // External libraries
            'bower_components/css_browser_selector/css_browser_selector.min.js',
            'bower_components/fastclick/lib/fastclick.js',
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
            'bower_components/memoryroll/dist/js/jquery.memoryroll.min.js',

            // Internal scripts
            'src/scripts/jquery-ui.min.js',
            'src/scripts/<%= pkg.name %>.js'
        ],
        dest: 'dist/assets/js/<%= pkg.name %>_bundle.js'
    }
};