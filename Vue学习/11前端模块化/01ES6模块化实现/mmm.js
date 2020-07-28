// 1、导入{}定义的变量
import { flag, sum } from "./aaa.js";

if (flag) {
  console.log('小明是天才，哈哈哈');
  console.log(sum(20, 30));
}

// 2、直接导入export定义的变量
import {num1, height} from "./aaa.js";

console.log(num1);
console.log(height);

// 3、导入export的function/class
import {mul, person} from "./aaa.js";

console.log(mul(30, 50));

const p = new person;

p.run();

// 4、导入export default的内容
// 某些情况下，一个模块中包含某个功能，我们并不希望给这个功能命名，让导入者可以自己来命名，这时候就使用
// export default，default在一个模块只能存在一个
// 使用default后面不用跟{}，就表示导入default，import后面的名字可以自己命名

// import addr from "./aaa.js";
import print from "./aaa.js";

// console.log(addr);
print('你好啊');

// 5、统一全部导入
// 把全部内容导入到叫aaa的对象中，aaa可以自定义
import * as aaa from "./aaa.js"

// 按照对象访问的方法可访问导入的内容
console.log(aaa.flag);
console.log(aaa.height);
