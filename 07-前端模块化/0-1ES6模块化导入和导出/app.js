import { flag, sum } from "./source.js.js";

if (flag) {
  console.log(sum(10, 20));
}

import { height, mul } from "./source.js.js";

console.log(height);
console.log(mul(2, 3));

import P from "./source.js.js";

const p1 = new P("Michael", 31);
console.log(p1.getInfo());

// 全部导出, 这个时候data保存的是所有导出变量的一个对象
import * as data from "./source.js.js";
console.log(data.height);
