'use strict';
const gulp = require('gulp')

require('./hbs-helpers')
require('./clean-task')
require('./html-tasks')
require('./css-tasks')
require('./js-tasks')
require('./fonts-task')
require('./images-tasks')
require('./vendor-tasks')
require('./watch')
require('./build')

gulp.task('default', gulp.series('watch'))
