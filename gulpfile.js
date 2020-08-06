const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const filesPath = {
  sass: './scss/**/*.scss',
  js: './js/**/*.js',
  html: './*.html',
};

// compile scss into css
function style() {
  return gulp.src(filesPath.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(filesPath.sass, style);
  gulp.watch(filesPath.html).on('change', browserSync.reload);
  gulp.watch(filesPath.js).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;