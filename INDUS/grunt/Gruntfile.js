'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '',
    clean: {
      src: ['app/dist/*.js']
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['app/js/**/*.js'],
        dest: 'app/dist/<%= pkg.name %>.js'
      },
      compress: {}
    },
    uglify: {
      options: {
        banner: '/**\n' +
        '* <%= pkg.name %> - <%= pkg.description %>\n' +
        '* @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* @link v<%= pkg.homepage %>\n' +
        '* @license <%= pkg.license %>\n*/\n'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'app/dist/<%= pkg.name %>.min.js'
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['clean', 'concat', 'uglify']);

};