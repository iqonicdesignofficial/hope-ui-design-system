const gulp = require('gulp')
const config = require('../gulp.config.json')
const handlebars = require('handlebars')
const gulpHandlebars = require('gulp-compile-handlebars')
const hbsLayouts = require('handlebars-layouts')
const rename = require('gulp-rename')
const {argv} = require('yargs')
var package = require('../package.json');
hbsLayouts.register(handlebars)
let directory = argv.output
let dev = argv.dev
if (directory === undefined) {
    directory = config.output
}

gulp.task('hbs', function () {
	const options = {
		ignorePartials: true,
        batch: ['./src/templates/']
    }

    const paths = [
        'src/templates/pages/**/*.hbs',
    ]

    return gulp.src(paths).pipe(gulpHandlebars({
            layout: config.layout,
            dev: dev,
            version: package.version,
            appName: config.appName,
            dark: config.dark,
          },options)
      ).pipe(rename({extname: ".html",})
      ).pipe(gulp.dest(`./${directory}`));
})

gulp.task('html-hbs', gulp.series('hbs'));