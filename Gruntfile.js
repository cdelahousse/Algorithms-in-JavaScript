module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsdoc : {
      dist : {
        src: ['src/*.js', 'test/*.js'], 
        options: { destination: 'doc' }
      }
    },
    jshint : {
      files : [ 'src/**/*.js', 'tests/**/*.js' ],
      options : {
        jshintrc : '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', 'jshint');

};
