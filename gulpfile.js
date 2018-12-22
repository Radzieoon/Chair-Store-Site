var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('sass', function() {
    return gulp.src('assets/scss/main.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css'));
});
gulp.task('watch', function() {
    gulp.start('sass');
    gulp.watch('assets/scss/**/*.scss', ['sass']);
});