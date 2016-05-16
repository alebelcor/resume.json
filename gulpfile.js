'use strict';

var gulp = require('gulp');
var jsonLint = require('gulp-jsonlint');
var jsonSchema = require('gulp-json-schema');

gulp.task('validate', function () {
  return gulp.src('resume.json')
    .pipe(jsonSchema('node_modules/resume-schema/schema.json'));
});

gulp.task('lint', function () {
  return gulp.src('resume.json')
    .pipe(jsonLint())
    .pipe(jsonLint.reporter());
});

gulp.task('test', [
  'lint',
  'validate'
]);

gulp.task('default', [
  'test'
]);
