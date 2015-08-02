'use strict';

var gulp = require('gulp');


var src = './src/sound/*.+(mp3|ogg)',
  dist = './dist/img';

function index() {
  return gulp.src(src)
    .pipe(gulp.dest(dist));
}


gulp.task('build-img', index);
