'use strict';

var gulp = require('gulp');


var src = './src/sound/*.+(mp3|ogg)',
  dist = './dist/sound';

function index() {
  return gulp.src(src)
    .pipe(gulp.dest(dist));
}


gulp.task('build-sound', index);
