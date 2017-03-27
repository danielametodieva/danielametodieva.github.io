var grunt = require('grunt');

module.exports = {
  task: {
    options: {
      banner: grunt.option('target') !== 'prod' ? '' : '<%= banner %>\n',
      preserveComments: false,
      sourceMap: grunt.option('target') !== 'prod',
      compress: {
        drop_debugger: grunt.option('target') === 'prod',
        drop_console: grunt.option('target') === 'prod'
      }
    },
    src:  'dist/assets/js/<%= pkg.name %>_bundle.js',
    dest: 'dist/assets/js/<%= pkg.name %>.js'
  }
};