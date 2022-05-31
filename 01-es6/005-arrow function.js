/*
* 箭头函数不是没有 arguments ，而是没有自己的 arguments ，自己的这个限定语很重要。
* 并且连 this、super、new.target 都没有自己的，全都来自父作用域。外层作用域
* 箭头函数中的this无法通过call() apply() bind()修改
* 箭头函数无法作为构造函数使用。
*
* */

function fn(){
    console.log(typeof [1,2]); // object
    console.log(arguments); // 函数的实参
    console.log(typeof arguments); // object
    console.log(arguments[1]);
}

//fn(); // [Arguments] {}

// 这样也行啊。没定义入参也能传参数啊
//fn(1, "a"); //[Arguments] { '0': 1, '1': 'a' }

const fn1 = (...args) => {
    console.log(args); // [ 1, 2 ]
    // console.log(arguments);
    console.log(this);
}
fn1(1,2);

// 剩余参数
function fn2(...args){
    console.log(args);
}
//fn2()


function foo() {
    setTimeout(() => {
        console.log("args:", arguments);
        console.log(this);
    }, 1);
}

foo(1, 2, 3, 4); // args: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
