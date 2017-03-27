module.exports = {
  options: {
    apiKey: "HCCemT783QHswsDBalF_iuVFuNVw2hra",
    stopOnImageError: true,
    checkSigs: true,
    sigFile: 'dist/assets/images/projects/file_sigs.json'
  },

  projects: {
    src: ['**/*.jpg'],
    cwd: 'src/images/projects/',
    dest: 'dist/assets/images/projects/',
    expand: true
  }
};