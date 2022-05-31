/*
* 模块不用把所有内容暴露给外部
* 导入方也不需要全部的内容
* 函数也是一等公民。和变量 数组 对象都是同一级的
* export
* 1. 默认 一个模块只能有一个默认导出 export default xx;
* 2. 命名 export const filedName;
*
*
* */
// 导出的变量名。在import的时候要相同的名字
export const a = 1, b = 2, c = 3;

const fn = () => {
    console.log(a + b + c);
}

export default a; // 变量a默认export

const obj = {name: "tom"}
const add = (a, b) => a + b;

export{obj, add};