module.exports = function(grunt) {

  grunt.initConfig({
    // browserify: {
    //   '../dist/app.js': ['../js/quiz.js']
    // },
    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
        globals: {"Battlebot": true},
        browserify: true
      },
      files: ['../scripts/**/*.js']
    },
    watch: {
      javascripts: {
        files: ['../scripts/**/*.js'],
        tasks: ['jshint']
      }
    },
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'watch']);
}