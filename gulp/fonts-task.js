const gulp = require('gulp')
const {argv} = require('yargs')
const config = require('../gulp.config.json')

gulp.task('font', function () {
    let directory = argv.output
    if (directory === undefined) {
        directory = config.output
    }
    const fonts = config.assets.fonts
    let paths = []
        fonts.forEach((s) => {
            let st = s.replace('{directory}', directory)
            paths.push(st)
        })
    return gulp.src(paths)
        .pipe(gulp.dest(`./${directory}/assets/fonts`));
});