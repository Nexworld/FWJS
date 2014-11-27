
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat')
	uglify = require('gulp-uglify');

gulp.task('clean', function () {
  return gulp.src('app/dist/*.js', {read: false})
    .pipe(clean());
});

// uglify task
gulp.task('js', ['clean'], function() {
  // main app js file
  gulp.src('./app/js/**/*.js')
  .pipe(uglify())
  .pipe(concat("app.min.js"))
  .pipe(gulp.dest('./app/dist/'));

});

gulp.task('default', ['js']);