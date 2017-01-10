'use strict';

// Учебный галпфайл-подсказка для занятия по автоматизации

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const rename = require('gulp-rename');


gulp.task('sass', function(){
  return gulp.src('./style.scss')
    .pipe(sass())
    .pipe(rename('style.css'))
    .pipe(postcss([
        autoprefixer({ browsers: ['last 2 version'] }),
        mqpacker({ sort: true }),
    ]))
    .pipe(gulp.dest('./css'));
});


gulp.task('serve', gulp.series('sass', function() {

  gulp.watch(
    './style.scss',
    gulp.series('sass')
  );

}));


gulp.task('default',
  gulp.series('serve')
);