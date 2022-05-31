// 先声明后赋值
let a, b;
let arr = [1, 2];
[a, b] = arr;
console.log(a, b);

// 声明和赋值同时进行
let [c, d] = arr;
console.log(c, d);

// 函数返回值
function fn(){
    return [3, 4];
}
console.log(fn());
let [e, f] = fn();
console.log(e, f);

// 只截取前面的
let arr2 = [1, 2, 3, 4];
let [a1, b1] = arr2;
console.log(a1, b1);  // 1 2

// 跳过元素
let [a2, b2, , c2] = arr2;
console.log(a2, b2, c2); // 1 2 4

// rest ...c3表示剩下的元素都赋值给c3， c3只能是最后一个元素，不能放前面
let [a3, b3, ...c3] = arr2;
console.log(a3, b3, c3) // 1 2 [ 3, 4 ]

// 解构数组
let obj = {
    name: "tom",
    age: 10,
    gender: "male"
}
// {对象属性: 待赋值变量}
// let {name: name, gender: gender} = obj;
// console.log(name, gender);

// obj属性和变量名相同 可以省略
let {name, gender} = obj;
console.log(name, gender); // tom male

// 嵌套解构  略， 简化代码但影响可读性


// 利用数组的解构交换变量位置
n1 = 10;
n2 = 20;
[n1, n2] = [n2, n1];
console.log('n1 = ' + n1, 'n2 = ' + n2); // n1 = 20 n2 = 10

arr = [1, 3, 2];
[arr[1], arr[2]] = [arr[2], arr[1]];
console.log(arr); // [1, 2, 3]