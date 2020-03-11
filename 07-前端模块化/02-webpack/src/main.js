// CommonJS引入mathUtils.js

const { add, mul } = require("./mathUtils.js");

console.log(add(1, 2));
console.log(mul(3, 4));

// ES6引入info.js
import { name, age } from "./info.js";
console.log(name);
console.log(age);
