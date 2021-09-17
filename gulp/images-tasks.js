const gulp = require("gulp");
const config = require("../gulp.config.json");
const imagemin = require("gulp-imagemin");
const { argv } = require("yargs");
const gulpIf = require("gulp-if");

gulp.task("image", function () {
  let directory = argv.output;
  let mini = argv.mini
  let path = [`./src/assets/images/**/*.*`];
  if (directory === undefined) {
    directory = config.output;
  }
  if (mini === undefined) {
      mini = config.mini
  }
  return gulp
    .src(path)
    .pipe(gulpIf(mini == "true", imagemin()))
    .pipe(gulp.dest(`./${directory}/assets/images`));
});
