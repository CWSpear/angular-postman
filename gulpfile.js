var gulp   = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass   = require('gulp-sass');
var bump   = require('gulp-bump');

gulp.task('bump', function(){
  gulp.src('./bower.json')
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

gulp.task('styles', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  gulp.src('./js')
    .pipe(concat('postman.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task('default', ['styles', 'scripts']);