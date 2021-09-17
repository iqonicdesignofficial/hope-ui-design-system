const gulp = require('gulp')
const npmDist = require('gulp-npm-dist')
const config = require('../gulp.config.json')
const {argv} = require('yargs')

gulp.task('vendor', function() {
    let directory = argv.output
    if (directory === undefined) {
        directory = config.output
    }

    return gulp.src('./src/assets/vendor/**/*')
    .pipe(gulp.dest(`./${directory}/assets/vendor`))
})