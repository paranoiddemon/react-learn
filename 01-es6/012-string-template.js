/*
 使用 `键盘左上角。可以当作普通字符串。可以插入表达式 `${}` 可以放入任意的js表达式。
 可以运算以及引用对象属性，调用函数
 甚至可以嵌套
 */
let a = `test ${1 + 2}`;  //test 3

console.log(a);

// 可以定义多行字符串 不用换行符。空格等都会保留
let b = `In JavaScript this is
 not legal.`
console.log(b);

// 如果字符串内部使用要转义
let greeting = `\`Yo\` World!`;
console.log(greeting);  // `Yo` World!



