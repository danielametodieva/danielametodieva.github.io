module.exports = function(grunt) {
  var path = require('path'),
      pkg = grunt.file.readJSON('package.json'),
      env = grunt.option('target') || 'dev',
      banner = '/*! <%= pkg.title || pkg.name %>\n' +
        '* <%= pkg.homepage%> (v<%= pkg.version %>)\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> */\n';

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'configs/grunt'),
    data: {
      pkg: pkg,
      banner: banner,
      env: env
    }
  });

  grunt.registerTask('build', function() {
    grunt.task.run(['concurrent:build']);

    if (env === 'prod') {
      grunt.task.run(['concurrent:prod']);
    }
  });
};