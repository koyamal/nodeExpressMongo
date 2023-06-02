const gulp = require("gulp");

gulp.task("default", () => {
  console.log("Hello, Gulp");
  console.log(process.env.NODE_ENV);
});
