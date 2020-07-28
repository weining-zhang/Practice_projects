let name = '小明'
let age = 18
let flag = true

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(20 ,30));
}

// 1、导出方式一：
export {
  flag, sum
}

// 2、导出方式二：
export let num1 = 1000;
export let height = 1.88

// 3、导出函数/类
export function mul(num1, num2) {
  return num1 * num2;
}

export class person {
  run() {
    console.log('在奔跑');
  }
}

// 4、导出default, export default在同一个模块中，不允许同时存在多个
const address = '北京市'

// export default address;

export default function(argument) {
  console.log(argument);
}