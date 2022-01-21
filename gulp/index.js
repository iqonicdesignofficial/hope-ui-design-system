'use strict';
const gulp = require('gulp')
const browserSync = require('browser-sync').create();

require('./hbs-helpers')
require('./clean-task')
require('./html-tasks')
require('./css-tasks')(browserSync)
require('./js-tasks')
require('./fonts-task')
require('./images-tasks')
require('./vendor-tasks')
require('./watch')(browserSync)
require('./build')

gulp.task('default', gulp.series('watch'))
