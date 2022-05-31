/*
* 类
* 对象的模板
* 对象的属性和方法
* class关键字
*   1. 构造函数
*   2. 实例函数
*   3. this的指向
*       类中的代码都会使用严格模式。函数的this不是window 而是undefined
*       以方法形式调用时，this指向当前实例    p1.print()
*       以函数形式调用，this指向undefined  let a = p1.print;   a();
* */

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // 将print函数的this 绑定到当前实例的this 不推荐
        // this.print = this.print.bind(this);
        // 可以使用arrow function 其this是由外层函数决定的

    }
    // 不用写function 关键字
    add(a, b){
        return a + b;
    }

    print(){
        console.log(this);
    }

    print1 = () => {
        console.log(this);
    }
}

let p1 = new Person("tom", 19);
// console.log(p1); // Person { name: 'tom', age: 19 }
// console.log(p1.add(1, 2));

p1.print(); // Person { name: 'tom', age: 19 }
let a = p1.print;
a();  // undefined

// print1是arrow function 因此这二者的this是相同的
p1.print1();
let b = p1.print1;
b();


