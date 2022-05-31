const fn = function (a){
    return a + "hello";
}
/*
*  参数 => 函数体
*  多个参数加()  (a , b)
*
*  后面是返回值。
*  expression vs statement;
* */
const fn1 = a => a + " hello";
console.log(fn1("world"));

const fn2 = (a, b) => {
    let c = a + b;
    return c + a + b;
};

console.log(fn2(1, 2));

// 返回一个对象。要加() 否则会认为是代码块。
const fn3 = (a , b) => ({name: a, age: b});
console.log("tom", 11);

const fn4 = (a , b) => {
    if(true){
        return a + b;
    }
}
console.log(fn4(1, 2));

