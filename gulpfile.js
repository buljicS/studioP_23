'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function sass2css() {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest(paths.css.temp))
      .pipe(reload({ stream: true }));
  }

exports.sass2css = sass2css;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
};
