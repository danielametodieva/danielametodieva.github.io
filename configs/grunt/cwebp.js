module.exports = {
  task: {
    files: [{
      expand: true,
      cwd: 'dist/assets/images/projects/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'dist/assets/images/projects/'
    }]
  }
};