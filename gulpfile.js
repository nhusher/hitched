const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');
const del          = require('del');
const gulp         = require('gulp');
const sourcemaps   = require('gulp-sourcemaps');
const sass = require('gulp-sass');

gulp.task('css', [], () =>
    gulp.src(['./scss/styles.scss'])
        .pipe(sourcemaps.init({ debug: true }))
        .pipe(sass({ errLogToConsole: true }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./', { includeContent: false, sourceRoot: '../scss/' }))
        .pipe(gulp.dest('./css')));

gulp.task('watch-css', [], () => {
  gulp.watch('./app/scss/**/*', ['css']);
});

gulp.task('minify-css', ['css'], () => {
  return gulp.src('./css/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('./css/'));
});

gulp.task('clean', [], () => del(['./js/hitched.build.js', './js/hitched.js.map', './css']));
