'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var options = {
    pkg: grunt.file.readJSON('package.json')
  };

  var config = require('load-grunt-configs')(grunt, options);
  grunt.initConfig(config);

  grunt.registerTask('dev', [
    'sass',
    'jshint',
    // 'karma',
    'watch'
  ]);

  grunt.registerTask('dist', [
    'clean',
    'concat',
    'sass:flipper',
    'jshint',
    'karma',
    'uglify'
  ]);

};
