/*
* var 没有块级作用域，会变成全局的变量。不再建议使用var
* 使用let 和 const
* */

if(true){
    var a = 1;
}

if(false){
    var c = 1;
}


// 1
console.log(a);
// undefined
console.log(c);

if(true){
    let b = 1;
}

// ReferenceError: b is not defined
// console.log(b);

// const的引用不变。指向一个对象，但是对象内部是可变的
const fn = function (){
    return 1 + 1;
}

const PI = 3.14

const obj = {name: "tom", age: 12}
obj.name = "jerry";

// jerry
console.log(obj.name);