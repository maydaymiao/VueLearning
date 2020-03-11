let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(1, 2));
}

// 导出方式一：先定义，再导出
export { flag, sum };

// 导出方式二：直接定义并导出
export var height = 1.83;
export function mul(num1, num2) {
  return num1 * num2;
}

// 导出方式三：default
// 通过default方式导出的模块，在引用时可以自定义新的名称，并且不需要加{}，但是一个模块只能有一个default
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `My name is ${this.name}, and I am ${this.age} years old!`;
  }
}
