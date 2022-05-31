/*
*  import:
*  在package.json 设置 "type": "module"
*  1. 默认 import fieldName from 'path';
*   a. 导入的变量名可以自己指定。无需对应
*   b. 在网页中导入路径。/或 ./  或../ 扩展名也要
*  2. 命名导入 import {fieldName} from 'path'
*   a. 必须相同或者使用as重命名
* */

import x from './006-module1.js'; // SyntaxError: Cannot use import statement outside a module
console.log(x);

// 前面是默认导入，后面是命名导入
import x, {a as apple, b ,c} from './006-module1.js';
import {add} from './006-module1.js';

console.log(apple, b, c);

console.log(add(1, 2));