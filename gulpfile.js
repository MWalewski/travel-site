const gulp = require("gulp");
const watch = require("gulp-watch");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssvars = require("postcss-simple-vars");
const nested = require("postcss-nested");
const cssImport = require("postcss-import");

gulp.task("default", () => {
  console.log("You created a gulp task");
});

gulp.task("html", () => {
  console.log("Html task");
});

gulp.task("styles", () => {
  return gulp
    .src("./app/assets/styles/style.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", () => {
  watch("./app/index.html", () => {
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", () => {
    gulp.start("styles");
  });
});
