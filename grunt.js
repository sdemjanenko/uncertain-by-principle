/*
 * grunt-contrib-uglify
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    compass: {
      vendor: {
        src: 'vendor/scss',
        dest: 'assets/stylesheets',
        outputstyle: 'compressed',
        linecomments: false,
        relativeassets: true,
        debugsass: false
      },
      lib: {
        src: 'lib/scss',
        dest: 'assets/stylesheets',
        outputstyle: 'compressed',
        linecomments: false,
        relativeassets: true,
        debugsass: false
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks( 'grunt-compass' )

  // By default, lint and run all tests.
  grunt.registerTask('default', ['compass:vendor', 'compass:lib']);

};

