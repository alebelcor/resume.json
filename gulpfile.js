'use strict';

var gulp = require('gulp');
var jsonLint = require('gulp-jsonlint');
var jsonSchema = require('gulp-json-schema');
var run = require('gulp-run');

gulp.task('validate', function () {
  return gulp.src('resume.json')
    .pipe(jsonSchema('node_modules/resume-schema/schema.json'));
});

gulp.task('lint', function () {
  return gulp.src('resume.json')
    .pipe(jsonLint())
    .pipe(jsonLint.reporter());
});

gulp.task('spellcheck', function (cb) {
  run('yaspeller resume.json').exec()
    .on('error', function (err) {
      console.error(err.message);
      cb();
    })
    .on('finish', cb);
});

gulp.task('test', [
  'lint',
  'validate',
  'spellcheck'
]);

gulp.task('default', [
  'test'
]);
