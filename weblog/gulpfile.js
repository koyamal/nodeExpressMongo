console.log("yello");
// const gulp = require("gulp");
import gulp from "gulp";
import requireDir from "require-dir";
// const load = require("require-dir");

// console.log(requireDir("./gulp/task", { recurse: true}));
console.log(requireDir("./gulp", { recurse: true}));

gulp.task("default", () => {
  console.log("Hello, Gulp");
  console.log(process.env.NODE_ENV);
});
