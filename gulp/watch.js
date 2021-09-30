const gulp = require('gulp')
const browserSync = require('browser-sync').create();
const config = require('../gulp.config.json')
const {argv} = require('yargs')

gulp.task('watch', gulp.series(
    'clean',
    'style',
    'html-hbs',
    'vendor',
    'js',
    'font',
    'image',
    function () {
        let directory = argv.output
        if (directory === undefined) {
            directory = config.output
        }
        browserSync.init({
            server: {
                baseDir: `./${directory}`,
                index: "index.html"
            },
            reloadDelay: 1000
        });

        gulp.watch('./src/**/*.scss', gulp.series('style:main')).on('change', browserSync.reload);
        gulp.watch('./src/**/*.js', gulp.series('js-move')).on('change', browserSync.reload);
        gulp.watch('./src/**/*.hbs', gulp.series('html-hbs')).on('change', browserSync.reload);
    }
));

module.exports = browserSync
