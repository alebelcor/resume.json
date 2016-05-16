'use strict';

var gulp = require('gulp');
var jsonLint = require('gulp-jsonlint');

gulp.task('lint', function () {
  return gulp.src('resume.json')
    .pipe(jsonLint())
    .pipe(jsonLint.reporter());
});

gulp.task('test', [
  'lint'
]);

gulp.task('default', [
  'test'
]);
