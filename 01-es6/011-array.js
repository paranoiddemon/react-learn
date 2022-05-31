const arr = [1, 2, 3, 4, 5];

/*  1. map 根据原有的数组返回新的数组 传入一个回调函数
    回调函数有三个参数
    value
    index
    array 数组本身

    2. filter
    传入一个回调函数，true保留。不影响原来的数组

    3. find
    获得符合条件的第一个元素

    4. reduce
    合并数组中的元素, 四个参数
    pre
    cur
    index
    array
    initial

 */
let numbers = arr.map((v,i) => {
    //console.log(i);
    return v = v * 2;
    //console.log(v); // 每一个元素会执行
});
let fil = arr.filter(value => value >= 3);
let fin = arr.find(value => value >= 3);
// 可以指定初始值
let red = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 1)

console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(numbers); // [ 2, 4, 6, 8, 10 ]
console.log(fil); // [ 3, 4, 5 ]
console.log(fin); // [3]
console.log(red); // 15


const arr2 = ["tom", "jerry"];
let result = arr2.map(value => "<li>" + value + "<li>"); // [ '<li>tom<li>', '<li>jerry<li>' ]

console.log(result);