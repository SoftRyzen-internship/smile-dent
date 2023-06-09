const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gcmq = require('gulp-group-css-media-queries');
const size = require('gulp-size');
const rename = require('gulp-rename');
const mode = require('gulp-mode')();
const testFolder = './src/projects/pages/';
const paths = require('../paths');
const fs = require('fs');
const cleanCSS = require('gulp-clean-css');

const css = done => {
  return gulp
    .src(paths.src.css)
    .pipe(plumber())
    .pipe(mode.development(sourcemaps.init()))
    .pipe(
      sass({
        sourceMap: true,
        precision: 3,
        errLogToConsole: true,
      }).on('error', sass.logError),
    )
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(mode.production(gcmq()))
    .pipe(
      mode.production(
        postcss([
          autoprefixer({
            grid: true,
            overrideBrowserslist: ['last 2 versions', 'IE >= 11', 'Safari >= 10'],
            cascade: true,
          }),
          cssnano(),
        ]),
      ),
    )
    .pipe(mode.development(sourcemaps.write()))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(paths.build.css));

  done();
};

module.exports = css;
