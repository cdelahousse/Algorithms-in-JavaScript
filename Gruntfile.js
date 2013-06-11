module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsdoc : {
      dist : {
        src: ['src/*.js', 'test/*.js'], 
        options: { destination: 'doc' }
      }
    } 
  });

  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('default', 'jsdoc');

};
