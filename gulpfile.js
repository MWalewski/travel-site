const gulp = require("gulp");
const watch = require("gulp-watch");

gulp.task("default", () => {
  console.log("You created a gulp task");
});

gulp.task("html", () => {
  console.log("Html task");
});

gulp.task("styles", () => {
  console.log("Styles task");
});

gulp.task("watch", () => {
  watch("./app/index.html", () => {
    gulp.start("html");
  });

  watch("./app/assets/css/**/*.css", () => {
    gulp.start("styles");
  });
});
