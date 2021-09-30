const gulp = require('gulp')
const terser = require('terser');
const gulpTerser = require('gulp-terser');
const wait = require('gulp-wait')
const concat = require('gulp-concat')
const config = require('../gulp.config.json')
const {argv} = require('yargs')

let directory = argv.output
if (directory === undefined) {
    directory = config.output
}

gulp.task('js-move', function () {
    let paths = []
    paths.push('./src/assets/js/**/*.js');
    return gulp.src(paths)
        .pipe(gulp.dest(`./${directory}/assets/js`));
});

function jsTask(scripts, filename) {
    let paths = []
    scripts.forEach((js) => {
        paths.push(js.replace('{directory}', directory))
    })
    return gulp.src(paths)
            .pipe(wait(500))
            .pipe(concat(filename))
            .pipe(gulpTerser({}, terser.minify))
            .pipe(gulp.dest(`./${directory}/assets/js/core`));
}

gulp.task('js-mini:libs', function() {
    const scripts = config.assets.js.core
    if (scripts.length) {
        return jsTask(scripts, 'libs.min.js')
    } else {
        return true
    }
})

gulp.task('js-mini:external-libs', function() {
    const scripts = config.assets.js.external
    if (scripts.length) {
        return jsTask(scripts, 'external.min.js')
    } else {
        return true
    }
})

gulp.task('js', gulp.series('js-move','js-mini:libs','js-mini:external-libs'))