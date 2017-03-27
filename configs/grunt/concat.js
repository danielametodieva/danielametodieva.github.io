var grunt = require('grunt');

module.exports = {
  task: {
    options: {
      separator: grunt.option('target') !== 'prod' ? ';\n\n\n\n' : ';\n',
      stripBanners: grunt.option('target') !== 'prod' ? false : {force: true}
    },
    src: [
      // External libraries
      'src/scripts/modernizr-webp.min.js',
      'node_modules/css-browser-selector/css_browser_selector.min.js',
      'node_modules/fastclick/lib/fastclick.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
      'node_modules/memoryroll/dist/js/jquery.memoryroll.min.js',

      'src/scripts/jquery-ui.min.js',
      'node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',

      // Internal scripts
      'src/scripts/<%= pkg.name %>.js'
    ],
    dest: 'dist/assets/js/<%= pkg.name %>_bundle.js'
  }
};