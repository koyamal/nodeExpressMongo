// const config = require("../config.js");
import {config} from "../config.js";
import gulp  from "gulp";
// const gulp = require("gulp");
// const del = require("del");

// const {deleteSync} = import("del");

import {deleteSync} from "del";
console.log(deleteSync);

gulp.task("clean-log", () => {
  const deAsync = deleteSync(`${config.path.log}/**/*`);
  return deAsync;
});
