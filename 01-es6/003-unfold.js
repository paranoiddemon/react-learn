// spread operator
function fn(a, b, c){
    return a + b + c;
}

const arr = [1, 2, 3];
//1,2,3undefinedundefined  arr作为fn的第一个参数了，后面没定义就变成拼字符串。这也行。
console.log(fn(arr));

// 6  ...表示展开arr数组。只要能便利都可以展开。一般在数组中使用
console.log(fn(...arr));

// 只展开前三个
const arr1 = [1, 2, 3, 4];
console.log(fn(...arr1));

// 浅复制
const arr2 = [...arr];
console.log(arr2); // [ 1, 2, 3 ]

const arr3 = [0,...arr2, 0];
console.log(arr3); //[ 0, 1, 2, 3, 0 ]


// 对象
let obj = {
    name: "tom",
    age: 10,
    gender: "male"
}

let obj1 = {...obj};
// 浅复制。如果存在相同的属性名。后面的属性会覆盖前面的
console.log(obj1);
let obj2 = {...obj1, hobby: "sing"}
console.log(obj2);



