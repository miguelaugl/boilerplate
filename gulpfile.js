const { src, dest, watch, parallel, series } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const clean = require('gulp-clean');
const fileInclude = require('gulp-file-include');

const filesPath = {
  sass: './src/scss/**/*.scss',
  js: './src/js/**/*.js',
  html: './src/templates/*.html',
  buildSass: ['./build/css/*.css', './build/css/*.css.map'],
  buildJs: './build/js/*.js',
  buildHtml: './build/*.html',
};

function cleanPath(path) {
  return src(path, { read: false })
    .pipe(clean());
};

function styles() {
  cleanPath(filesPath.buildSass);

  return src(filesPath.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./build/css'))
    .pipe(browserSync.stream());
};

function scripts() {
  cleanPath(filesPath.buildJs);

  return src(filesPath.js)
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(dest('./build/js'));
};

const cbString = new Date().getTime();
function cacheBustTask() {
  return src(['./src/templates/*.html'])
    .pipe(replace(/cb=\d+/g), 'cb=' + cbString)
    .pipe(dest('.'));
};

function includes() {
  cleanPath(filesPath.buildHtml);
  return src('./src/templates/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./build'));
}

function watchTask() {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });

  watch(filesPath.sass, styles);
  watch(
    [filesPath.html, filesPath.js]
  ).on('change', browserSync.reload);
};

exports.default = series(
  parallel(styles, scripts, includes),
  cacheBustTask,
  watchTask,
);
