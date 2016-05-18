'use strict';

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  header = require('gulp-header');

var pkg = require('./package.json');

var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('clean', function () {
  return gulp.src('app/dist/*.js', { read: false })
    .pipe(clean());
});

gulp.task('concat', ['clean'], function () {
  return gulp.src('./app/js/**/*.js')
    .pipe(concat(pkg.name + ".js"))
    .pipe(gulp.dest('./app/dist/'));
});

gulp.task('uglify', ['concat'], function () {
  return gulp.src('./app/dist/**/*.js')
    .pipe(uglify())
    .pipe(concat(pkg.name + ".min.js"))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('./app/dist/'));
});

gulp.task('default', ['uglify']);