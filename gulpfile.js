var gulp = require('gulp');
var rename = require('gulp-rename');

var styleSRC = './src/scss/style.css';
var styleDIST = './dist/css/';

gulp.task('style', function() {
  gulp.src( styleSRC )
    .pipe( rename( {suffix: '.min'} ) )
    .pipe( gulp.dest( styleDIST ) );
});