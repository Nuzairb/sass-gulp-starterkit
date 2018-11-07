var gulp = require('gulp');

var styleSRC = './src/scss/style.css';
var styleDIST = './dist/css/';

gulp.task('styles', function() {
  gulp.src( styleSRC )
    .pipe( rename( {suffix: 'min '} ) )
    .pipe( gulp.dist( styleDIST ) );
});