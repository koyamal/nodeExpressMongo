"use strict";
const obj = { prop: 0 };

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");

console.log(descriptor);


const obj2 = {};

Object.defineProperty(obj2, "prop", {
  value: 0,
  writable: true,
  configurable: true,
});

Object.defineProperty(obj2, "prop", {
  enumerable: true,
});

obj2.prop = 2;

const descriptor2 = Object.getOwnPropertyDescriptor(obj2, "prop");

console.log(descriptor2);
