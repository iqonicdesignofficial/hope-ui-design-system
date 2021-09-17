const gulp = require('gulp')

gulp.task('build', gulp.series([
    'clean',
    'style',
    'html-hbs',
    'vendor',
    'js',
    'font',
    'image'
]))