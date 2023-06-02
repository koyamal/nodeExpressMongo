// import requireDir from "require-dir";
const load = require("require-dir");

console.log(load("./gulp/task", { recurse: true}));
// console.log(requireDir("./gulp", { recurse: true}));
