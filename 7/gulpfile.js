const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const rigger = require("gulp-rigger");
const browserSync = require('browser-sync').create();



gulp.task('css', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['>1%'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
});



gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(rigger())
        .pipe(gulp.dest('./'))
});



gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['css']);
    gulp.watch('./*.html', ['html']);
});



gulp.task('serve', function () {
    browserSync.init({
        proxy:"http://localhost",
        browser:"chrome",
        startPath:"/07",
        notify:false,
        open:false
    })
});



gulp.task('dev', gulp.parallel('watch', 'serve'));