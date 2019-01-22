'use strict';

const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprites');

gulp.task('sprites', function() {
  return gulp.src(`./src/assets/*.svg`)
    .pipe(svgSprite({
      svg: {
        sprite: 'apto-icon-sprite.svg'
      },
      preview: false
    }))
    .pipe(gulp.dest(`./dist`));
});

gulp.task('default', ['sprites']);
