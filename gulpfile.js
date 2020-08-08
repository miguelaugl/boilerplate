const { src, dest, watch, parallel, series } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const fileInclude = require('gulp-file-include');
const imagemin = require('gulp-imagemin');

const filesPath = {
  sass: './src/scss/**/*.scss',
  js: './src/js/**/*.js',
  html: './src/pages/*.html',
  components: './src/pages/components/*.html',
  images: './src/images/*.{gif,png,jpg,svg}',
  buildSass: './build/css/*.css',
  buildJs: './build/js/*.js',
  buildHtml: './build/*.html',
  buildImages: './build/images',
};

function cleanPath(path) {
  return src(path, { read: false }).pipe(clean());
}

function styles() {
  cleanPath(filesPath.buildSass);

  return src(filesPath.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([cssnano()]))
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    .pipe(dest('./build/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  cleanPath(filesPath.buildJs);

  return src(filesPath.js)
    .pipe(concat('bundle.js'))
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(dest('./build/js'))
    .pipe(browserSync.stream());
}

function cacheBuster() {
  const cbString = new Date().getTime();

  return src([filesPath.buildHtml])
    .pipe(replace(/cache_bust=\d+/g, `cache_bust=${cbString}`))
    .pipe(dest('./build'));
}

function includes() {
  cleanPath(filesPath.buildHtml);
  return src([filesPath.html])
    .pipe(
      fileInclude({
        prefix: '@',
        basepath: './src/pages/components',
      }),
    )
    .pipe(dest('./build'));
}

function imageMin() {
  return src(filesPath.images)
    .pipe(
      imagemin([
        // png
        imagemin.optipng({
          optimizationLevel: 2,
        }),
        // gif
        imagemin.gifsicle({
          interlaced: true,
          optimizationLevel: 3,
        }),
        // svg
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
            },
          ],
        }),
        // jpg lossless
        imagemin.mozjpeg({
          progressive: true,
        }),
      ]),
    )
    .pipe(dest('./build/images'));
}

function copyImagesToBuild() {
  return src(filesPath.images).pipe(dest(filesPath.buildImages));
}

function watcher() {
  browserSync.init({
    server: {
      baseDir: './build',
    },
  });

  watch(filesPath.sass, styles);
  watch(filesPath.js, scripts);
  watch([filesPath.html, filesPath.components]).on(
    'change',
    series(includes, cacheBuster, browserSync.reload),
  );
  watch(filesPath.images, copyImagesToBuild);
}

exports.build = series(
  parallel(styles, scripts, includes, imageMin),
  cacheBuster,
);

exports.default = series(
  parallel(styles, scripts, includes, copyImagesToBuild),
  cacheBuster,
  watcher,
);
