var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('css/custom.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

// Minify JS
gulp.task('minify-js', function() {
  return gulp.src('js/custom.js')
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('js'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

// Default task
gulp.task('default', ['minify-css', 'minify-js']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'minify-css', 'minify-js'], function() {
  gulp.watch('css/*.css', ['minify-css']);
  gulp.watch('js/*.js', ['minify-js']);
  gulp.watch('index.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
});
